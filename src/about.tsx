import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ProfilePicture from './files/img/to_be_updated.png'
import ReactIcon from './files/img/tech-skills/react-icon.png'
import AEMIcon from './files/img/tech-skills/aem_logo.png'
import AWSIcon from './files/img/tech-skills/Amazon_Web_Services_Logo.svg'
import JSIcon from './files/img/tech-skills/microsoft_azure-logo.png'
import AzureIcon from './files/img/tech-skills/microsoft_azure-logo.png'
import MongoDBIcon from './files/img/tech-skills/mongoDB_logo.png'
import MySQLIcon from './files/img/tech-skills/mysql-official.svg'
import NodeJSIcon from './files/img/tech-skills/microsoft_azure-logo.png'
import TSIcon from './files/img/tech-skills/microsoft_azure-logo.png'

import './about.css';

function About() {
  useEffect(() => {
    document.title = "Tom Shen | About Tom";
  }, []);
  return (
    <div className="about">
      <div className='title'>About Tom</div>
      <div className="row index-0">
        <div className='text'>
          <div>
            I am a passionate software engineer with 4+ and 1+ years of professional software development experiences. 
            I am interested in working on web development and application development solutions for companies. 
            Previously, I studied computer engineering at the Hong Kong University of Science and Technology
          </div>
          <br/>
          <div>
            In my free time, I love to explore machine-learning and game projects, and, of course, play games and soccer!
          </div>
        </div>
        <div>
          <img src={ProfilePicture} height="300"></img>
        </div>
      </div>
      <div className="row index-1">
        <div className='skills'>
          {/*<img src={ReactIcon} alt="React.js" height="300"></img>
          <img src={AEMIcon} alt="AEM" height="300"></img>
          <img src={JSIcon} alt="JavaScript" height="300"></img>
          <img src={TSIcon} alt="TypeScript" height="300"></img>
          <img src={NodeJSIcon} alt="Node.js" height="300"></img>
          <img src={MySQLIcon} alt="SQL" height="300"></img>
          <img src={AzureIcon} alt="Azure" height="300"></img>
          <img src={AWSIcon} alt="AWS" height="300"></img>
          <img src={MongoDBIcon} alt="MongoDB" height="300"></img>*/}
        </div>
        <div>
          <div className='experience index-0'>
            <div>
              <span className='job-title'>Junior Full Stack Developer</span>
              <span className='dates'>Jun 2022 to Nov 2022</span>
            </div>
            <div>
              <span className='company'>IBM</span>
              <span className='location'>Hong Kong</span>
            </div>
          </div>
          <div className='experience index-1'>
            <div>
              <span className='job-title'>System Support Analyst</span>
              <span className='dates'>Dec 2022 to Now</span>
            </div>
            <div>
              <span className='company'>Full Year Intl. Trade Co.</span>
              <span className='location'>Toronto</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
