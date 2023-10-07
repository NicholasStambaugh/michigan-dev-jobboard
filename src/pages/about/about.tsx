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
                  <p>miDev was created by <a className='rpi-link' href='https://www.nickstambaugh.com'>Nick Stambaugh</a> in October 2023. 
          <br></br><br></br>After being fed up with traditional job boards, 
                  Nick created miDev to focus<br></br> a growing community of tech hiring managers and developers in Michigan around a singular networking platform.</p>
                  <div className="center-line"></div>
                  <h3>Problem Solver</h3>
                  <div className='styled-table-container'>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Problem</th>
              <th>Solution</th>
            </tr>
          </thead>
          
          <tbody>
            <tr className="active-row">
              <td>Expensive Recruiters</td>
              <td>We reduce your hiring costs. Recruiters can charge upwards to 30% or more for their services. With us, you pay no fees up front. Only if the deal works out. See <a className='rpi-link' onClick={() => window.location.href='/pricing'}>pricing.</a></td>
            </tr>
            <tr className="active-row">
              <td>Contract to Hire</td>
              <td>10% of gross contract duration pay, then 10% of gross for remaining months of full time work up to a total of 12 months.</td>
            </tr>
            <tr className="active-row">
              <td>Contract</td>
              <td>10% of each contract period up to 12 total months.</td>
            </tr>
            <tr className="active-row">
              <td>Part-time</td>
              <td>10% gross of part-time period up to 12 total months.</td>
            </tr>
            <tr className="active-row">
              <td>Projects</td>
              <td>If the sum of your projects equal less than $3,000, then no fee is due. When the sum of your projects equals $3,000 or more, then 10% gross is due.</td>
            </tr>
          </tbody>
        </table>
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

