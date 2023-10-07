import { ThemeProvider } from 'styled-components';
import TogglerButton from 'C:/Users/stambaughn/michigan-dev-jobboard/src/components/TogglerButton/index.tsx';
import GlobalStyle from 'C:/Users/stambaughn/michigan-dev-jobboard/src/styles/global.ts';
import ThemeContext from 'C:/Users/stambaughn/michigan-dev-jobboard/src/contexts/ThemeContext/index.tsx';
import { lightTheme, darkTheme } from 'C:/Users/stambaughn/michigan-dev-jobboard/src/styles/themes.ts';
import useThemeMode from 'C:/Users/stambaughn/michigan-dev-jobboard/src/hooks/useThemeMode.ts';
import 'C:/Users/stambaughn/michigan-dev-jobboard/src/assets/js/header';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const navigate = useNavigate();
  const handleLogin = () => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'test',
        password: 'test',
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
              <div className="right-logo-top-right">
                  <a className='login-button-header' onClick={() => window.location.href='/signup'}>Create Account</a>
              </div>
            <TogglerButton themeToggler={themeToggler} />
          </header>
        <div className="card">
          <form>
            <label htmlFor="username">Username:</label>
            <input type="username" id="username" name="username" placeholder='username'/><br></br>
            <label htmlFor="password" placeholder='Password'>Password:</label>
            <input type="password" id="password" name="password" placeholder='password'/><br></br>
            <button type="submit" onClick={handleLogin}>Login</button>
            <div className="center-line"></div>
          <div className='need-account'><p>Need an account?<a className='rpi-link' onClick={() => window.location.href='/signup'}> Sign up here.</a></p></div>
          </form>
          </div>
      </ThemeProvider>
    </ThemeContext>
  );
}

export default Login;

