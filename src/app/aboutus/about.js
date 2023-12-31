import React from 'react';

const AboutPage = () => {
    return (
        <>
            <h1 className="text-5xl font-bold text-center bg-base-200 pt-12 text-slate-500 ">About Us!</h1>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row w-full">
                    <div className="">

                        <img src="https://i.ibb.co/ZJz5hD8/about-us.png" className="max-w-sm rounded-lg shadow-2xl lg:mx-5" />
                    </div>
                    <div className=' w-fit'>


                        <p className="py-6 text-justify p-5"><span className=' font-semibold'><span className=' text-primary'>E-Mobile-Zone </span>No-1 Mobile Phone Repair Service Provider in Bangladesh – 100% Guaranteed.</span>
                            Your mobile phone’s technical issues are unavoidable, but you can prevent them with our professional assistance. We are a reputed Mobile repair our company that strives for excellence and quality. From control buttons to touch screens - we repair every mobile phone part.<br></br><br></br>

                            Is your Android phone not turning on after the accidental drop? Don’t worry E-Mobile-Zone is here to rescue you. We house a team of licensed experts who can resolve this hardware problem without downtime. So, book an appointment with us and fix the damaged phone units from the best experts in Bangladesh.<br></br><br></br>

                            No matter which phone you use or what needs fixing - we are ready to assist you. Whenever you encounter any problem with the device, contact us for the ultimate assistance. Moreover, our experts offer effective solutions to all your phone-related issues.</p>

                    </div>
                </div>
            </div>


        </>
    );
};

export default AboutPage;