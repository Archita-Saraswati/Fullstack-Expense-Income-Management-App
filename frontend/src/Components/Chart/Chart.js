


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
import { Line, Pie } from 'react-chartjs-2';
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
    ArcElement
);

function Chart() {
    const { incomes, expenses } = useGlobalContext();

    // Sort incomes and expenses by date in ascending order
    const sortedIncomes = [...incomes].sort((a, b) => new Date(a.date) - new Date(b.date));
    const sortedExpenses = [...expenses].sort((a, b) => new Date(a.date) - new Date(b.date));

    // Get unique sorted dates
    const dates = Array.from(
        new Set([...sortedIncomes, ...sortedExpenses].map((item) => dateFormat(item.date)))
    ).sort((a, b) => new Date(a) - new Date(b));

    // Map data to corresponding dates
    const incomeData = dates.map((date) => {
        const income = sortedIncomes.find((inc) => dateFormat(inc.date) === date);
        return income ? income.amount : 0;
    });

    const expenseData = dates.map((date) => {
        const expense = sortedExpenses.find((exp) => dateFormat(exp.date) === date);
        return expense ? expense.amount : 0;
    });

    // Aggregate income by category for pie chart
    const incomeDataPie = incomes.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + item.amount;
        return acc;
    }, {});

    // Aggregate expenses by category for pie chart
    const expenseDataPie = expenses.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + item.amount;
        return acc;
    }, {});

    // Line Chart Data
    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Income',
                data: incomeData,
                borderColor: '#33D17A',
                backgroundColor: 'rgba(51, 209, 122, 0.2)',
                tension: 0.3, // Smooth curve
                fill: true,
                pointBackgroundColor: '#33D17A',
                pointBorderColor: '#33D17A',
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
            },
            {
                label: 'Expenses',
                data: expenseData,
                borderColor: '#FF4D4D',
                backgroundColor: 'rgba(255, 77, 77, 0.2)',
                tension: 0.3,
                fill: true,
                pointBackgroundColor: '#FF4D4D',
                pointBorderColor: '#FF4D4D',
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
            },
        ],
    };

    // Line Chart Options
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#fff',
                    boxWidth: 20,
                },
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#ccc' },
            },
            y: {
                grid: { display: false },
                ticks: { color: '#ccc' },
            },
        },
    };

    // Pie Chart Data
    const colors = ['#33D17A', '#4D90FE', '#FFA500', '#FF4D4D', '#A569BD', '#F39C12', '#2ECC71'];
    
    const incomeCategories = Object.keys(incomeDataPie);
    const incomeAmounts = Object.values(incomeDataPie);
    const expenseCategories = Object.keys(expenseDataPie);
    const expenseAmounts = Object.values(expenseDataPie);

    const incomeChartData = {
        labels: incomeCategories,
        datasets: [
            {
                label: 'Income',
                data: incomeAmounts,
                backgroundColor: colors.slice(0, incomeCategories.length),
                borderWidth: 1,
            },
        ],
    };

    const expenseChartData = {
        labels: expenseCategories,
        datasets: [
            {
                label: 'Expenses',
                data: expenseAmounts,
                backgroundColor: colors.slice(0, expenseCategories.length),
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <ChartStyled>
                <Line data={data} options={options} />
            </ChartStyled>
            <ChartContainer>
                <div className="chart-box">
                    <h3>Income Distribution</h3>
                    <Pie data={incomeChartData} />
                </div>
                <div className="chart-box">
                    <h3>Expense Distribution</h3>
                    <Pie data={expenseChartData} />
                </div>
            </ChartContainer>
        </>
    );
}

// Styled Components for Custom Styling
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

const ChartContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background: #111;
    padding: 1rem;
    border-radius: 20px;
    width: 98%;
    margin-top: 20px;
    
    .chart-box {
        width: 100%;
        max-width: 290px;
        text-align: center;
        padding: 10px;
        background: #222;
        border-radius: 10px;
    }

    h3 {
        color: #fff;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;

export default Chart;

