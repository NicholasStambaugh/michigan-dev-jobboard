import { ThemeProvider } from 'styled-components';
import TogglerButton from '../../components/TogglerButton/index.tsx';
import GlobalStyle from '../../styles/global.ts';
import ThemeContext from '../../contexts/ThemeContext/index.tsx';
import { lightTheme, darkTheme } from '../../styles/themes.ts';
import useThemeMode from '../../hooks/useThemeMode.ts';
import '../../assets/js/header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    fetch('http://localhost:5000/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username
      }),
    })
      .then(response => {
        if (response.ok) {
          // If login is successful, navigate to the developer page
          navigate('./developers');
        } else {
          throw new Error('Failed to login');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

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
          <form>
            <label htmlFor="username">Username:</label>
            <input type="username" id="username" name="username" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/><br></br>
            <label htmlFor="password" placeholder='Password'>Password:</label>
            <input type="password" id="password" name="password" placeholder='password'/><br></br>
            <label htmlFor="login-type">Login as:</label>
            <select id="login-type" name="login-type">
              <option value="developer">Developer</option>
              <option value="company">Company</option>
            </select>
            <button type="submit" onClick={handleLogin}>Login</button>
            <div className="center-line"></div>
            <div className='need-account'><p>Need an account?<a className='rpi-link' onClick={() => window.location.href='/signup'}> Sign up here.</a></p></div><br></br>
            <div className='need-account'><p>Want to post job listings and message devs?<a className='rpi-link' onClick={() => window.location.href='/signup'}> Apply for Access.</a></p></div>
          </form>
        </div>
      </ThemeProvider>
    </ThemeContext>
  );
};

export default Login;
