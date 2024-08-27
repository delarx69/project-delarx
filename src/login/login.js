import React, { useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const passwordInputRef = useRef(null);
  const navigate = useNavigate();

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  }, []);

  const handleSubmit = useCallback(async () => {
    console.log('Ваш логин ', username);
    try {
      const response = await axios.post('http://localhost:3000/api/auth', {
        login: username,
        password: password,
      });
      console.log('response = ', response.data);
      navigate('/main');
      setTimeout(() => {
        alert(`Добро пожаловать, ${username}`);
      }, 100);
    } catch (error) {
      console.error('Login failed', error);
      passwordInputRef.current.focus();
    }
  }, [username, password, navigate]);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  return (
    <form className='parent' onSubmit={(e) => e.preventDefault()}>
      <div className='block'>
        <div className='login_email'>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon-person" viewBox="0 0 15 15">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
          &nbsp;
          <label className='login_label' htmlFor='username'>USERNAME</label>
          <br />
          <input
            type='text'
            className='login_input'
            name='username'
            value={username}
            onChange={handleInputChange}
          />
        </div>

        <div className='login_email'>
          <svg xmlns="http://www.w3.org/2000/svg" className='icon-person' viewBox="0 0 45 45">
            <path d="M32.5,13c-0.304-8.233-4.379-13-11-13c-6.621,0-10.696,4.767-11,13l-7,0l0,30l36,0V13H32.5z M21.5,4
              c5.374,0,6.802,4.553,6.978,9H14.522C14.698,8.553,16.126,4,21.5,4z M35.5,39l-28,0l0-22l28,0V39z M19.5,29v6h4v-6
              c1.191-0.693,2-2.523,2-4c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4C17.5,26.477,18.309,28.307,19.5,29z"/>
          </svg>
          <label className='login_label' htmlFor='password'>PASSWORD</label>
          <br />
          <input
            type='password'
            id='login_password'
            className='login_input'
            name='password'
            value={password}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            ref={passwordInputRef}
          />
        </div>

        <div>
          <button type='button' className='login_button' onClick={handleSubmit}>Sign in</button>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
