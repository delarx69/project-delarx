import axios from 'axios';
import React,{useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage(){

    const[inputLoginValue,setInputValue] = useState('');
    
    const[inputPassValue,setInputPassValue] = useState('');

    const navigate = useNavigate();

    const handleChange =(event) =>{ //изменение пароля
      setInputValue(event.target.value)
    }
    const handleChangePass = (event) =>{ //изменение пароля
      setInputPassValue(event.target.value);
    }

      const handleKeyPress= (event)=>{
        if(event.key === 'Enter'){
          handelSubmit();
          
        }
      }
    const handelSubmit = async() =>{
      
      console.log('Ваш логин ',inputLoginValue);
      console.log('Ваш пароль', inputPassValue);
      try{
        const response = await axios.post('http://localhost:3000/api/auth',{
          login:inputLoginValue,
          password:inputPassValue
        });
        console.log('response = ', response.data);
        navigate('/main');
        setTimeout(()=>{alert(`Добро пожаловать, ${inputLoginValue}`)},100)
      }
      catch(error){
        console.error(error);
        // useRef('login_password').current.focus();
      }
    }
    return( 
       <form className='parent'>
          
        <div className='block'>


        <div className='login_email'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon-person" viewBox="0 0 15 15"> 
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        </svg>
          &nbsp;
          <label className='login_label' id='login'>USERNAME</label>
          <br/>
          <input type='text' className='login_input' onChange={handleChange}></input>
        </div>
        <div className='login_email'>
        <svg xmlns="http://www.w3.org/2000/svg" className='icon-person' viewBox="0 0 45 45">
        <path d="M32.5,13c-0.304-8.233-4.379-13-11-13c-6.621,0-10.696,4.767-11,13l-7,0l0,30l36,0V13H32.5z M21.5,4
			c5.374,0,6.802,4.553,6.978,9H14.522C14.698,8.553,16.126,4,21.5,4z M35.5,39l-28,0l0-22l28,0V39z M19.5,29v6h4v-6
			c1.191-0.693,2-2.523,2-4c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4C17.5,26.477,18.309,28.307,19.5,29z"/>
        </svg>
          <label className='login_label'>PASSWORD</label>
          <br/>
          <input type='password' id='login_password' className='login_input' onChange={handleChangePass} onKeyDown={handleKeyPress}></input>
        </div>
        <div>
          <input type='button' className='login_button' value={'Sign in'} id='login_button' onClick={handelSubmit}></input>
        </div>
        </div>
          


       </form>
    )
}

export default LoginPage