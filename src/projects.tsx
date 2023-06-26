import React, {useState, useEffect, useCallback} from 'react';
import {Link} from 'react-router-dom';
import { JsxElement } from 'typescript';
import AnimeListImg from './files/img/to_be_updated.png'
import MobileRacingGame from './files/img/anime_reviews_holder.jpg'
import './projects.css';
import { getEventListeners } from 'events';
function Projects() {
  
  useEffect(() => {
    document.title = "Tom Shen | Projects";
    window.addEventListener("scroll", checkScroll)
    return(() => window.removeEventListener("scroll", checkScroll))
  }, []);

  const checkScroll = useCallback(() => {
    console.log("check scroll")
    var sections = document.getElementsByClassName("section");
    for(let i = 0;i < sections.length; i++){
      let ele = sections[i] as HTMLElement
      var rect= ele.getBoundingClientRect();
      if((i == 0 && rect.top > 0) || (i == sections.length - 1 && rect.top < 0) || (rect.top < 100 && rect.top > -100)){
        var selected = document.getElementsByClassName("active")[0] as HTMLElement;
        selected.classList.remove("active");
        var target = document.getElementsByClassName(ele.classList[1] + "-link")[0];
        target.classList.add("active");
      }
    }
  }, [])

  const scrollSection = (loc : string) =>{
    window.removeEventListener("scroll", checkScroll)
    // move the show button
    var target = document.getElementsByClassName(loc + "-link")[0];
    var selected = document.getElementsByClassName("active")[0] as HTMLElement;
    selected.classList.remove("active");
    target.classList.add("active");
    var scrollTarget = document.getElementsByClassName(loc)[0];
    scrollTarget.scrollIntoView();
    // add back checkscroll after scrolling complete
    var timer : any;
    window.addEventListener('scroll', function time() {
        clearTimeout(timer);        
        timer = setTimeout(function() {
          window.removeEventListener("scroll", time)
          window.addEventListener("scroll", checkScroll)
        }, 500);
    }, false);
  }

  return (
    <div className="projects">
      <div className='title'>Projects</div>
      <div className='section-list'>
        <ul className='links-list'>
          <li className='link website-projects-link active' onClick={() => scrollSection("website-projects")}>Websites</li>
          <li className='link app-projects-link' onClick={() => scrollSection("app-projects")}>Apps</li>
          <li className='link machine-learning-projects-link' onClick={() => scrollSection("machine-learning-projects")}>ML</li>
          <li className='link games-projects-link' onClick={() => scrollSection("games-projects")}>Games</li>
        </ul>
      </div>
      <div className='section website-projects'>
        <div className="project index-1">
          <img className="project-background" src={AnimeListImg}/>
          <div className="project-title">
          Anime Review Searches
          </div>
          <div className='project-subheader'>
            Informative Website created by Angular and MongoDB Atlas
          </div>
          <div className='project-description'>
            1. Search Reviews in different anime reviews websites by APIs/scraping. <br/>
            2. View animes related news powered by google news. <br/>
            3. Add their own reviews to animes and gain badges. <br/>
            4. View forum discussion topics and add their own threads.
          </div>
        </div>
        <hr/>
      </div>
      <div className='section app-projects'>
      <div className="project index-1">
          <img className="project-background" src={AnimeListImg}/>
          <div className="project-title">
            Gadget App
          </div>
          <div className='project-subheader'>
            User Interface created by Flutter
          </div>
          <div className='project-description'>
            1. display weather/news according to users' location and preferences. <br/>
            2. display videos on the screen as gadgets. <br/>
            3. Add images as background. <br/>
          </div>
        </div>
        <hr/>
        <div className="project index-2">
          <img className="project-background" src={AnimeListImg}/>
          <div className="project-title">
            Personal Health Assistant
          </div>
          <div className='project-subheader'>
            Health application to monitor food/nutrition
          </div>
          <div className='project-description'>
            1. Monitor sleeping schedule/time. <br/>
            2. Estimate calories and other nutrition consumption. <br/>
            3. Reach healthy goals to gain badges. <br/>
            4. Connect and compare yourselves with other users.
          </div>
        </div>
        <hr/>
      </div>
      <div className='section machine-learning-projects'>
        <div className="project index-1">
          <img className="project-background" src={AnimeListImg}/>
          <div className="project-title">
            AI learn to play TFT
          </div>
          <div className='project-subheader'>
            Artificial Intelligence learn to play auto chess games by pytorch and tensorflow
          </div>
          <div className='project-description'>
            1. Realistic environment like real world. <br/>
            2. Pick your favorite car and have a free ride on the streets <br/>
            3. Learn the game and challenge yourselves by story mode and time challenges. <br/>
            4. Play with other users online.
          </div>
        </div>
        <hr/>
      </div>
      <div className='section games-projects'>
        <div className="project index-1">
          <img className="project-background" src={AnimeListImg}/>
          <div className="project-title">
            Mobile Racing Game
          </div>
          <div className='project-subheader'>
            Racing Game created by Unity and Blender
          </div>
          <div className='project-description'>
            1. Realistic environment like real world. <br/>
            2. Pick your favorite car and have a free ride on the streets <br/>
            3. Learn the game and challenge yourselves by story mode and time challenges. <br/>
            4. Play with other users online.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
