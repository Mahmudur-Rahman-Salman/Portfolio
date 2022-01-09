import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Skills = () => {
    return (
        <div className='mt-5 pt-5 bg-dark'>
            <h3 className='text-center text-light'>Skills</h3>
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
            </div>
        </div>
    );
};

export default Skills;