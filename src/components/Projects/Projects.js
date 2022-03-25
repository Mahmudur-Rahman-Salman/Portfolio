import React from 'react';

import seogram from '../../img/SeoGram..png';
import autowash from '../../img/Auto Wash.png';
import digigram from '../../img/DigiGram.png';
import foodCorner from '../../img/Food Corner.png';


const Projects = () => {
 
    const seoGithubClick = () => {
        window.open("https://github.com/salman1603/SeoGram.");
    };
    const seoLiveSite = () => {
        window.open("https://seoagency.netlify.app/");
    };
    const foodCornerGithubClick = () => {
        window.open("https://github.com/Mahmudur-Rahman-Salman/Food-Corner");
    };
    const foodCornerServerSite = () => {
        window.open("https://github.com/Mahmudur-Rahman-Salman/Food-Corner-Server");
    };
    const foodCornerLiveSite = () => {
        window.open("https://food-corner-web.netlify.app/");
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
            <div class="row row-cols-1 row-cols-lg-3 g-4 mt-5 pt-5">
                <div class="col" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="card h-100">
                        <img src={foodCorner} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Food Corner</h5>
                            <p className="card-text">Complete responsive website for a Food Delivery Business Organization.</p>
                            <button type="button" className="btn btn-primary" onClick={foodCornerGithubClick}>Client Site</button>
                            <button type="button" className="btn btn-primary ms-2" onClick={foodCornerServerSite}>Server Site</button>
                            <button type="button" className="btn btn-primary ms-2" onClick={foodCornerLiveSite}>Live Site</button>
                            
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">React JS,Firebase, React Router, React Aos Animation, React Bootstrap, React Typewriter , React scroll</small>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="card h-100">
                        <img src={seogram} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">SEO Agency</h5>
                            <p className="card-text">Complete responsive website for a SEO Agency who sells different types of services.</p>
                            <button type="button" className="btn btn-primary" onClick={seoGithubClick}>Github</button>
                            <button type="button" className="btn btn-primary ms-2" onClick={seoLiveSite}>Livesite</button>

                        </div>
                        <div className="card-footer">
                            <small className="text-muted">React JS, React Router, React Aos Animation, React Bootstrap, React Typewriter , React scroll</small>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="card h-100">
                        <img src={autowash} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Auto Wash</h5>
                            <p className="card-text">Responsive website for Car Wash company who sells different types of services.</p>
                            <button type="button" className="btn btn-primary" onClick={autowashGithubSite}>Github</button>
                            <button type="button" className="btn btn-primary ms-2" onClick={autowashLiveSite}>Livesite</button>

                        </div>
                        <div className="card-footer">
                            <small className="text-muted">React JS, React Router, React Aos Animation, React Bootstrap, React Typewriter , React scroll</small>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="card h-100">
                        <img src={digigram} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Digital Products</h5>
                            <p className="card-text">Responsive website for Digital products company who sells different types of services.</p>
                            <button type="button" className="btn btn-primary" onClick={digigramGithubSite}>Github</button>
                            <button type="button" className="btn btn-primary ms-2" onClick={digigramLiveSite}>Livesite</button>

                        </div>
                        <div className="card-footer">
                            <small className="text-muted">HTML , CSS, Bootstrap, JavaScript</small>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Projects;