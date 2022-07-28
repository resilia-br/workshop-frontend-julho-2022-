import { useState, useEffect, useImperativeHandle } from 'react';
import './App.css';
import { Balance } from './components/saldo';
import { Singnup } from './components/cadastro';
import { Transfer } from './components/transfer';

function App() {

  // define o estado de criar ou gerenciar conta
  const [account, setAccount] = useState(false);
  
  // exibe os dados do saldo e transacoes realizadas
  const [transaction, setTransaction] = useState(0);
  const [balance, setBalance] = useState("1212,00");

  useEffect(() => {
    
  }, [])

  return (
    <div className='wrapper'>
      <header>Resilia Bank</header>
      <main>
          { account ? 
            <>
              <Balance transaction={transaction} balance={balance} />
              <Transfer setTransaction={setTransaction} transaction={transaction} />
            </> 
            : <Singnup setAccount={setAccount} /> 
          }
      </main>
      <footer>Resilia Bank 2022</footer>
    </div>
  );
}

export default App;
