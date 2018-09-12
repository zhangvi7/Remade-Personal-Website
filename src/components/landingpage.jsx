import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

const Landing = (props) => <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="assets/pic2.jpg"
              alt="Picture of me"
              className="selfie"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <h4>University of Toronto - Computer Science Specialist</h4>
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
          </Cell>
        </Grid>
      </div>

export default Landing;
