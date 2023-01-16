import React from 'react';
import {Link} from 'react-router-dom';
import './projects.css';

function Projects() {
  return (
    <div className="projects">
      <p>Projects</p>
      <div className='section-links'>
        <div>Websites</div>
        <div>Apps</div>
        <div>ML</div>
        <div>Games</div>
      </div>
    </div>
  );
}

export default Projects;
