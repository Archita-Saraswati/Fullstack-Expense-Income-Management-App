// import React from 'react'
// import styled from 'styled-components'
// import { useGlobalContext } from '../context/globalContext';




// function History() {
//     const {transactionHistory} = useGlobalContext()

//     const [...history] = transactionHistory()

//     return (
//         <HistoryStyled>
//             <h2>Transactions</h2>
//             {history.map((item) =>{
//                 const {_id, title, amount, type} = item
//                 return (
//                     <div key={_id} className="history-item">
//                         <p style={{
//                             color: type === 'expense' ? '#FF4D4D' : '#33D17A'
                            
//                         }}>
//                             {title}
//                         </p>

//                         <p style={{
//                             color: type === 'expense' ? '#FF4D4D' : '#33D17A'
//                         }}>
//                             {
//                                 type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
//                             }
//                         </p>

                      
                        
                        
//                     </div>
//                 )
//             })}
//         </HistoryStyled>
//     )
// }

// const HistoryStyled = styled.div`
//     h2{
//     color:white;
       
//     }
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     .history-item{
//         background: #111;
        
//         box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//         padding: 1rem;
//         border-radius: 20px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
        
//     }
   
// `;

// export default History


// import React from 'react';
// import styled from 'styled-components';
// import { useGlobalContext } from '../context/globalContext';
// // import { book, food, medical, tv, takeaway, clothing, travelling, circle, comment, shoppingCart, movie } from '../utils/Icons';
// // Import necessary icons
// import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, travelling, tv, users, yt } from '../utils/Icons';
// function History() {
//     const { transactionHistory } = useGlobalContext();
//     const [...history] = transactionHistory();

//     // Function to return the appropriate icon based on transaction title or type
//     const getTransactionIcon = (title) => {
//         switch (title.toLowerCase()) {
//             case 'salary':
//                 return money;
//             case 'freelancing':
//                 return freelance
//             case 'investments':
//                 return stocks;
//             case 'stocks':
//                 return users;
//             case 'bitcoin':
//                 return bitcoin;
//             case 'bank':
//                 return card;
//             case 'youtube':
//                 return yt;
//             case 'other':
//                 return piggy;
//             case 'education':
//                             return book;
//                         case 'groceries':
//                             return food;
//                         case 'health':
//                             return medical;
//                         case 'subscriptions':
//                             return tv;
//                         case 'takeaways':
//                             return takeaway;
//                         case 'clothing':
//                             return clothing;
//                         case 'travelling':
//                             return travelling;
//                         case 'other':
//                             return circle;
//             default:
//                 return ''
//         }
//     };

//     return (
//         <HistoryStyled>
//             <h2>Transactions</h2>
//             {history.map((item) => {
//                 const { _id, title, amount, type } = item;
//                 return (
//                     <div key={_id} className="history-item">
//                         <div className="icon">{getTransactionIcon(title)}</div>
//                         <p
//                             style={{
//                                 color: type === 'expense' ? '#FF4D4D' : '#33D17A',
//                             }}
//                         >
//                             {title}
//                         </p>
//                         <p
//                             style={{
//                                 color: type === 'expense' ? '#FF4D4D' : '#33D17A',
//                             }}
//                         >
//                             {type === 'expense'
//                                 ? `-${amount <= 0 ? 0 : amount}`
//                                 : `+${amount <= 0 ? 0 : amount}`}
//                         </p>
//                     </div>
//                 );
//             })}
//         </HistoryStyled>
//     );
// }

// const HistoryStyled = styled.div`
//     h2 {
//         color: white;
//     }
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     .history-item {
//         background: #111;
//         box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//         padding: 1rem;
//         border-radius: 20px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         .icon {
//             width: 40px;
//             height: 40px;
//             border-radius: 50%;
//             background: #e0e0e0;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             margin-right: 10px;
//             i {
//                 font-size: 1.5rem;
//             }
//         }
//     }
// `;

// export default History;



// import React from 'react'; 
// import styled from 'styled-components';
// import { useGlobalContext } from '../context/globalContext';
// import {
//     bitcoin, book, calender, card, circle, clothing, comment, dollar, food,
//     freelance, medical, money, piggy, stocks, takeaway, trash, travelling, tv, users, yt
// } from '../utils/Icons';

// function History() {
//     const { transactionHistory } = useGlobalContext();
//     const [...history] = transactionHistory();

//     // Function to return the appropriate icon based on transaction title or type
//     const getTransactionIcon = (title, type) => {
//         // Define icons for incomes and expenses
//         const incomeIcons = {
//             salary: money,
//             freelancing: freelance,
//             investments: stocks,
//             stocks: users,
//             bitcoin: bitcoin,
//             bank: card,
//             youtube: yt,
//             other: piggy
//         };

//         const expenseIcons = {
//             education: book,
//             groceries: food,
//             health: medical,
//             subscriptions: tv,
//             takeaways: takeaway,
//             clothing: clothing,
//             travelling: travelling,
//             other: circle
//         };

//         // Return appropriate icon based on type and title
//         if (type === 'income') {
//             return incomeIcons[title.toLowerCase()] || piggy; // Default to piggy icon
//         }
//         if (type === 'expense') {
//             return expenseIcons[title.toLowerCase()] || circle; // Default to circle icon
//         }
//         return ''; // Return empty if no match
//     };

//     return (
//         <HistoryStyled>
//             <h2>Transactions</h2>
//             {history.map((item) => {
//                 const { _id, title, amount, type } = item;

//                 return (
//                     <div key={_id} className="history-item">
//                         <div className="icon">
//                             <img src={getTransactionIcon(title, type)} alt={title} />
//                         </div>
//                         <p
//                             style={{
//                                 color: type === 'expense' ? '#FF4D4D' : '#33D17A',
//                             }}
//                         >
//                             {title}
//                         </p>
//                         <p
//                             style={{
//                                 color: type === 'expense' ? '#FF4D4D' : '#33D17A',
//                             }}
//                         >
//                             {type === 'expense'
//                                 ? `-${amount <= 0 ? 0 : amount}`
//                                 : `+${amount <= 0 ? 0 : amount}`}
//                         </p>
//                     </div>
//                 );
//             })}
//         </HistoryStyled>
//     );
// }

// const HistoryStyled = styled.div`
//     h2 {
//         color: white;
//     }
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     .history-item {
//         background: #111;
//         box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//         padding: 1rem;
//         border-radius: 20px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         .icon {
//             width: 40px;
//             height: 40px;
//             border-radius: 50%;
//             background: #e0e0e0;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             margin-right: 10px;
//             img {
//                 width: 24px;
//                 height: 24px;
//             }
//         }
//     }
// `;

// export default History;


// import React from 'react'; 
// import styled from 'styled-components';
// import { useGlobalContext } from '../context/globalContext';
// import {
//     bitcoin, book, calender, card, circle, clothing, comment, dollar, food,
//     freelance, medical, money, piggy, stocks, takeaway, trash, travelling, tv, users, yt
// } from '../utils/Icons';

// function History() {
//     const { transactionHistory } = useGlobalContext();
//     const [...history] = transactionHistory();

//     // Function to return the appropriate icon based on transaction title or type
//     const getTransactionIcon = (title, type) => {
//         // Define icons for incomes and expenses
//         const incomeIcons = {
//             salary: money,
//             freelancing: freelance,
//             investments: stocks,
//             stocks: users,
//             bitcoin: bitcoin,
//             bank: card,
//             youtube: yt,
//             other: piggy
//         };

//         const expenseIcons = {
//             education: book,
//             groceries: food,
//             health: medical,
//             subscriptions: tv,
//             takeaways: takeaway,
//             clothing: clothing,
//             travelling: travelling,
//             other: circle
//         };

//         // Return appropriate icon based on type and title
//         if (type === 'income') {
//             return incomeIcons[title.toLowerCase()] || piggy; // Default to piggy icon
//         }
//         if (type === 'expense') {
//             return expenseIcons[title.toLowerCase()] || circle; // Default to circle icon
//         }
//         return null; // Return null if no match
//     };

//     return (
//         <HistoryStyled>
//             <h2>Transactions</h2>
//             {history.map((item) => {
//                 const { _id, title, amount, type } = item;

//                 return (
//                     <div key={_id} className="history-item">
//                         <div className="icon">
//                             {getTransactionIcon(title, type)}
//                         </div>
//                         <p
//                             style={{
//                                 color: type === 'expense' ? '#FF4D4D' : '#33D17A',
//                             }}
//                         >
//                             {title}
//                         </p>
//                         <p
//                             style={{
//                                 color: type === 'expense' ? '#FF4D4D' : '#33D17A',
//                             }}
//                         >
//                             {type === 'expense'
//                                 ? `-${amount <= 0 ? 0 : amount}`
//                                 : `+${amount <= 0 ? 0 : amount}`}
//                         </p>
//                     </div>
//                 );
//             })}
//         </HistoryStyled>
//     );
// }

// const HistoryStyled = styled.div`
//     h2 {
//         color: white;
//     }
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     .history-item {
//         background: #111;
//         box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//         padding: 1rem;
//         border-radius: 20px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         .icon {
//             width: 40px;
//             height: 40px;
//             border-radius: 50%;
//             background: #e0e0e0;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             margin-right: 10px;
//             i {
//                 font-size: 1.5rem;
//                 color: #333;
//             }
//         }
//     }
// `;

// export default History;


import React from 'react'; 
import styled from 'styled-components';
import { useGlobalContext } from '../context/globalContext';
import {
    bitcoin, book, calender, card, circle, clothing, comment, dollar, food,
    freelance, medical, money, piggy, stocks, takeaway, trash, travelling, tv, users, yt
} from '../utils/Icons';

function History() {
    const { transactionHistory } = useGlobalContext();
    const [...history] = transactionHistory();

    // Function to return the appropriate icon based on transaction title or type
    const getTransactionIcon = (title, type) => {
        // Define icons for incomes and expenses
        const incomeIcons = {
            salary: money,
            freelancing: freelance,
            investments: stocks,
            stocks: users,
            bitcoin: bitcoin,
            bank: card,
            youtube: yt,
            other: piggy,
        };

        const expenseIcons = {
            education: book,
            groceries: food,
            health: medical,
            subscriptions: tv,
            takeaways: takeaway,
            clothing: clothing,
            travelling: travelling,
            other: circle,
        };

        // Return appropriate icon based on type and title
        if (type === 'income') {
            return incomeIcons[title.toLowerCase()] || piggy; // Default to piggy icon
        }
        if (type === 'expense') {
            return expenseIcons[title.toLowerCase()] || circle; // Default to circle icon
        }
        return null; // Return null if no match
    };

    return (
        <HistoryStyled>
            <h2>Transactions</h2>
            {history.map((item) => {
                const { _id, title, amount, type, category } = item;

                return (
                    <div key={_id} className="history-item">
                        <div className="icon">
                            {getTransactionIcon(category, type)}
                        </div>
                        <p
                            style={{
                                color: type === 'expense' ? '#FF4D4D' : '#33D17A',
                                fontWeight: 'bold',
                            }}
                        >
                            {title}
                        </p>
                        <p
                            style={{
                                color: type === 'expense' ? '#FF4D4D' : '#33D17A',
                                fontWeight: 'bold',
                            }}
                        >
                            {type === 'expense'
                                ? `-${amount <= 0 ? 0 : amount}`
                                : `+${amount <= 0 ? 0 : amount}`}
                        </p>
                    </div>
                );
            })}
        </HistoryStyled>
    );
}

const HistoryStyled = styled.div`
    h2 {
        color: white;
    }
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item {
        background: #111;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #e0e0e0;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            i {
                font-size: 1.5rem;
                color: #333;
            }
        }
    }
`;

export default History;

