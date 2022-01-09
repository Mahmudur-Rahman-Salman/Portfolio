import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profile from '../../img/profile-pic.png';
import { Typewriter } from 'react-simple-typewriter'


const Intro = () => {
    return (
        <div className='container'>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h5 className='text-light'>Hello! I'm</h5>
                    <h1 className='fw-bold text-light'>
                        <span style={{ color: 'goldenRod', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['SALMAN', 'A Front End Developer', 'React JS Developer']}
                                loop={false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </h1>

                    <Button variant="outline-danger" data-aos="zoom-in" data-aos-duration="1000">Resume</Button>
                    <Link to="/about"><Button variant="outline-warning" className='ms-3'data-aos="zoom-in" data-aos-duration="1000">About Me</Button></Link>

                </div>
                <div className="col-md-6" data-aos="fade-down" data-aos-duration="3000">
                    <img src={profile} alt="banner" className='w-75 p-3' />
                </div>
            </div>
        </div>
    );
};

export default Intro;