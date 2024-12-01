import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTopPercentage from './components/scroll';
import Social from './components/Social';
import './style.css';



function App() {
    return (
        <div>
            
            <Header />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Social/>
            <Footer />
            <ScrollTopPercentage />
        </div>
    );
}

export default App;

