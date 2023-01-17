import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './home';
import About from './about';
import Projects from './projects';
import Blogs from './blogs';
import './index.css';
import Nav from './nav';
import Footer from './footer';
import reportWebVitals from './reportWebVitals';
import { JsxClosingTagInfo } from 'typescript';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const renderPage = function(Prop : React.FC){
  return(
    <div id="parent-wrapper">
      <Nav/>
      <div id="content-wrapper">
        <Prop/> 
      </div>
      <Footer/>
    </div>
  );
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={renderPage(Home)} />
        <Route path="/portfolio/about" element={renderPage(About)} />
        <Route path="/portfolio/projects" element={renderPage(Projects)} />
        <Route path="/portfolio/blogs" element={renderPage(Blogs)} />
        <Route path="/portfolio/*" element={renderPage(Home)} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
