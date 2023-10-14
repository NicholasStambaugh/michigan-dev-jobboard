import { ThemeProvider } from 'styled-components';
import TogglerButton from '../../components/TogglerButton/index.tsx';
import GlobalStyle from '../../styles/global.ts';
import ThemeContext from '../../contexts/ThemeContext/index.tsx';
import { lightTheme, darkTheme } from '../../styles/themes.ts';
import useThemeMode from '../../hooks/useThemeMode.ts';
import { useEffect, useState } from 'react';

type TProfile = {
  username: string;
  _id: string;
};

function Devs() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [profile, setProfile] = useState<TProfile[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    (async () => {
     const response = await fetch(`http://localhost:5000/profile?filter=${filter}`);
     const newProfiles = await response.json();
     setProfile(newProfiles);
    })();
  }, [filter]);

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
                  <a className='login-button-header'>Create Account</a>
                  <a className='login-button-LOGIN'>Login</a>
              </div>
            <TogglerButton themeToggler={themeToggler} />
          </header>
<div className="devs-container">
<div className="filter-container">
    <select onChange={(e) => setFilter(e.target.value)}>
      <option value="">All</option>
      <option value="frontend">Frontend</option>
      <option value="backend">Backend</option>
      <option value="fullstack">Full Stack</option>
    </select>
</div>
<div className="content">
    <a>Developers...</a> 
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
    <div className="footer">
      <a className='footer-text'>Privacy Policy</a>
      <a className='footer-text' onClick={() => window.location.href='/open'}>Open Startup</a>
    </div>
  </div>
  </div>
  </div>
      </ThemeProvider>
      </ThemeContext>
    );
  }
  
  export default Devs
