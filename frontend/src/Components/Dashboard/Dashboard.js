import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1 >Spending Overview</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2 className='total-income'>Total Income</h2>
                                <p className='total-income' >
                                &#8377; {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2 className='total-expense'>Total Expense</h2>
                                <p className='total-expense'>
                                &#8377; {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2 className='total-balance'>Total Balance</h2>
                                <p className='total-balance'>
                                &#8377; {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                       
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    h1 {
        color: #FFFFFF;
        font-size: 40px;
        text-align: center; /* Center-align the title for smaller screens */

        @media screen and (max-width: 1024px) {
            font-size: 25px;
        }
    }
    .stats-con {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;

        /* Media query for tablets and smaller devices */
        @media screen and (max-width: 1024px) {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        @media screen and (max-width: 420px) {
            height: auto;
            width: 78%;
        }

        .chart-con {
            grid-column: 1 / 4;
            height: 395px;

            @media screen and (max-width: 1024px) {
                grid-column: 1 / -1; /* Full width on smaller screens */
            }

            .amount-con {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1rem;
                margin-top: 2rem;

                @media screen and (max-width: 1024px) {
                    height: auto;
                    width: 95%;
                }

                .income, .expense, .balance {
                    background: #111;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 15px;
                    padding: 1rem;
                    text-align: center;
                    p {
                        font-size: 2rem;
                        font-weight: 400;

                        @media screen and (max-width: 1024px) {
                            font-size: 1.5rem;
                        }
                        @media screen and (max-width: 770px) {
                            font-size: 1.0rem;
                        }
                    }
                }

                .total-income {
                    color: #33D17A;
                    font-weight: 800;
                    @media screen and (max-width: 1024px) {
                        font-weight: 600;
                    }
                    @media screen and (max-width: 770px) {
                        font-weight: 400;
                        font-size: 1.0rem;
                    }
                }
                .total-expense {
                    color: #FF4D4D;
                    font-weight: 800;
                    @media screen and (max-width: 1024px) {
                        font-weight: 600;
                    }
                    @media screen and (max-width: 770px) {
                        font-weight: 400;
                        font-size: 1.0rem;
                    }
                }
                .total-balance {
                    color: #4DA3FF;
                    font-weight: 800;
                    @media screen and (max-width: 1024px) {
                        font-weight: 600;
                    }
                    @media screen and (max-width: 770px) {
                        font-weight: 400;
                        font-size: 1.0rem;
                    }
                }
            
            }
        }

        .history-con {
            grid-column: 4 / -1;

            @media screen and (max-width: 1024px) {
                display:none;
            }

            h2 {
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .salary-title {
                font-size: 1.2rem;
                color: white;
                span {
                    font-size: 1.8rem;
                }
            }

            .salary-item {
                background: #111;
                color: #FF4D4D;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p {
                    font-weight: 600;
                    font-size: 1.6rem;

                    @media screen and (max-width: 1024px) {
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }
`;


export default Dashboard