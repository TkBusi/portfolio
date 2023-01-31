import React from 'react';
import {Link} from 'react-router-dom';
import { JsxElement } from 'typescript';
import './projects.css';
function Projects() {
  const scrollSection = (event: React.MouseEvent<HTMLLIElement>) =>{
    event.preventDefault();
    // move the show button
    var target = event.target as HTMLElement;
    var selected = document.getElementsByClassName("active")[0] as HTMLElement;
    selected.classList.remove("active");
    target.classList.add("active")
  }
  return (
    <div className="projects">
      <div className='title'>Projects</div>
      <ul className='section-links'>
        <li className='section website-link active' onClick={scrollSection}>Websites</li>
        <li className='section app-link' onClick={scrollSection}>Apps</li>
        <li className='section machine-learning-link' onClick={scrollSection}>ML</li>
        <li className='section games-link' onClick={scrollSection}>Games</li>
      </ul>
      <div className='website-projects'>
        
      </div>
      <div className='app-projects'></div>
      <div className='machine-learning-projects'></div>
      <div className='games-projects'></div>
    </div>
  );
}

export default Projects;
