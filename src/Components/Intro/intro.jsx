import React from 'react';
import './intro.css';
import bg from '../../assets/image2.png';
import btnImg from '../../assets/hireMe.png';
import bgMo from '../../assets/bgMobile.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return(
        <section id ="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Jaeden</span> <br/>Software Engineer </span>
                <p className="introPara">I am a skilled and passionate software engineer with experience in <br></br>software development, website creation, and data analytics.</p>
                <a href="https://linkedin.com/in/jaedjones" target="_blank"rel="noopener noreferrer">
                    <button className="btn"><img src={btnImg} className="btnImg" alt="Hire Me" />Hire Me</button>
                    </a>
            </div>
            <img src={bg} alt="profile" className="bg" />
            <img src={bgMo} alt="profile1" className="bgMob" /><br/>
        </section>
    )
}
export default Intro; 


