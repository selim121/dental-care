import React from 'react';
import Header from '../Header/Header';
import TopServices from '../TopServices/TopServices';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <TopServices />
            <WelcomeSection />
            <Team />
            <Testimonials />
        </div>
    );
};

export default Home;