const IncomeExpenses = (props) => {

    const transactions = Array.from(props.transactions);

    let income = 0, expense = 0;
    for(var i = 0 ; i < transactions.length; i++){
        let amount = parseInt(transactions[i].amount);
        if(amount < 0){
            expense += amount;
        } else{
            income += amount;
        }
    }

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense*-1}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses;