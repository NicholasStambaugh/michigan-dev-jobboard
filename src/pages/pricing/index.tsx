import { ThemeProvider } from 'styled-components';
import TogglerButton from '../../components/TogglerButton';
import GlobalStyle from '../../styles/global';
import { lightTheme, darkTheme } from '../../styles/themes';
import useThemeMode from '../../hooks/useThemeMode';

function Pricing() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
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
      <div className="pricing-container">
        <br></br>
        <p>Flexible for all Michiganders. 🚀</p>
        <a className='pricing-header-text'>Pricing</a>
        <div className="pricing-card">
          <h3>For Developers <p className='underline'>Free</p></h3>
          <ul>
            <p>✅ Free developer profile</p>
            <p>✅ No fees</p>
            <p>✅ Find your perfect Michigan dev job</p>
          </ul>
          <button onClick={() => window.location.href='/signup'}>Create an Account</button>
        </div>
        <div className="pricing-card">
          <h3>For Companies <p className='underline'>10% placement fee</p></h3>
          <ul>
          <p>✅ No upfront costs</p>
          <p>✅ Free searches</p>
          <p>✅ Pay only if you hire</p>
          <p>✅ Michigan or Michigan-bound developers ONLY</p>
          </ul>
          <button>Apply for Access →</button>
        </div>
        <p>Easy to understand! 👍</p>
        <a className='pricing-header-text'>Pricing Breakdown</a>
        <div className='styled-table-container'>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Engagement Type</th>
              <th>Fee Structure</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td>Full Time</td>
              <td>10% of the employee's gross salary for the first 12 months</td>
            </tr>
            <tr className="active-row">
              <td>Contract to Hire</td>
              <td>10% of gross contract duration pay, then 10% of gross for remaining months of full time work up to a total of 12 months.</td>
            </tr>
            <tr>
              <td>Contract</td>
              <td>10% of each contract period up to 12 total months.</td>
            </tr>
            <tr className="active-row">
              <td>Part-time</td>
              <td>10% gross of part-time period up to 12 total months.</td>
            </tr>
            <tr>
              <td>Projects</td>
              <td>If the sum of your projects equal less than $3,000, then no fee is due. When the sum of your projects equals $3,000 or more, then 10% gross is due.</td>
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
    </ThemeProvider>
  );
}

export default Pricing;


