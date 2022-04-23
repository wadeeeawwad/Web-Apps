import React, { useState } from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import "./Tictac.css";
function TickTac() {
  const [turn, setTurn] = useState("x");
  const [Cells, setCells] = useState(Array(9).fill(""));
  const [winner,setWinner]=useState()

  const checkWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      Down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      Diaganol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    
    for (let combo in combos){
      combos[combo].forEach(pattern => {
        if (
          squares[pattern[0]] === ""||
          squares[pattern[1]] === ""||
          squares[pattern[2]] === ""
        ){
          //do Nothing
        }else if(
          squares[pattern[0]]===squares[pattern[1]] &&
          squares[pattern[1]]===squares[pattern[2]]
          ){
            setWinner (squares[pattern[0]])
          }
          //  else if{
          //    setWinner("no body win")
          // }
       
        
      });
    }


  };

  const onclickHandler = (num) => {
    if (Cells[num] !== "") {
      alert("its clicked ");
      return;
    }
    let squares = [...Cells];

    if (turn === "x") {
      squares[num] = "x";
      setTurn("o");
    } else {
      squares[num] = "o";
      setTurn("x");
    }

    setCells(squares);
    checkWinner(squares)
  };
  const buttonHandller=()=>{
    setWinner(null)
    setCells (Array(9).fill(""))
  }
  const Cell = ({ num }) => {
    return <td onClick={() => onclickHandler(num)}>{Cells[num]}</td>;
  };
  return (
    <div className="contaner">
      <table>
        Turn:{turn}
        <tbody className="tbody">
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
        <p> {winner} is the Winner</p>
        <button onClick={buttonHandller}> play Again</button>
        </>
      )}
    </div>
  );
}

export default TickTac;
