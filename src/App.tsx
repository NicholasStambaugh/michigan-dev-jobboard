import { ThemeProvider } from 'styled-components';
import TogglerButton from './components/TogglerButton';
import GlobalStyle from './styles/global';
import ThemeContext from './contexts/ThemeContext';
import { lightTheme, darkTheme } from './styles/themes';
import useThemeMode from './hooks/useThemeMode';
import './assets/js/header.js';

function App() {
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
                  <a href='#developer-cards-home'>Hire Michigan Developers</a>
                  <p>The miDev job board empowers talented developers<br></br>in Michigan to find their next gig effortlessly.</p>
              </div>
                </div>
                <div className='text-image-hero'>
                      <div className='hero-text'>
                        <h3><b>Companies:</b></h3>
                        <p>♥ Message for Free.</p>
                        <p>♥ Pay Only If You Hire.</p>
                        <p>♥ Your Personal Michigan Dev Recruiter.</p>
                        <h3><b>Developers:</b></h3>
                        <p>♥ Free leads on your future.</p>
                        <p>♥ Showcase your skills.</p>
                        <p>♥ Forever free for devs.</p>
                      </div>
                      <div className='hero-img-container'>
                        <img className='hero-img' src='../hero.svg' alt='Hero' />
                      </div>
                      </div>
                  </div>
        </div>
        <button role="button">Create an Account</button>
        <button className="button-learn" onClick={() => window.location.href='/about'}>Learn More</button>
        <div className="grey-box">
  <h2>Trusted by developers and companies at...</h2>
  <div className="company-logos">
    <img src="../github.svg" alt="Company 1 Logo" />
    <img src="../hackernews.svg" alt="Company 2 Logo" />
    <img src="../mongodb.svg" alt="Company 3 Logo" />
    <img src="../ruby.svg" alt="Company 3 Logo" />
    <img src="../python.svg" alt="Company 3 Logo" />
    <img src="../netmagazine.svg" alt="Company 3 Logo" />
  </div>
  <div className='developer-cards-home'>
    <h2>Developers looking right now...</h2>
  </div>
</div>
      </ThemeProvider>
    </ThemeContext>
  );
}

export default App;
