import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Transaction.css'; 

export const Transaction = (props) => {
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState([]);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const checkBalance = () => {
    alert(`Your balance is $${balance}`);
  };

  const viewTransactions = () => {
    alert(`Transaction History: ${transactions.join(', ')}`);
  };

  const withdrawMoney = () => {
    if (withdrawAmount <= 0) {
      alert('Please enter a valid withdrawal amount.');
      return;
    }

    if (withdrawAmount > balance) {
      alert('Insufficient balance.');
      return;
    }

    setBalance(balance - withdrawAmount);
    setTransactions([...transactions, `Withdrawn $${withdrawAmount}`]);
    setWithdrawAmount(0);
  };

  return (
    <div className="Transaction">
      <div className="button-container">
        <div className="box">
          <h2>Check Balance</h2>
          <button onClick={checkBalance}>Check</button>
        </div>

        <div className="box">
          <h2>View Transactions</h2>
          <button onClick={viewTransactions}>View</button>
        </div>

        <div className="box">
          <h2>Withdraw Money</h2>
          <input
            type="number"
            placeholder="Enter amount to withdraw"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(Number(e.target.value))}
          />
          <button onClick={withdrawMoney}>Withdraw</button>
        </div>
      </div>
    </div>
  );
}
