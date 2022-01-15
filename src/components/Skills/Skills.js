import React from 'react';
// import { ProgressBar } from 'react-bootstrap';
import html from '../../img/html.png';
import css from '../../img/css.png';
import js from '../../img/java-script.png';
import tailwind from '../../img/images.png';
import react from '../../img/react.png';
import bootstrap from '../../img/bootstrap.png';
import github from '../../img/github.png';


const Skills = () => {
    return (
        <div className='mt-5 pt-5 container'>
            {/* <h3 className='text-center text-light'>Skills</h3>
            <div className="underline" style={{backgroundColor:"white"}}></div>
            <div className='container pb-5'>
                <div className='m-4'>
                    <h5 className='text-start text-light'>HTML</h5>
                    <ProgressBar animated now={90} className='w-75' label={`${90}%`} />
                </div>
                <div className='m-4'>
                    <h5 className='text-start text-light'>CSS</h5>
                    <ProgressBar animated now={80} className='w-75' label={`${80}%`} />
                </div>
                <div className='m-4'>
                    <h5 className='text-start text-light'>Javascript</h5>
                    <ProgressBar animated now={80} className='w-75' label={`${80}%`} />
                </div>
                <div className='m-4'>
                    <h5 className='text-start text-light'>Bootstrap</h5>
                    <ProgressBar animated now={85} className='w-75' label={`${85}%`} />
                </div>
                <div className='m-4'>
                    <h5 className='text-start text-light'>React JS</h5>
                    <ProgressBar animated now={80} className='w-75' label={`${80}%`} />
                </div>
                <div className='m-4'>
                    <h5 className='text-start text-light'>Tailwind CSS</h5>
                    <ProgressBar animated now={70} className='w-75' label={`${70}%`} />
                </div>
            </div> */}
            <h3 className='text-center'>Skills</h3>
            <div className="underline"></div>
            <div className="row g-4 pt-5 mt-5">
                <div className="col-lg-3" data-aos="fade-left" data-aos-duration="1000">
                    <img src={html} alt="" className='w-50' />
                </div>
                <div className="col-lg-3" data-aos="fade-left" data-aos-duration="1000">
                    <img src={css} alt="" className='w-50' />
                </div>
                <div className="col-lg-3" data-aos="fade-left" data-aos-duration="1000">
                    <img src={js} alt="" className='w-50' />
                </div>
                <div className="col-lg-3" data-aos="fade-left" data-aos-duration="1000">
                    <img src={tailwind} alt="" className='w-50' />
                </div>
                <div className="col-lg-3" data-aos="fade-left" data-aos-duration="1000">
                    <img src={react} alt="" className='w-50' />
                </div>
                <div className="col-lg-3" data-aos="fade-left" data-aos-duration="1000">
                    <img src={bootstrap} alt="" className='w-50' />
                </div>
                <div className="col-lg-3" data-aos="fade-left" data-aos-duration="1000">
                    <img src={github} alt="" className='w-50' />
                </div>

            </div>
        </div>
    );
};

export default Skills;