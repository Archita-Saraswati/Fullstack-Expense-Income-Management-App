import React from 'react';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
);

function Chart() {
    const { incomes, expenses } = useGlobalContext();

    // Sort incomes and expenses by date in ascending order
    const sortedIncomes = [...incomes].sort((a, b) => new Date(a.date) - new Date(b.date));
    const sortedExpenses = [...expenses].sort((a, b) => new Date(a.date) - new Date(b.date));

    // Merge income and expense dates to cover all labels
    const dates = Array.from(
        new Set([...sortedIncomes, ...sortedExpenses].map((item) => dateFormat(item.date)))
    ).sort((a, b) => new Date(a) - new Date(b));

    const incomeData = dates.map((date) => {
        const income = sortedIncomes.find((inc) => dateFormat(inc.date) === date);
        return income ? income.amount : 0;
    });

    const expenseData = dates.map((date) => {
        const expense = sortedExpenses.find((exp) => dateFormat(exp.date) === date);
        return expense ? expense.amount : 0;
    });

    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Income',
                data: incomeData,
                borderColor: '#33D17A',
                backgroundColor: '#33D17A',
                tension: 0.2,
                fill: true,
                pointBackgroundColor: '#33D17A',
                pointBorderColor: '#33D17A',
                borderWidth: 2,
                pointRadius: 2,
                pointHoverRadius: 4,
            },
            {
                label: 'Expenses',
                data: expenseData,
                borderColor: '#FF4D4D',
                backgroundColor: '#FF4D4D',
                tension: 0.2,
                fill: true,
                pointBackgroundColor: '#FF4D4D',
                pointBorderColor: '#FF4D4D',
                borderWidth: 2,
                pointRadius: 2,
                pointHoverRadius: 4,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                grid: {
                    // color: 'rgba(255, 255, 255, 0.1)',
                },
            },
            y: {
                grid: {
                    // color: 'rgba(255, 255, 255, 0.1)',
                },
            },
        },
    };

    return (
        <ChartStyled>
            <Line data={data} options={options} />
        </ChartStyled>
    );
}

const ChartStyled = styled.div`
    background: #111;
    margin-top: 20px;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 80%;
    width: 98%;

    @media screen and (max-width: 1024px) {
        height: auto;
        width: 95%;
    }
    @media screen and (max-width: 420px) {
        height: auto;
        width: 95%;
    }
`;

export default Chart;
