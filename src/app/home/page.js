import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import React from 'react';
import AboutPage from '../aboutus/page';
import WhyusPage from '../whyus/page';
import GalleryPage from '../gallery/page';

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <Services/>
            <AboutPage/>
           <WhyusPage/>
           <GalleryPage/>
            <Footer/>
            
        </div>
    );
};

export default HomePage;