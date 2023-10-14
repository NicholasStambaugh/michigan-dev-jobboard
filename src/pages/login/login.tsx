import { ThemeProvider } from 'styled-components';
import TogglerButton from '../../components/TogglerButton/index.tsx';
import GlobalStyle from '../../styles/global.ts';
import ThemeContext from '../../contexts/ThemeContext/index.tsx';
import { lightTheme, darkTheme } from '../../styles/themes.ts';
import useThemeMode from '../../hooks/useThemeMode.ts';
import '../../assets/js/header';
import React, { useState } from 'react';

function Login() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

async function handleLogin(e: React.FormEvent) {
  e.preventDefault();
  await fetch('http://localhost:5000/profile', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      username,
      password
    }),
  }).then(() => {
    window.location.href='/';
  });
}

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <header className="header" id='header'>
          <div className="header-logo-top-left">
            <a onClick={() => window.location.href='/'}>miDev</a>
            <p>Find Jobs. Hire Devs.</p>
          </div>
          <TogglerButton themeToggler={themeToggler} />
        </header>
        <div className="card">
          <form onSubmit={handleLogin}>
          <label htmlFor="login-type">Login as:</label>
            <select id="login-type">
              <option value="developer">Developer</option>
              <option value="company">Company</option>
            </select>
            <label htmlFor="username">Username:</label>
            <input type="username" id="username" value={username} 
            name="username" placeholder='username' 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUsername(e.target.value);}}/>
            <br></br>
            <label htmlFor="password" placeholder='Password'>Password:</label>
            <input type='password' placeholder='password' value={password} id="password" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);}}/><br></br>
            <button type="submit">Login</button>
            <div className="center-line"></div>
            <div className='need-account'><p>Need an account?<a className='rpi-link' onClick={() => window.location.href='/getstarted'}> Sign up here.</a></p></div><br></br>
          </form>
        </div>
      </ThemeProvider>
    </ThemeContext>
  );
};

export default Login;
