import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './blogs.css';

function Blogs() {
  useEffect(() => {
    document.title = "Tom Shen | Blogs";
  }, []);
  return (
    <div className="blogs">
        blogs
    </div>
  );
}

export default Blogs;
