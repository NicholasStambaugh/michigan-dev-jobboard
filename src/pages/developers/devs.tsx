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
    <div className='filter-item'>
        <select className='lang-select' id="specialties" name="specialties" onChange={(e) => setFilter(e.target.value)}>
            <option value="">Select a specialty</option>
            <option value="software_development">Software Development</option>
            <option value="web_development">Web Development</option>
            <option value="mobile_development">Mobile Development</option>
            <option value="game_development">Game Development</option>
            <option value="data_science">Data Science</option>
            <option value="machine_learning">Machine Learning</option>
            <option value="ai">Artificial Intelligence</option>
            <option value="networking">Networking</option>
            <option value="cyber_security">Cyber Security</option>
            <option value="cloud_computing">Cloud Computing</option>
            <option value="devops">DevOps</option>
            <option value="ui_ux_design">UI/UX Design</option>
            <option value="database_admin">Database Administration</option>
            <option value="system_admin">System Administration</option>
            <option value="project_management">Project Management</option>
            <option value="it_support">IT Support</option>
            <option value="it_consultancy">IT Consultancy</option>
            <option value="quality_assurance">Quality Assurance</option>
        </select>
    </div>
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
    <div className='filter-item'>
        <select className='lang-select' id="languages" name="languages" onChange={(e) => setFilter(e.target.value)}>
            <option value="">Select a language</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="ruby">Ruby</option>
            <option value="php">PHP</option>
            <option value="cplus">C++</option>
            <option value="typescript">TypeScript</option>
            <option value="swift">Swift</option>
            <option value="kotlin">Kotlin</option>
            <option value="go">Go</option>
            <option value="rust">Rust</option>
            <option value="scala">Scala</option>
            <option value="perl">Perl</option>
            <option value="r">R</option>
            <option value="shell">Shell</option>
            <option value="groovy">Groovy</option>
            <option value="lua">Lua</option>
            <option value="matlab">MATLAB</option>
            <option value="sql">SQL</option>
            <option value="dart">Dart</option>
            <option value="haskell">Haskell</option>
            <option value="clojure">Clojure</option>
            <option value="elixir">Elixir</option>
            <option value="coffeescript">CoffeeScript</option>
        </select>
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
