// import React, { useEffect } from 'react'
// import styled from 'styled-components'
// import { useGlobalContext } from '../../context/globalContext';
// import { InnerLayout } from '../../styles/Layouts';
// import Form from '../Form/Form';
// import IncomeItem from '../IncomeItem/IncomeItem';

// function Income() {
//     const {addIncome,incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

//     useEffect(() =>{
//         getIncomes()
//     }, [])
//     return (
//         <IncomeStyled>
//             <InnerLayout>
//                 <h1 >Incomes</h1>
//                 <h2 className="total-income"><span>Total Income: &#8377;{totalIncome()}</span></h2>
//                 <div className="income-content">
//                     <div className="form-container">
//                         <Form />
//                     </div>
//                     <div className="incomes">
//                         {incomes.map((income) => {
//                             const {_id, title, amount, date, category, description, type} = income;
//                             return <IncomeItem
//                                 key={_id}
//                                 id={_id} 
//                                 title={title} 
//                                 description={description} 
//                                 amount={amount} 
//                                 date={date} 
//                                 type={type}
//                                 category={category} 
//                                 indicatorColor="#33D17A"
//                                 deleteItem={deleteIncome}
//                             />
//                         })}
//                     </div>
//                 </div>
//             </InnerLayout>
//         </IncomeStyled>
//     )
// }

// const IncomeStyled = styled.div`
//     display: flex;
//     overflow: auto;
//     h1{
//          font-size: 2.8rem;
//          font-weight: 800;
//         color:#33D17A;
//     }
//     .total-income{
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         background: #111;
       
//         box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//         border-radius: 20px;
//         padding: 1rem;
//         margin: 1rem 0;
//         font-size: 2rem;
//         gap: .5rem;
//         color:  #33D17A;
//         span{
//             font-size: 2.5rem;
//             font-weight: 750;
//             color: #33D17A;
//         }
//     }
//     .income-content{
//         display: flex;
//         gap: 2rem;
//         .incomes{
//             flex: 1;
//         }

//          @media screen and (max-width: 1024px) {
//           display:flex;
//           flex-direction:column;
          
//         }
//     }
// `;

// export default Income




// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { useGlobalContext } from '../../context/globalContext';
// import { InnerLayout } from '../../styles/Layouts';
// import Form from '../Form/Form';
// import IncomeItem from '../IncomeItem/IncomeItem';

// function Income() {
//     const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();
//     const [sortedIncomes, setSortedIncomes] = useState([]); // For managing sorted incomes
//     const [sortBy, setSortBy] = useState('date'); // Sorting criteria (default: 'date')

//     useEffect(() => {
//         getIncomes();
//     }, []);

//     useEffect(() => {
//         handleSort();
//     }, [incomes, sortBy]);

//     const handleSort = () => {
//         const sorted = [...incomes].sort((a, b) => {
//             if (sortBy === 'date') {
//                 return new Date(b.date) - new Date(a.date); // Sort by date (newest first)
//             } else if (sortBy === 'amount') {
//                 return b.amount - a.amount; // Sort by amount (highest first)
//             } else if (sortBy === 'title') {
//                 return a.title.localeCompare(b.title); // Sort alphabetically by title
//             }
//             return 0;
//         });
//         setSortedIncomes(sorted);
//     };

//     return (
//         <IncomeStyled>
//             <InnerLayout>
//                 <div className="controls">
//                     <label htmlFor="sort">Sort By:</label>
//                     <select
//                         id="sort"
//                         value={sortBy}
//                         onChange={(e) => setSortBy(e.target.value)}
//                     >
//                         <option value="date">Date</option>
//                         <option value="amount">Amount</option>
//                         <option value="title">Title</option>
//                     </select>
//                 </div>
//                 <h1>Incomes</h1>
//                 <h2 className="total-income">
//                     <span>Total Income: &#8377;{totalIncome()}</span>
//                 </h2>
//                 <div className="income-content">
//                     <div className="form-container">
//                         <Form />
//                     </div>
//                     <div className="incomes">
//                         {sortedIncomes.map((income) => {
//                             const { _id, title, amount, date, category, description, type } = income;
//                             return (
//                                 <IncomeItem
//                                     key={_id}
//                                     id={_id}
//                                     title={title}
//                                     description={description}
//                                     amount={amount}
//                                     date={date}
//                                     type={type}
//                                     category={category}
//                                     indicatorColor="#33D17A"
//                                     deleteItem={deleteIncome}
//                                 />
//                             );
//                         })}
//                     </div>
//                 </div>
//             </InnerLayout>
//         </IncomeStyled>
//     );
// }

