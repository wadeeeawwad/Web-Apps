import React from 'react'
import IncomItem from './IncomItem';

function List(props) {
  const {income,setIncome}=props
  const removeIncome =(i)=>{
     let temp = income.filter((v,index)=>index != i);
     setIncome(temp)
  }
  const sortByDate =(a,b)=>{
    return a.date-b.date
  }
    
  return (
    <div className="income-list">
    {income.sort(sortByDate).map((value,index)=>(
      <IncomItem
      key={index}
      income ={value} 
      index ={index}
      removeIncome={removeIncome}

      
      
      />


    ))}
   <p>{props.income.price}</p>
    
    </div>
  )
}

export default List

