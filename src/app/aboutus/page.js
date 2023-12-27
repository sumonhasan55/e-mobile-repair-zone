import React from 'react';

const AboutPage = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=' w-96'>
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold text-center">About Us!</h1>
                        <p className="py-6 ">We, dummy company, situated at area, city, state are leading service providers providing various services such as mobile damage and others. We do this so that you can spend your time following your passions and doing things you actually love rather than running around for mundane tasks. We focus on customer satisfaction. We ensure that all our services offered are delivered with well experienced.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default AboutPage;