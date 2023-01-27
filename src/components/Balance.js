import { useState } from "react";

const Balance = (props) => {

    const transactions= Array.from(props.transactions);
    // const body = props.body;

    // console.log("teste ",transactions)

    let total = 0;
    for(var i = 0 ; i < transactions.length; i++){
        // console.log(parseInt(transactions[i].amount))
        total += parseInt(transactions[i].amount);
    }

    // const total = transactions.reduce((acc, item) => (acc += item.amount), 0).toFixed(2);
    // console.log(total)
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </div>
    )
}

export default Balance;