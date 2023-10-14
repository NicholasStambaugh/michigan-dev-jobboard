import { ThemeProvider } from 'styled-components';
import TogglerButton from '../../components/TogglerButton/index.tsx';
import GlobalStyle from '../../styles/global.ts';
import ThemeContext from '../../contexts/ThemeContext/index.tsx';
import { lightTheme, darkTheme } from '../../styles/themes.ts';
import useThemeMode from '../../hooks/useThemeMode.ts';

function Signup() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <header className="header" id='header'>
              <nav className="navbar">
                  <div className="navbar-brand">
                      <a onClick={() => window.location.href='/'}>miDev</a>
                      <p>Find Jobs. Hire Devs.</p>
                  </div>
                  <div className="navbar-nav">
                      <div className="nav-item">
                          <a className='nav-link' onClick={() => window.location.href='/developers'}>Developers</a>
                      </div>
                      <div className="nav-item">
                          <a className='nav-link' onClick={() => window.location.href='/pricing'}>Pricing</a>
                      </div>
                      <div className="nav-item">
                          <button className="button-learn-header" onClick={() => window.location.href='/getstarted'}>Get Started →</button>
                      </div>
                  </div>
              </nav>
              <TogglerButton themeToggler={themeToggler} />
          </header>
          <div className='signup-card-form'>
        <div className="card">
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder='Email'/><br></br>
            <label htmlFor="password" placeholder='Password'>Password:</label>
            <input type="password" id="password" name="password" placeholder='password'/><br></br>
            <label htmlFor="confirm-password" placeholder='Confirm Password'>Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder='confirm password'/><br></br>
            <button type="submit">Submit</button>
          </form>
          </div>
          <div className="center-line"></div>
          <div className='need-account'><p>Already have an account?<a className='rpi-link' onClick={() => window.location.href='/login'} > Login here.</a></p></div>
        </div>
      </ThemeProvider>
    </ThemeContext>
  );
}

export default Signup;