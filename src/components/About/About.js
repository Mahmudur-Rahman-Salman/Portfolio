import React from 'react';
import profilepic from '../../img/profile-2.jpg'
import './About.css'

const About = () => {
    return (
        <div className='container mt-5 pt-5'>

            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className='m-3'>
                        <h3 className='text-center text-dark'>About Me</h3>
                        <div className="underline"></div>
                        <div className="mt-5 text-start">
                            <h6 className='m-3'>I’m a Front-End Developer. I develop web applications. I like working with JavaScript. Therefore I use React JS to make stunning UI. I am ready to work with honesty, dedication, sincerity, and confidence to adapt to any situation to achieve my purpose.</h6>
                            <h6 className='m-3'> I always stay hungry to learn something new. Currently focused on expanding my knowledge about developing high performing websites and get hired.</h6>
                        </div>

                        <button type="button" className="btn buttoncolor text-light rounded-pill m-2 p-2 " data-aos="zoom-in" data-aos-duration="1500">Read More</button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12" data-aos="fade-up"
                    data-aos-duration="2000">
                    <img src={profilepic} alt="frame" className='w-75' />
                </div>
            </div>

        </div>
    );
};

export default About;