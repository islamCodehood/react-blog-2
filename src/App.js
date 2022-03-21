import './App.css';
import { useState } from "react";
import { depositAmount, withdrawAmount } from "./actions.js";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const [ amount, setAmount ] = useState(0);

  const balance = useSelector(state => {
    console.log(state)
    return state
  })

  /******************* */
  const dispatch = useDispatch()
  //ACTIONS DISPATCHERS
  const deposit = () => {
    dispatch(depositAmount(amount))
  }
  const withdraw = () => {
    if (amount > balance) {
      alert('Not enough funds!');
      return;
    }
    dispatch(withdrawAmount(amount))
  }
  /********************* */

  return (
    <div className="App">
      <div>Balance: {balance}</div>
      <input type="number" name="amount" id="amount" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
      <div className="btn-wrapper">
        <button onClick={deposit}>Deposit</button>
	      <button onClick={withdraw}>Withdraw</button>
      </div>
    </div>
  );
}

export default App;
