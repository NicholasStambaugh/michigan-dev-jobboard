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
<div className="devs-container">
<div className="filter-container">
    <h3>Filter</h3>
    <div className="filter-item">
        <input type="checkbox" id="activelyLooking" name="activelyLooking" onChange={(e) => setFilter(e.target.checked ? 'activelyLooking' : '')}/>
        <label htmlFor="activelyLooking" className="small-label">Show Not Actively Looking</label>
    </div>
    <div className="filter-item">
      <p>Work Type</p>
        <input type="checkbox" id="partTime" name="partTime" onChange={(e) => setFilter(e.target.checked ? 'partTime' : '')}/>
        <label htmlFor="partTime" className="small-label">Part Time</label>
    </div>
    <div className="filter-item">
        <input type="checkbox" id="fullTime" name="fullTime" onChange={(e) => setFilter(e.target.checked ? 'fullTime' : '')}/>
        <label htmlFor="fullTime" className="small-label">Full Time</label>
    </div>
    <div className="filter-item">
        <input type="checkbox" id="contract" name="contract" onChange={(e) => setFilter(e.target.checked ? 'contract' : '')}/>
        <label htmlFor="contract" className="small-label">Contract</label>
    </div>
    <p>Experience Level</p>
    <div className="filter-item">
        <input type="checkbox" id="junior" name="junior" onChange={(e) => setFilter(e.target.checked ? 'junior' : '')}/>
        <label htmlFor="junior" className="small-label">Junior</label>
    </div>
    <div className="filter-item">
        <input type="checkbox" id="midLevel" name="midLevel" onChange={(e) => setFilter(e.target.checked ? 'midLevel' : '')}/>
        <label htmlFor="midLevel" className="small-label">Mid Level</label>
    </div>
    <div className="filter-item">
        <input type="checkbox" id="senior" name="senior" onChange={(e) => setFilter(e.target.checked ? 'senior' : '')}/>
        <label htmlFor="senior" className="small-label">Senior</label>
    </div>
    <div className="filter-item">
        <input type="checkbox" id="manager" name="manager" onChange={(e) => setFilter(e.target.checked ? 'manager' : '')}/>
        <label htmlFor="manager" className="small-label">Manager</label>
    </div>
    <div className="filter-item">
        <input type="checkbox" id="cLevel" name="cLevel" onChange={(e) => setFilter(e.target.checked ? 'cLevel' : '')}/>
        <label htmlFor="cLevel" className="small-label">C Level</label>
    </div>
    <p>Development Type</p>
    <div className="filter-item">
        <input type="checkbox" id="frontend" name="frontend" onChange={(e) => setFilter(e.target.checked ? 'frontend' : '')}/>
        <label htmlFor="frontend" className="small-label">Frontend</label>
    </div>
    <div className="filter-item">
        <input type="checkbox" id="backend" name="backend" onChange={(e) => setFilter(e.target.checked ? 'backend' : '')}/>
        <label htmlFor="backend" className="small-label">Backend</label>
    </div>
    <div className="filter-item">
        <input type="checkbox" id="fullstack" name="fullstack" onChange={(e) => setFilter(e.target.checked ? 'fullstack' : '')}/>
        <label htmlFor="fullstack" className="small-label">Full Stack</label>
    </div>
    <div className="filter-item">
        <input type="checkbox" id="mobile" name="mobile" onChange={(e) => setFilter(e.target.checked ? 'mobile' : '')}/>
        <label htmlFor="mobile" className="small-label">Mobile</label>
    </div>
    <div className="filter-item">
        <input type="checkbox" id="other" name="other" onChange={(e) => setFilter(e.target.checked ? 'other' : '')}/>
        <label htmlFor="other" className="small-label">Other</label>
    </div>
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
