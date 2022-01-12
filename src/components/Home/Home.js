import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import ScrollToTop from "react-scroll-to-top";
import './Home.css'

const Home = () => {
    return (
        <div>
            <ScrollToTop smooth />
            <Header></Header>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>

        </div>
    );
};

export default Home;