import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionsList from './components/TransactionsList';
import AddTransactions from './components/AddTransactions';
import useFetch from './useFetch';
// import { Route, Router, Routes } from 'react-router-dom';

function App() {

  const { data, setData } = useFetch("http://localhost:8080/transactions");

  // console.log("app.js ",data)



  return (

    <div>
      <Header />
      <div className="container">

        <Balance transactions={data} />
        <IncomeExpenses transactions={data} />
        {/* <TransactionsList transactions={data} setData={setData} /> */}
        <TransactionsList arr={{data, setData}} />

        <AddTransactions setData={setData} />

      </div>
    </div>



  );
}

export default App;
