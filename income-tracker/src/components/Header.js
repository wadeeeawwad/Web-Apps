import React from "react";

function Header(props) {
  return (
    <header>
      <h1>Income Tracker</h1>
      <div className="total-income">Totla Income £{props.totalIncome}</div>
    </header>
  );
}

export default Header;
