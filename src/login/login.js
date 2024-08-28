import React, { useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CircleUserRound, LockKeyhole } from 'lucide-react';

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
          <CircleUserRound size="20" className="icon-person" />

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
          <LockKeyhole size="20" className="icon-person" />
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
