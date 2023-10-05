import React from 'react';

export class Footer extends React.Component {
    render() {
      return (
        <footer>
          <div className="container-fluid footer">
            <div className="row">
              <div className="col-md-12">
                <ul className="pull-right list-unstyled">
                  <li>
                      <a>Contact Us!</a>
                  </li>
                  <li>
                      © Nick Stambaugh {new Date().getFullYear()}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      )
    }
  }