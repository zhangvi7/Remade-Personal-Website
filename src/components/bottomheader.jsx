import React from 'react';
import './bottomheader.css'

const bottomHeader = (props) => <div style={{width: '100%', margin: 'auto'}}>
       <div>
            {/* <img
              src="assets/pic2.jpg"
              alt="Picture of me"
              className="selfie"
              /> */}

            <div className="test">
              <hr/>
              <h5>Java | Python | C | HTML/CSS | Bootstrap | JavaScript | HTML/CSS  | React | NodeJS | JQuery</h5>

              <div className="social-links">
                {/* LinkedIn */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/zhangvi7" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                
                {/* Facebook */}
                <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                
                {/* Instagram */}
                <a href="http://instagram.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
     `` </div>
      </div>

export default bottomHeader;
