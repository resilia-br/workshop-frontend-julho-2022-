import { useRef, useState } from 'react';
import './index.css';

export const Singnup = ({setAccount, nome, setNome}) => {
  const form = useRef();
  const [name, setName] = useState(nome)


  const validate = (input) => {
    if (!input) throw Error('Input invalido');
  }
  
   const serialize = () => {
    //converte a lista de inputs para um array
    const inputs = [...form.current.elements]; 

    const data = {};
    inputs.filter(input => {
      if (input.type === 'text' || input.type === 'number') {
        validate(input.value);
        data[input.name] = input.value;
      }
    });

    return JSON.stringify(data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = serialize();
    setAccount(true);
  };

  const changeName = (e) => {
    setName(setNome(e.target.value))
  }

  return (
    <>
      <div className="signup">
          <h3>Nova conta <span></span></h3>
          <form className='form' ref={form} onSubmit={handleSubmit}>
            <label className='label'>
              <input type="text" name='name' onChange={changeName} className='name' placeholder='Nome completo' required />
            </label>
            <label className='label'>
              <input type="number" name='cpf' className='cpf' placeholder='CPF' required maxLength={11} />
            </label>
            <input type="submit" value="Enviar" className='submit-signup' />
          </form>
        </div>
    </>
  );
};