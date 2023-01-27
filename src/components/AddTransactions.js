import { useState } from "react";
// import axios from 'react'
// import  useNavigate from 'react-router-dom'
// import {useNavigate} from 'react-router-dom';

const AddTransactions = ({setData}) => {

  //  const setData = props.fun;

    const [body, setBody] = useState('');
    const [amount, setAmount] = useState(0);

    let newValue = {};

    const transaction = {body,amount};
    // console.log(transaction);
    const handleClick = (e) =>{
        e.preventDefault();

        fetch('http://localhost:8080/transactions',{
            method : 'POST',
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify(transaction)

            // body : transaction
        }).then(()=> {
            console.log("New Transaction added", transaction)
        })


        // axios.post('http://localhost:8080/transactions',transaction)
        // .then(()=> {
        //     console.log("New blog added-> ", transaction, JSON.stringify(transaction))
        // })


        fetch('http://localhost:8080/transactions',{
            method : 'GET',
            headers: {"Content-Type" : "application/json"},
        }).then((data)=> {
            return data.json();
        }).then((res) => {
            newValue = res;
            setData(newValue);
        })

        setBody('');
        setAmount(0);
        
        
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value = {body ?? ''} onChange = {(e) => setBody(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value = {amount ?? 0} onChange = {(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn" onClick={handleClick}>Add transaction</button>
            </form>
            {/* {console.log("now ",body, amount)} */}
        </div>
    )
}

export default AddTransactions;