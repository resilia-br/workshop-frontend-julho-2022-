import { useRef, useState } from 'react';
import './index.css';

import {HiEye, HiEyeOff} from "react-icons/hi"

export const Singnup = ({setAccount}) => {

  const form = useRef();

  const [cpf, setCpf] = useState("")
  const [show, setShow] = useState("")

  const handleClick = (e) => {
    e.preventDefault()
    setShow(!show)
  }

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

  return (
    <>
      <div className="signup">
          <h3>Nova conta <span></span></h3>
          <form className='form' ref={form} onSubmit={handleSubmit}>
            <label className='label'>
              <input type="text" name='name' className='name' placeholder='Nome completo' required />
            </label>
            <label className='label'>
            <div className="login-eye">
                {show ? (
                  <HiEye
                    size={20}
                    onClick={handleClick}
                    />
                ) : (
                  <HiEyeOff
                    size={20}
                    onClick={handleClick}/>
                )}
              </div>
              <input type={show ? "number" : "password"} name='cpf' value={cpf} onChange={e => setCpf(e.target.value)} className='cpf' placeholder='CPF' required maxLength={11} />
            </label>
            <input type="submit" value="Enviar" className='submit-signup' />
          </form>
        </div>
    </>
  );
};