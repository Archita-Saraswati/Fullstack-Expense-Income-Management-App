import React from 'react';
import styled from 'styled-components';
import { dateFormat } from '../../utils/dateFormat';
import { 
    bitcoin, book, calender, card, circle, clothing, comment, dollar, food, 
    freelance, medical, money, piggy, stocks, takeaway, trash, travelling, tv, users, yt 
} from '../../utils/Icons';
import Button from '../Button/Button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {
    const categoryIcon = () => {
        switch (category) {
            case 'salary': return money;
            case 'freelancing': return freelance;
            case 'investments': return stocks;
            case 'stocks': return users;
            case 'bitcoin': return bitcoin;
            case 'bank': return card;
            case 'youtube': return yt;
            case 'other': return piggy;
            default: return '';
        }
    };

    const expenseCatIcon = () => {
        switch (category) {
            case 'education': return book;
            case 'groceries': return food;
            case 'health': return medical;
            case 'subscriptions': return tv;
            case 'takeaways': return takeaway;
            case 'clothing': return clothing;
            case 'travelling': return travelling;
            case 'other': return circle;
            default: return '';
        }
    };

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>&#8377; {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>{comment} {description}</p>
                    </div>
                    <div className="btn-con">
                        <Button
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color)'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    );
}

const IncomeItemStyled = styled.div`
    background: #111;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    }

    .icon {
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #e0e0e0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;

        i {
            font-size: 2.6rem;
        }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        h5 {
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            color: #f0f0f0;

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 50%;
                background: ${(props) => props.indicator};
            }
        }

        .inner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .text {
                display: flex;
                align-items: center;
                gap: 1.5rem;

                p {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #888;
                    opacity: 0.8;
                }
            }
        }
    }

    .btn-con {
        button {
            transition: transform 0.3s ease, background-color 0.3s ease;

            &:hover {
                transform: scale(1.1);
                background-color: var(--color-green);
            }
        }
    }
`;

export default IncomeItem;
