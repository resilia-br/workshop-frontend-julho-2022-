import React from 'react';
import './index.css';

export const Balance = ({transaction, balance}) => {
    return (
      <>
       <div className="balance">
            <h3>Meu saldo</h3>
            <ul>
              <li>
                <h3>Transações</h3>
                <span className="counter">{transaction}</span>
                <span className='last-transactions'>ver últimas transações</span>
              </li>
              <li className='active'>
                <h3>Saldo</h3>
                <span className="counter">R$ {balance}</span>
                <span className='last-transactions'>ver últimas transacoes</span>
              </li>
            </ul>
          </div> 
      </>
    );
  };