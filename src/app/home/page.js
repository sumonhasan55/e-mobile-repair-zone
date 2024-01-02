import React from 'react';
import Carousel from '@/components/Carousel';
import WhyusPage from '../whyus/page';
import GalleryPage from '../gallery/page';
import VideoPage from '../videos/page';
import Services from '../services/page';
import ContactUsPage from '../contuctus/contact';
import AboutPage from '../aboutus/about';

const HomePage = () => {
    return (
        <div className=''>

            <Carousel />
            <Services />
           <AboutPage/>
            <WhyusPage />
            <GalleryPage />
            <VideoPage />
            <ContactUsPage/>
        


        </div>
    );
};

export default HomePage;