const TransactionsList = (props) => {

    const transactions = Array.from(props.arr.data);
    // console.log(transactions)
    // const {setData} = props.arr.setData;
    let newValue = {};

    const handleClick = (id) => {

        fetch("http://localhost:8080/transactions/" + id, {
            method: "DELETE",
        }).then(() => {
            console.log("Deleted successfully");
        })

        fetch('http://localhost:8080/transactions/', {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        }).then((data) => {
            return data.json();
        }).then((res) => {
            newValue = res;
            props.arr.setData(newValue);
        })

    }

    return (
        <div className="">
            <h3>History</h3>
            
            <ul className="list">
                {transactions.map((transaction) => (

                    <li className={transaction.amount < 0 ? "minus" : "plus"} key={transaction.id}>
                        
                        {transaction.body} <span>{transaction.amount}</span>
                        <button className="delete-btn" key={transaction.id} onClick = {(e) => {
                            handleClick(transaction.id);
                        }} >x</button>
                    </li>
                ))}
            </ul>


        </div>

        // <div>
        //     <h3>History</h3>
        //     <div>
        //         <ul className="list">
        //             {transactions.map((transaction) => (

        //                 <li className={transaction.amount < 0 ? "minus" : "plus"} key={transaction.id}>
        //                     <button className="delete-btn" key={transaction.id} onClick={(e) => {
        //                         handleClick(transaction.id);
        //                     }} >x</button>
        //                     {transaction.body} <span>{transaction.amount}</span>
        //                 </li>
        //             ))}
        //         </ul>
        //     </div>



        // </div>
    )
}

export default TransactionsList;