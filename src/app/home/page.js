import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import React from 'react';
import AboutPage from '../aboutus/page';
import WhyusPage from '../whyus/page';
import GalleryPage from '../gallery/page';
import ContactcUsPage from '../contuctus/page';
import VideoPage from '../videos/page';

const HomePage = () => {
    return (
        <div className=''>
            <Navbar/>
            <Carousel/>
            <Services/>
            <AboutPage/>
           <WhyusPage/>
           <GalleryPage/>
           <VideoPage/>
           <ContactcUsPage/>
            <Footer/>
            
        </div>
    );
};

export default HomePage;