// const IncomeStyled = styled.div`
//     display: flex;
//     overflow: auto;

//     h1 {
//         font-size: 2.8rem;
//         font-weight: 800;
//         color: #33d17a;
//     }

//     .total-income {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         background: #111;
//         box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//         border-radius: 20px;
//         padding: 1rem;
//         margin: 1rem 0;
//         font-size: 2rem;
//         gap: 0.5rem;
//         color: #33d17a;

//         span {
//             font-size: 2.5rem;
//             font-weight: 750;
//             color: #33d17a;
//         }
//     }

//     .controls {
//         display: flex;
//         align-items: center;
//         gap: 1rem;
//         margin-bottom: 1rem;

//         label {
//             color: #f0f0f0;
//             font-weight: bold;
//         }

//         select {
//             padding: 0.5rem;
//             border-radius: 10px;
//             border: 1px solid #ccc;
//             background: #222;
//             color: #fff;
//             outline: none;
//             font-size: 1rem;
//         }
//     }

//     .income-content {
//         display: flex;
//         gap: 2rem;

//         .form-container {
//             flex: 1;
//         }

//         .incomes {
//             flex: 1;
//         }

//         @media screen and (max-width: 1024px) {
//             display: flex;
//             flex-direction: column;
//         }
//     }
// `;

// export default Income;






// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { useGlobalContext } from '../../context/globalContext';
// import { InnerLayout } from '../../styles/Layouts';
// import Form from '../Form/Form';
// import IncomeItem from '../IncomeItem/IncomeItem';

// function Income() {
//     const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();
//     const [sortedIncomes, setSortedIncomes] = useState([]); // For managing sorted incomes
//     const [sortBy, setSortBy] = useState('date'); // Sorting criteria (default: 'date')

//     useEffect(() => {
//         getIncomes();
//     }, []);

//     useEffect(() => {
//         handleSort();
//     }, [incomes, sortBy]);

//     const handleSort = () => {
//         const sorted = [...incomes].sort((a, b) => {
//             if (sortBy === 'date') {
//                 return new Date(b.date) - new Date(a.date); // Sort by date (newest first)
//             } else if (sortBy === 'amount') {
//                 return b.amount - a.amount; // Sort by amount (highest first)
//             } else if (sortBy === 'title') {
//                 return a.title.localeCompare(b.title); // Sort alphabetically by title
//             }
//             return 0;
//         });
//         setSortedIncomes(sorted);
//     };

//     return (
//         <IncomeStyled>
//             <InnerLayout>
//                 <div className="heading-controls">
//                     <h1>Incomes</h1>
//                     <div className="controls">
//                         <label htmlFor="sort">Sort By:</label>
//                         <select
//                             id="sort"
//                             value={sortBy}
//                             onChange={(e) => setSortBy(e.target.value)}
//                         >
//                             <option value="date">Date</option>
//                             <option value="amount">Amount</option>
//                             <option value="title">Title</option>
//                         </select>
//                     </div>
//                 </div>
//                 <h2 className="total-income">
//                     <span>Total Income: &#8377;{totalIncome()}</span>
//                 </h2>
//                 <div className="income-content">
//                     <div className="form-container">
//                         <Form />
//                     </div>
//                     <div className="incomes">
//                         {sortedIncomes.map((income) => {
//                             const { _id, title, amount, date, category, description, type } = income;
//                             return (
//                                 <IncomeItem
//                                     key={_id}
//                                     id={_id}
//                                     title={title}
//                                     description={description}
//                                     amount={amount}
//                                     date={date}
//                                     type={type}
//                                     category={category}
//                                     indicatorColor="#33D17A"
//                                     deleteItem={deleteIncome}
//                                 />
//                             );
//                         })}
//                     </div>
//                 </div>
//             </InnerLayout>
//         </IncomeStyled>
//     );
// }

// const IncomeStyled = styled.div`
//     display: flex;
//     overflow: auto;

//     h1 {
//         font-size: 2.8rem;
//         font-weight: 800;
//         color: #33d17a;
//     }

