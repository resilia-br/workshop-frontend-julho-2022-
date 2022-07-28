import { useRef, useCallback, useEffect } from 'react';
import React from 'react';
import './index.css';

export const Transfer = ({setTransaction, transaction}) => {

  const form = useRef();

  const handleSubmit = () => {
    const increment = parseInt(transaction + 1);

    setTransaction(increment);
  };

    return (
      <>
         <div className="transfer">
          <h3>Nova Transaçāo</h3>
          <form className='form' ref={form} onSubmit={handleSubmit}>
            <label className='label'>
              <select>
                <option value="0001">Luan Fagundes</option>
                <option value="0002">Daniel Rocha</option>
                <option value="0003">Karol Harumi</option>
              </select>
            </label>
            <label className='label'>
              <input type="text" className='amount' placeholder='Valor' />
            </label>
            <input type="submit" value="Transferir" className='submit-transfer' />
            <p className='text-highlight'>*Suas transferências serāo apenas para contas cadastradas.</p>
          </form>
        </div>
      </>
    );
  };