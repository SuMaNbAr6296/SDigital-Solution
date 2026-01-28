import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Process from './Process';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Contact from './Contact';

const Home = ({ onOpenModal }) => {
    return (
        <main>
            <Hero onOpenModal={onOpenModal} />
            <Services />
            <Process />
            <Pricing />
            <Testimonials />
            <FAQ />
            <Contact />
        </main>
    );
};

export default Home;