//     .total-income {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         background: #111;
//         box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//         border-radius: 20px;
//         padding: 1rem;
//         margin: 1rem 0;
//         font-size: 2rem;
//         gap: 0.5rem;
//         color: #33d17a;

//         span {
//             font-size: 2.5rem;
//             font-weight: 750;
//             color: #33d17a;
//         }
//     }

//     .heading-controls {
//         display: flex;
//         align-items: center;
//         justify-content: space-between;
//         margin-bottom: 1rem;

//         .controls {
//             display: flex;
//             align-items: center;
//             gap: 0.5rem;

//             label {
//                 color: #f0f0f0;
//                 font-weight: bold;
//             }

//             select {
//                 padding: 0.5rem;
//                 border-radius: 10px;
//                 border: 1px solid #ccc;
//                 background: #222;
//                 color: #fff;
//                 outline: none;
//                 font-size: 1rem;
//             }
//         }
//     }

//     .income-content {
//         display: flex;
//         gap: 2rem;

//         .form-container {
//             flex: 1;
//         }

//         .incomes {
//             flex: 1;
//         }

//         @media screen and (max-width: 1024px) {
//             display: flex;
//             flex-direction: column;
//         }
//     }
// `;

// export default Income;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();
    const [sortedIncomes, setSortedIncomes] = useState([]); // For managing sorted incomes
    const [sortBy, setSortBy] = useState('date'); // Sorting criteria (default: 'date')

    useEffect(() => {
        getIncomes();
    }, []);

    useEffect(() => {
        handleSort();
    }, [incomes, sortBy]);

    const handleSort = () => {
        const sorted = [...incomes].sort((a, b) => {
            if (sortBy === 'date') {
                return new Date(b.date) - new Date(a.date); // Sort by date (newest first)
            } else if (sortBy === 'amount') {
                return b.amount - a.amount; // Sort by amount (highest first)
            } else if (sortBy === 'title') {
                return a.title.localeCompare(b.title); // Sort alphabetically by title
            }
            return 0;
        });
        setSortedIncomes(sorted);
    };

    return (
        <IncomeStyled>
            <InnerLayout>
                <div className="heading-controls">
                    <h1>Incomes</h1>
                    <div className="controls">
                        <label htmlFor="sort">Sort By:</label>
                        <select
                            id="sort"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
                <h2 className="total-income">
                    <span>Total Income: &#8377;{totalIncome()}</span>
                </h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {sortedIncomes.map((income) => {
                            const { _id, title, amount, date, category, description, type } = income;
                            return (
                                <IncomeItem
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    description={description}
                                    amount={amount}
                                    date={date}
                                    type={type}
                                    category={category}
                                    indicatorColor="#33D17A"
                                    deleteItem={deleteIncome}
                                />
                            );
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    );
}

const IncomeStyled = styled.div`
    display: flex;
    overflow: auto;

    h1 {
        font-size: 2.8rem;
        font-weight: 800;
        color: #33d17a;
    }

    .heading-controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;

        .controls {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            label {
                color: #f0f0f0;
                font-weight: bold;
            }

            select {
                padding: 0.5rem;
                border-radius: 10px;
                border: 1px solid #ccc;
                background: #222;
                color: #fff;
                outline: none;
                font-size: 1rem;
            }
        }
    }

    .total-income {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #111;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: 0.5rem;
        color: #33d17a;

        span {
            font-size: 2.5rem;
            font-weight: 750;
            color: #33d17a;
        }
    }

    .income-content {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;

        .form-container {
            flex: 1;
        }

        .incomes {
            flex: 2;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .income-item {
                background: #222;
                border-radius: 15px;
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                transition: all 0.3s ease;

                &:hover {
                    transform: scale(1.02);
                    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
                }

                .details {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;

                    .title {
                        font-size: 1.2rem;
                        font-weight: bold;
                        color: #fff;
                    }

                    .description {
                        font-size: 1rem;
                        color: #ccc;
                    }

                    .date {
                        font-size: 0.9rem;
                        color: #888;
                    }
                }

                .amount {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #33d17a;
                }

                .delete {
                    cursor: pointer;
                    font-size: 1.2rem;
                    color: #ff4d4f;
                    transition: all 0.3s ease;

                    &:hover {
                        color: #ff7875;
                    }
                }
            }
        }

        @media screen and (max-width: 1024px) {
            flex-direction: column;

            .incomes {
                flex: none;
            }
        }
    }
`;

export default Income;
