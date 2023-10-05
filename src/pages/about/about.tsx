import { ThemeProvider } from 'styled-components';
import TogglerButton from 'C:/Users/stambaughn/michigan-dev-jobboard/src/components/TogglerButton/index.tsx';
import GlobalStyle from 'C:/Users/stambaughn/michigan-dev-jobboard/src/styles/global.ts';
import ThemeContext from 'C:/Users/stambaughn/michigan-dev-jobboard/src/contexts/ThemeContext/index.tsx';
import { lightTheme, darkTheme } from 'C:/Users/stambaughn/michigan-dev-jobboard/src/styles/themes.ts';
import useThemeMode from 'C:/Users/stambaughn/michigan-dev-jobboard/src/hooks/useThemeMode.ts';
import 'C:/Users/stambaughn/michigan-dev-jobboard/src/assets/js/header';

function AboutUs() {
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
            <div className='header-text'>
                  <h1>About miDev</h1>
                  <p>Think of it as a reverse job board, but with lower risks. <br></br><br></br>
                  Hire talented Michigan developers without the need for a recruiter or any upfront fees.</p>
                  <br></br>
                  <h1>Our Mission</h1>
                  <p>Empower developers and companies within Michigan to foster a thriving</p>
                  <br></br>
                  <h1>How do we do it?</h1>
              </div>
                </div>
                </div>
        </div>
        <button role="button">Create an Account</button>
        <button className="button-learn">Learn More</button>
        <div className="grey-box">
</div>
      </ThemeProvider>
    </ThemeContext>
  );
}

export default AboutUs;

