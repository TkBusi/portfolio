import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './about.css';

function About() {
  useEffect(() => {
    document.title = "Tom Shen | About Tom";
  }, []);
  return (
    <div className="about">
      <div className='title'>About Tom</div>
      <div>intro</div>
      <div>experience</div>
      <div>skills</div>
    </div>
  );
}

export default About;
