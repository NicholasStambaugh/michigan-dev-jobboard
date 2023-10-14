import { ThemeProvider } from 'styled-components';
import TogglerButton from '../../components/TogglerButton/index.tsx';
import GlobalStyle from '../../styles/global.ts';
import ThemeContext from '../../contexts/ThemeContext/index.tsx';
import { lightTheme, darkTheme } from '../../styles/themes.ts';
import useThemeMode from '../../hooks/useThemeMode.ts';
import '../../assets/js/header';

function AboutUs() {
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
          <div className="about-container">
            <div className='header-text'>
                  <h3>miDev?</h3>
                  <p>Think of it as a reverse job board, developers in Michigan or looking to work in Michigan post profiles and companies use their own vetting. <br></br><br></br>
                  Hire talented Michigan developers without the need for a recruiter or any upfront fees.</p>
                  <br></br><div className="center-line"></div>
                  <h3>Our Mission</h3>
                  <p>Empower developers and companies within Michigan to foster a thriving tech community aligned with <a className='rpi-link' href='https://online.flippingbook.com/view/849454618/'>The Right Place's Tech Strategy.</a><br></br>
                  <br></br>While this strategy is for the Grand Rapids region, we felt the philosophy <br></br>and focus aligned with ours of making Michigan a better place for tech workers and companies alike.</p>
                  <br></br><div className="center-line"></div>
                  <h3>History</h3>
                  <p>miDev was created by <a className='rpi-link' href='https://www.linkedin.com/in/nick-s-694241139/'>Nick Stambaugh</a> in October 2023. 
          <br></br><br></br>After being fed up with traditional job boards, 
                  Nick created miDev to focus<br></br> a growing community of tech hiring managers and developers in Michigan around a singular networking platform.</p>
      <div className="center-line"></div>
        <h3>Fixing Hiring Problems</h3>
      <div className='styled-table-container'>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Problem</th>
              <th>Solution</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td><div className='underline-red'>Problem</div><br></br> Expensive Recruiters</td>
              <td><div className='underline-green'>Solution</div><br></br>Recruiters can charge upwards to <div className='underline'>30% or more</div> for their services. <br></br>With us, you pay no fees up front. Only if the deal works out. See <a className='rpi-link' onClick={() => window.location.href='/pricing'}>pricing.</a></td>
            </tr>
            <tr className="active-row">
              <td className='active-row'><div className='underline-red'>Problem</div><br></br> No-fit Candidates</td>
              <td><div className='underline-green'>Solution</div><br></br>Recruiters often send you candidates who don't fit your needs. <br></br> Here you <div className='underline'>filter, search, and message</div> who you like and come to your own terms.</td>
            </tr>
            <tr>
              <td><div className='underline-red'>Problem</div><br></br> Traditional Job Boards</td>
              <td><div className='underline-green'>Solution</div><br></br>The unknown final costs of jobs boards quickly adds up. <br></br>On miDev there are no up-front costs, making it <div className='underline'>risk-free</div></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Fixing Developer Problems</h3>
      <div className='styled-table-container'>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Problem</th>
              <th>Solution</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td><div className='underline-red'>Problem</div><br></br> Irrelevant Offers</td>
              <td><div className='underline-green'>Solution</div><br></br>Because we only focus on <div className='underline'>Michigan based employment</div> you'll get the most relevant job offers to you. </td>
            </tr>
            <tr className="active-row">
              <td className='active-row'><div className='underline-red'>Problem</div><br></br> Expensive Recruiters</td>
              <td><div className='underline-green'>Solution</div><br></br>Recruiters often eat into salaries, big time.<br></br>Our free profile creation gives you <div className='underline'>lifetime access</div> to job offers in Michigan.</td>
            </tr>
            <tr>
              <td><div className='underline-red'>Problem</div><br></br> Contract Sites</td>
              <td><div className='underline-green'>Solution</div><br></br>Fiverr and Upwork take from your below-market pay. <br></br>On miDev there are no up-front costs, making it <div className='underline'>risk-free</div></td>
            </tr>
          </tbody>
        </table>
        <h3>FAQs</h3>
        <div className='styled-table-container'>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Question</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>How to register?</td>
                <td><div className='underline-green'>Answer</div><br></br>Click on the 'Register' button on the top right corner of the homepage and fill in the required details.</td>
              </tr>
              <tr className="active-row">
                <td className='active-row'>How to apply for a job?</td>
                <td><div className='underline-green'>Answer</div><br></br>Once you have registered and logged in, you can click on the 'Apply' button on any job listing.</td>
              </tr>
              <tr>
                <td>How to post a job?</td>
                <td><div className='underline-green'>Answer</div><br></br>If you are an employer, you can post a job by clicking on the 'Post a Job' button on the homepage.</td>
              </tr>  
              <tr className="active-row">
                <td className='active-row'>How does the placement fee work?</td>
                <td><div className='underline-green'>Answer</div><br></br>Our fee is based on any type of work that takes place in the first 12 months of the employment relationship.</td>
              </tr>
              <tr>
                <td>What if I hire more than 1 developer?</td>
                <td><div className='underline-green'>Answer</div><br></br>The fee applies to each developer you hire.</td>
              </tr>  
              <tr className="active-row">
                <td className='active-row'>Do you vet companies/developers?</td>
                <td><div className='underline-green'>Answer</div><br></br>We do not vet either. We want to provide a free marketplace for Michigan tech workers and companies.<br></br> We allow each company and developer to set their own requirements.</td>
              </tr>
            </tbody>
          </table>
      </div>
      <br></br>
        <div className="email-form">
          <p>Sign Up For Weekly Job and Market Reports!</p>
          <input type="email" placeholder="✉️ Email" />
          <button>Sign Up →</button>
        </div>  
        <br></br>
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

