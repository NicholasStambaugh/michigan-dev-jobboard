import { ThemeProvider } from 'styled-components';
import TogglerButton from 'C:/Users/stambaughn/michigan-dev-jobboard/src/components/TogglerButton/index.tsx';
import GlobalStyle from 'C:/Users/stambaughn/michigan-dev-jobboard/src/styles/global.ts';
import ThemeContext from 'C:/Users/stambaughn/michigan-dev-jobboard/src/contexts/ThemeContext/index.tsx';
import { lightTheme, darkTheme } from 'C:/Users/stambaughn/michigan-dev-jobboard/src/styles/themes.ts';
import useThemeMode from 'C:/Users/stambaughn/michigan-dev-jobboard/src/hooks/useThemeMode.ts';
import 'C:/Users/stambaughn/michigan-dev-jobboard/src/assets/js/header';

function Login() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

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
                  <a className='login-button-header'>Create Account</a>
                  <a className='login-button-LOGIN'>Login</a>
              </div>
            <TogglerButton themeToggler={themeToggler} />
          </header>
          <div className="center-container">
      <div className="content">
        <div className="card">
          <h1>Login</h1>
          <div className='login-card-form'>
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder='username'/>
            <label htmlFor="password" placeholder='Password'>Password:</label>
            <input type="password" id="password" name="password" placeholder='password'/>
            <button type="submit">Submit</button>
          </form>
          </div>
          <div className="center-line"></div>
          <div className='need-account'><p>Need an account?<a className='rpi-link'> Sign up here.</a></p></div>
        </div>
      </div>
    </div>
      </ThemeProvider>
    </ThemeContext>
  );
}

export default Login;

