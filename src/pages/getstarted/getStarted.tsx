import { ThemeProvider } from 'styled-components';
import TogglerButton from '../../components/TogglerButton/index.tsx';
import GlobalStyle from '../../styles/global.ts';
import ThemeContext from '../../contexts/ThemeContext/index.tsx';
import { lightTheme, darkTheme } from '../../styles/themes.ts';
import useThemeMode from '../../hooks/useThemeMode.ts';
import '../../assets/js/header';
import React from 'react';

function Started() {
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
                        <h3><b>I'm Hiring...</b></h3>
                        <p>♥ Message for Free.</p>
                        <p>♥ Pay Only If You Hire.</p>
                        <p>♥ Your Personal Recruiter.</p>
                        <button onClick={() => window.location.href='/'}>Get Started →</button>
                    </div>
                    <div className='role-card'>
                        <h3><b>I'm Working...</b></h3>
                        <p>♥ Free Michigan-based leads.</p>
                        <p>♥ Showcase your skills.</p>
                        <p>♥ Open-source forever.</p>
                        <button onClick={() => window.location.href='/signup'}>Get Started →</button>
                    </div>
                </div>
                </div>
      </ThemeProvider>
    </ThemeContext>
  );
};

export default Started;
