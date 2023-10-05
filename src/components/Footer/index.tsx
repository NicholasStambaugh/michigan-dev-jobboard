import React from 'react';
import 'C:/Users/stambaughn/michigan-dev-jobboard/src/index.css';

export class Footer extends React.Component {
    render() {
      return (
        <footer>
          <div className="footer" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <div>
              <a></a>Contact Us     
            </div>
            <div style={{width: '10px'}}></div>
            <div>
              © Nick Stambaugh {new Date().getFullYear()}
            </div>
          </div>
        </footer>
      )
    }
  }

export default Footer;  