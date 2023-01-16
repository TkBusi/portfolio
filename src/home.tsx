import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './home.css';

const position = ["software engineer", "web developer", "game developer"];
const language = ["Python", "Java", "Javascript", "SQL", ".NET"]
const skills = ["Pytorch", "Django", "Pygame", "Spring", "Flutter", "Sling Models", "React", "Node.js", "Angular", "MySQL", "NoSQL", "SQLite", "Unity", "Game Design", "3D Modeling"]

function Home() {

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let i0 = Math.floor(seconds % 15 / 5);
  let i1 = Math.floor(seconds % 15 / 3);
  let i2 = Math.floor(seconds % 15);

  return (
    <div className="home">
      <div className="intro">
        <p>Hi I am Tom.</p>
        <p>I am a {position[i0]}.</p>
        <p>I code {language[i1]}.</p>
        <p>I shine at {skills[i2]}.</p>
      </div>
    </div>
  );
}

export default Home;
