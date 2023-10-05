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
            <div className='header-text'>
                  <h1>miDev?</h1>
                  <p>Think of it as a reverse job board, but with lower risks. <br></br><br></br>
                  Hire talented Michigan developers without the need for a recruiter or any upfront fees.</p>
                  <br></br><div className="center-line"></div>
                  <h1>Our Mission</h1>
                  <p>Empower developers and companies within Michigan to foster a thriving tech community aligned with <a className='rpi-link' href='https://online.flippingbook.com/view/849454618/'>The Right Place's Tech Strategy.</a>
                  <br></br>While this strategy is for the Grand Rapids region, we felt the philosophy and focus aligned with ours of making Michigan better.</p>
                  <br></br><div className="center-line"></div>
                  <h1>History</h1>
                  <p>miDev was created by <a className='rpi-link' href='https://www.nickstambaugh.com'>Nick Stambaugh.</a>
          <br></br><br></br>After being fed up with traditional job boards, 
                  Nick created miDev to foster<br></br> the community of growing hiring managers and developers in Michigan.</p>
                  <br></br><p>Stay in touch with Nick here: <img className = 'linkedin-button' onClick={() => window.location.href='https://www.linkedin.com/in/nick-s-694241139/'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" height='50px' width='20px'  /></p>
                  <div className="center-line"></div>
              </div>
                </div>
                </div>
        <div className="grey-box">
</div>
      </ThemeProvider>
    </ThemeContext>
  );
}

export default AboutUs;

