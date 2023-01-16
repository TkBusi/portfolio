import React from 'react';
import {Link} from 'react-router-dom';
import { BsGithub, BsLinkedin, BsInbox, BsFileEarmarkPerson } from "react-icons/bs";
import './footer.css';

function Footer() {
    const today = new Date();
  return (
    <footer>
        <div className='social-media-links'>
            <BsInbox title='Email'/>
            <BsGithub title="Github"/>
            <BsLinkedin title="Linkedin"/>
            <BsFileEarmarkPerson title="Resume"/>
        </div>
        <small>© Tom Shen | {today.getFullYear()}</small>
    </footer>

  );
}

export default Footer;