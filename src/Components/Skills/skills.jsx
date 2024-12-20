import React from 'react';
import './skills.css';
import Uicon from '../../assets/UIUXicon.png';
import Wicon from '../../assets/WDicon.png';
import Aicon from '../../assets/ADicon.png';


const Skills = () => {
  return (
    <section id ='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate software engineer with experience in software development, data analytics/ science, web design, and agile methodologies. I have a keen eye for detail as well as a strong understanding of algorthmic problem solving and software design  .I am proficient in HTML, CSS, C#, Javascript, React JS, NodeJS, as well as Microsoft Office, and Adobe Photoshop.  </span>
        <div className="skillBars">
          <div className="skillBar">
             <img src={Uicon} alt="UIDesign" className="skillBarImg"/>
                <div className="skillBarText">
                  <h2> UI/UX Desgin</h2>
                  <p>Design fully responsive user interfaces</p>
                </div>
            </div>
            <div className="skillBar">
              <img src={Wicon} alt="WebDesign" className="skillBarImg"/>
                <div className="skillBarText">
                  <h2>Web Design</h2>
                  <p>Design fully responsive websites and mobile websites</p>
                </div>
            </div>
            <div className="skillBar">
              <img src={Aicon} alt="AppDesign" className="skillBarImg"/>
                <div className="skillBarText">
                  <h2>App Design</h2>
                  <p>Design fully responsive web and mobile applications</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;