import React from 'react';
import Carousel from '@/components/Carousel';
import AboutPage from '../aboutus/page';
import WhyusPage from '../whyus/page';
import GalleryPage from '../gallery/page';
import ContactcUsPage from '../contuctus/page';
import VideoPage from '../videos/page';
import Services from '../services/page';

const HomePage = () => {
    return (
        <div className=''>

            <Carousel />
            <Services />
            <AboutPage />
            <WhyusPage />
            <GalleryPage />
            <VideoPage />
            <ContactcUsPage />


        </div>
    );
};

export default HomePage;