import React from 'react';
import seogram from '../../img/SeoGram.-site.png';
import autowash from '../../img/Auto Wash-site.png';
import digigram from '../../img/DigiGram-site.png';
import { Button } from 'react-bootstrap';


const Projects = () => {
    const seoGithubClick = () => {
        window.open("https://github.com/salman1603/SeoGram.");
    };
    const seoLiveSite = () => {
        window.open("https://seoagency.netlify.app/");
    };
    const autowashGithubSite = () => {
        window.open("https://github.com/salman1603/Auto-Wash");
    };
    const autowashLiveSite = () => {
        window.open("https://auto-wash.netlify.app/");
    };
    const digigramGithubSite = () => {
        window.open("https://github.com/salman1603/DigiGram-Agency");
    };
    const digigramLiveSite = () => {
        window.open("https://digigram-agency.netlify.app/");
    };


    return (
        <div className='mt-5 pt-5 container'>
            <h3 className='text-center text-dark'>Projects</h3>
            <div className="underline"></div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 pt-5" >
                <div className="col col-lg-4 col-md-6" data-aos="zoom-in"
                    data-aos-duration="1000">
                    <div className="card">
                        <img src={seogram} className="card-img-top h-50" alt="blogpicture" />
                        <div className="card-body">
                            <h5 className="card-title text-start fw-bold">SEO Agency</h5>
                            <p className="card-text text-start">Complete responsive website for a SEO Agency who sells different types of services.</p>
                            <Button variant="outline-primary" onClick={seoGithubClick}>Github</Button>
                            <Button variant="outline-danger" className='ms-2' onClick={seoLiveSite}>Livesite</Button>
                        </div>
                        <div class="card-footer">
                            <small class="text-dark fw-bold">React JS, React Router, React Aos Animation, React Bootstrap, React Typewriter , React scroll</small>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4 col-md-6" data-aos="zoom-in"
                    data-aos-duration="1500">
                    <div className="card">
                        <img src={autowash} className="card-img-top" alt="blogpicture" />
                        <div className="card-body">
                            <h5 className="card-title text-start fw-bold">Auto Wash</h5>
                            <p className="card-text text-start">Responsive website for Car Wash company who sells different types of services.</p>
                            <Button variant="outline-primary" onClick={autowashGithubSite}>Github</Button>
                            <Button variant="outline-danger" className='ms-2' onClick={autowashLiveSite}>Livesite</Button>
                        </div>
                        <div class="card-footer">
                            <small class="text-dark fw-bold">React JS, React Router, React Aos Animation, React Bootstrap, React Typewriter , React scroll</small>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4 col-md-6" data-aos="zoom-in"
                    data-aos-duration="2000">
                    <div className="card">
                        <img src={digigram} className="card-img-top" alt="blogpicture" />
                        <div className="card-body">
                            <h5 className="card-title text-start">Digital Marketting</h5>
                            <p className="card-text text-start">Responsive website for Digital products company who sells different types of services.</p>
                            <Button variant="outline-primary" onClick={digigramGithubSite}>Github</Button>
                            <Button variant="outline-danger" className='ms-2' onClick={digigramLiveSite}>Livesite</Button>
                        </div>
                        <div class="card-footer">
                            <small class="text-dark fw-bold">HTML , CSS, Bootstrap, JavaScript</small>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;