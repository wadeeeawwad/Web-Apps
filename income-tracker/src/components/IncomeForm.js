import React, { useRef, useState } from "react";

function IncomeForm(props) {
  const { income, setIncome,deleteAll } = props;
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const [date, setDate] = useState("");

  const descriptionHandller = (e) => {
    e.preventDefault();
    setDesc(e.target.value);
  };

  const dateHandler = (e) => {
    e.preventDefault();

    setDate(e.target.value);
  };
  const AddIncomeHandler = (e) => {
    e.preventDefault();
    let d = date.split("-");
    let newD = new Date(d[0], d[1] - 1, d[2]);
   
    setIncome([
      ...income,
      {
        "desc": desc,
        "price": price,
        "date":  newD.getTime()
      },
    ]);

    setDesc("");
    setPrice("");
    setDate("");
  };
  const priceHandller = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };
  const deleteAllHandller=()=>{
    deleteAll()
  }

  return (
    <>
    <form className="income-form" onSubmit={AddIncomeHandler}>
      <div className="form-inner">
        <input
          value={desc}
          type="text"
          placeholder="Description"
          onChange={descriptionHandller}
        ></input>

        <input
          placeholder="price"
          type="number"
          onChange={priceHandller}
          value={price}
        ></input>

      <input
          placeholder="date"
          type="date"
          onChange={dateHandler}
          value={date}
        ></input>"

        <input type="submit" value="Add Income" />
      </div>
    </form>
     <button onClick={deleteAllHandller}>deleteAll</button>

    </>
    
  );
}

export default IncomeForm;
