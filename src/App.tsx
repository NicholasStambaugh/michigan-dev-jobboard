import { ThemeProvider } from 'styled-components';
import TogglerButton from './components/TogglerButton';
import GlobalStyle from './styles/global';
import ThemeContext from './contexts/ThemeContext';
import { lightTheme, darkTheme } from './styles/themes';
import useThemeMode from './hooks/useThemeMode';
import './assets/js/header.js';
import './assets/js/fadeIn.js';
import { useEffect, useState } from 'react';

type TProfile = {
  username: string;
  _id: string;
};

function App() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [profile, setProfile] = useState<TProfile[]>([]);

  console.log('Welcome to miDev :). Send resume to nastambaugh@gmail.com to work for us ♥♥♥')

  useEffect(() => {
    (async () => {
     const response = await fetch('http://localhost:5000/profile');
     const newProfiles = await response.json();
     setProfile(newProfiles);
    })();
  }, []);

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <div className="container">
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
      <div className="center-container">
          <div className="content">
            <div className='header-text'>
              {/* Not working properly right now (scroll down screen)*/}
                  <a onClick={() => window.location.href='/developers'}>Hire Michigan IT Workers 🚀</a>
              </div>
                </div>
                <br></br><br></br>
                <div className='text-image-hero'>
                      <div className='hero-text'>
                        <h3><b>Companies:</b></h3>
                        <p>♥ Message for Free.</p>
                        <p>♥ Pay Only If You Hire.</p>
                        <p>♥ Your Personal Recruiter.</p>
                        <h3><b>Developers:</b></h3>
                        <p>♥ Free Michigan-based leads.</p>
                        <p>♥ Showcase your skills.</p>
                        <p>♥ Open-source forever.</p>
                      </div>
                      <div className='hero-img-container'>
                        <img className='hero-img' src='../hero-final4.svg' alt='Hero' />
                      </div>
                      </div>
                  </div>
               </div>
     <div className='button-heros'>          
        <button className="button-learn" onClick={() => window.location.href='/getstarted'}>Get Started →</button>
        <button className="button-learn" onClick={() => window.location.href='/about'}>Learn More</button></div> 
        {/* Commenting out the email form for now */}
        {/* <div className="email-form"> */}
        {/* <p>Sign Up For Weekly Job and Market Reports!</p> */}
          {/* <input type="email" placeholder="✉️ Email" /> */}
          {/* <button>Sign Up →</button> */}
        {/* </div> */}
        <div className="grey-box">
  {/* <h2>Trusted by developers and companies at...</h2> */}
  {/* <div className="company-logos">
    <img src="../github.svg" alt="Company 1 Logo" />
    <img src="../hackernews.svg" alt="Company 2 Logo" />
    <img src="../mongodb.svg" alt="Company 3 Logo" />
    <img src="../ruby.svg" alt="Company 3 Logo" />
    <img src="../python.svg" alt="Company 3 Logo" />
    <img src="../netmagazine.svg" alt="Company 3 Logo" />
    <img src="../stackoverflow.svg" alt="Company 3 Logo" />
  </div> */}
  <div className="company-logos">
    {/* <img src="../github.svg" alt="Company 1 Logo" /> */}
    {/* <img src="../hackernews.svg" alt="Company 2 Logo" /> */}
    {/* <img src="../mongodb.svg" alt="Company 3 Logo" /> */}
    {/* <img src="../ruby.svg" alt="Company 3 Logo" /> */}
    {/* <img src="../python.svg" alt="Company 3 Logo" /> */}
    {/* <img src="../netmagazine.svg" alt="Company 3 Logo" /> */}
    {/* <img src="../stackoverflow.svg" alt="Company 3 Logo" /> */}
    <a onClick={() => window.location.href='/developers'}>Michigan Profiles...</a> 
  </div> 
  <div className='profiles'>
    {profile.map((profile) => (
      <div className="container-profile" key={profile._id} onClick={() => window.location.href=`/profile/${profile._id}`}>
        <div className="shape">
          <div className="image"></div>
        </div>
        <div className='text-card-container'>
        <h3>{profile.username}</h3>
        <h3 className="title">Web Designer</h3>
        <div className="icons">
          <p>Skills  
        <i className="devicon-python-plain-wordmark colored"></i>
        <i className="devicon-react-plain-wordmark colored"></i>
        <i className="devicon-typescript-plain colored"></i></p>
        </div>
      </div>
    </div>
    ))}
    </div>
    <br></br><br></br>
    <div className='button-heros'> 
    <button className="button-learn"onClick={() => window.location.href='/developers'}>View All Profiles →</button>
    </div>
    <div className="footer">
      <a className='footer-text'>Privacy Policy</a>
      <a className='footer-text' onClick={() => window.location.href='/open'}>Open Startup</a>
      <a className='footer-text' href="mailto:nastambaugh@gmail.com">Contact Us</a>
      <br></br>
      <div className='footer-socials'>
      <i className="devicon-github-plain colored"></i>
      <i className="devicon-linkedin-plain colored"></i>
      </div>
    </div>
  </div>
      </ThemeProvider>
    </ThemeContext>
  );
}

export default App;
