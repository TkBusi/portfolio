import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './home.css';
const info = [
  ["software engineer", "web developer", "game developer"],
  ["Python", "Java", "JavaScript", "SQL", ".NET"],
  ["Pytorch", "Django", "Pygame", "Spring", "Flutter", "Sling Models", "React", "Node.js", "Angular", "MySQL", "NoSQL", "SQLite", "Unity", "Game Design", "3D Modeling"]
]

function Home() {

  const [seconds, setSeconds] = useState(0);
  const i = [0, 0, 0]
  var sentences = new Array();
  let isShow = false
  var interval : NodeJS.Timeout;

  function addSpan(){

  }

  function RemoveSpan(){

  }

  useEffect(() => {
    document.title = "Tom Shen | Dev Space";
    let introEle = document.getElementsByClassName("intro")[0];
    // store the content and remove from display
    let spans = Array.from(introEle.getElementsByTagName('span'))
    if(sentences.length == 0){
      sentences = spans.map((i) => {return i.innerText});
    }
    spans.forEach(i => i.innerText="")
    let x = 0, y = 0;
    interval = setInterval(() => {
      setSeconds(seconds => seconds + 0.1);
      if(sentences.length > x){
        // remove annotation if exist
        if(isShow)
          spans[x].textContent = spans[x].textContent?.slice(0, -1)!;
        // add a word back every 0.5s
        spans[x].textContent += sentences[x][y];
        y++;
        if(sentences[x].length == y){
          y = 0
          x++;
          return;
        }
        // add annotation if not exist
        if(!isShow)
          spans[x].textContent += "|";
        // reverse isShow after changing
        isShow = !isShow;
      }
    }, 100);
    return () => clearInterval(interval)
  }, []);

  const intro = 
  <div className="intro">
    <div><span className='greetings'>Hi I am Tom.</span></div>
    <div><span>I am a {info[0][i[0]]}.</span></div>
    <div><span>I code {info[1][i[1]]}.</span></div>
    <div><span>I love {info[2][i[2]]}.</span></div>
  </div>;

  /*
  let i0 = Math.floor(seconds % 15 / 5);
  let i1 = Math.floor(seconds % 15 / 3);
  let i2 = Math.floor(seconds % 15);
  */


  return (
    <div className="home">
      {intro}
    </div>
  );
}

export default Home;
