import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireMe.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return(
        <section id ="intro">
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I'm <span className="introName">Jaeden</span> <br/>Software Engineer </span>
                <p className="introPara">I am a skilled and passionate software engineer with experience in <br></br>software development, website creation, and data analytics.</p>
                <Link><button className="btn"><img src={btnImg} className='btnImg'  alt="Hire Me" /> Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg" /><br/>
        </section>
    )
}
export default Intro; 


