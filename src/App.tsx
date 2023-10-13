import { ThemeProvider } from 'styled-components';
import TogglerButton from './components/TogglerButton';
import GlobalStyle from './styles/global';
import ThemeContext from './contexts/ThemeContext';
import { lightTheme, darkTheme } from './styles/themes';
import useThemeMode from './hooks/useThemeMode';
import './assets/js/header.js';
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
              <div className="header-logo-top-left">
              <a onClick={() => window.location.href='/'}>miDev</a>
                  <p>Find Jobs. Hire Devs.</p>
              </div>
              <div className="right-logo-top-right">
                  <a className='login-button-LOGIN' onClick={() => window.location.href='/developers'}>Developers</a>
                  <a className='login-button-LOGIN' onClick={() => window.location.href='/pricing'}>Pricing</a>
                  <a className='login-button-LOGIN' onClick={() => window.location.href='/login'} >Login</a>
              </div>
            <TogglerButton themeToggler={themeToggler} />
          </header>
      <div className="center-container">
          <div className="content">
            <div className='header-text'>
              {/* Not working properly right now (scroll down screen)*/}
                  <a onClick={() => window.location.href='/developers'}>Hire Michigan Developers 🚀</a>
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
        <button className="button-learn" onClick={() => window.location.href='/developers'}>View Developer Profiles →</button>
        <button className="button-learn" onClick={() => window.location.href='/about'}>Learn More/FAQ</button></div> 
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
    <a>Developers...</a> 
  </div> 
  <div className='profiles'>
    {profile.map((profile) => (
      <div className="container-profile" key={profile._id}>
        <div className="shape">
          <div className="image"></div>
        </div>
        <div className='text-card-container'>
        <h3>{profile.username}</h3>
        <h3 className="title">Web Designer</h3>
        <p>Web Designer,UI designer,photographer,web developer,etc</p>
        <div className="icons">  
        <i className="devicon-python-plain-wordmark colored"></i>
        <i className="devicon-react-plain-wordmark colored"></i>
        <i className="devicon-typescript-plain colored"></i>
        </div>
      </div>
    </div>
    ))}
    </div>
    <br></br><br></br>
    <div className='button-heros'> 
    <button onClick={() => window.location.href='/developers'}>View All Michigan Developer Profiles →</button>
    </div>
    <div className="footer">
      <a className='footer-text'>Privacy Policy</a>
      <a className='footer-text' onClick={() => window.location.href='/about'}>Open Startup</a>
    </div>
  </div>
      </ThemeProvider>
    </ThemeContext>
  );
}

export default App;
