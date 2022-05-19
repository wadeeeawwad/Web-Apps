import React from 'react'

function IncomItem(props) {
const {income,removeIncome,index}=props
const removeHandller=(i)=>{
    removeIncome(i)
}
let date = new Date(income.date)
let day =date.getDate()
let month = date.getMonth()+1
let year = date.getFullYear()
    
  return (
    <div className='income-item'>
    <button className='remove-item' onClick={()=>removeHandller(index)}>x</button>
    <div className='desc'>{income.desc}</div>
    <div className='price'>{income.price}</div>
    <div className='date'>{day + "/" + month + "/" + year}</div>

    
    
    
    </div>
  )
}

export default IncomItem