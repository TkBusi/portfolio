import React from 'react';
import {Link} from 'react-router-dom';
import { BsGithub, BsLinkedin, BsInbox, BsFileEarmarkPerson } from "react-icons/bs";
import './footer.css';

function Footer() {
    const today = new Date();
  return (
    <footer>
        <div className='social-media-links'>
            <a href="mailto:tshin0346@gmail.com">
              <BsInbox title='Email'/>
            </a>
            <a href="https://github.com/TomShenDev">
              <BsGithub title="Github"/>
            </a>
            <a href="https://www.linkedin.com/in/tom-shen-s/">
              <BsLinkedin title="Linkedin"/>
            </a>
            <a href="https://docs.google.com/document/d/1GOkAhNI68eCmIr08I-lZweHywV4pUhYd/edit?usp=sharing&ouid=101326802720281978888&rtpof=true&sd=true">
              <BsFileEarmarkPerson title="Resume"/>
            </a>
        </div>
        <small>© Tom Shen | {today.getFullYear()}</small>
    </footer>

  );
}

export default Footer;