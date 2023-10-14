import { ThemeProvider } from 'styled-components';
import TogglerButton from '../../components/TogglerButton/index.tsx';
import GlobalStyle from '../../styles/global.ts';
import ThemeContext from '../../contexts/ThemeContext/index.tsx';
import { lightTheme, darkTheme } from '../../styles/themes.ts';
import useThemeMode from '../../hooks/useThemeMode.ts';
import '../../assets/js/header';

function Started() {
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
        <div className="start-container">
          <div className="content">
            <div className='header-text'>
              {/* Not working properly right now (scroll down screen)*/}
                  <h2>What brings you here? 🔎</h2>
              </div>
                </div>
                <br></br><br></br>
                <div className='role-cards'>
                    <div className='role-card'>
                        <h3><b>I'm Working...</b></h3>
                        <p>♥ Free Michigan-based leads.</p>
                        <p>♥ Showcase your skills.</p>
                        <p>♥ Open-source forever.</p>
                        <button onClick={() => window.location.href='/signup'}>Sign Up →</button>
                    </div>
                    <div className='role-card'>
                        <h3><b>I'm Hiring...</b></h3>
                        <p>♥ Message for Free.</p>
                        <p>♥ Pay Only If You Hire.</p>
                        <p>♥ Your Personal Recruiter.</p>
                        <button onClick={() => window.location.href='/'}>Apply For Access →</button>
                    </div>
                </div>
                </div>
      </ThemeProvider>
    </ThemeContext>
  );
};

export default Started;
