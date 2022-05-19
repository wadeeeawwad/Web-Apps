import React, { useEffect, useState } from 'react'
import IncomeForm from './components/IncomeForm'
import Header from './components/Header'
import IncomeList from './components/IncomeList'

function App() {
    const [totalIncome,setTotalIncome]=useState(0);
    const [income,setIncome]=useState([])

    useEffect(()=>{
        let temp=0;
        for(let i = 0;i<income.length;i++){
            temp=temp+parseInt(income[i].price);
        }
        setTotalIncome(temp);
    },[income])

    const deleteAll=()=>{
        setIncome([])
    }
  return (
    <div className="App">
    <Header totalIncome={totalIncome} setTotalIncome={setTotalIncome} />
    <IncomeForm income={income} setIncome={setIncome} deleteAll={deleteAll}/>
    <IncomeList income={income} setIncome={setIncome} />
   
    
    </div>
  )
}

export default App