/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Image from "next/image";
import GalleryPic1 from "../../../public/gallery (1).jpg"
import GalleryPic2 from "../../../public/gallery (2).jpg"
import GalleryPic3 from "../../../public/gallery (3).jpg"

const GalleryPage = () => {
    return (
        <div>
            <h1 className=" text-center text-5xl my-20 text-primary font-extrabold">
                Gallery
            </h1>

            <div className="mx-auto ml-20  gap-5 lg:grid grid-cols-3 my-10">
                <div className="card w-96 bg-base-100 shadow-xl my-5">
                    <figure><Image src={GalleryPic1} alt="GalleryPic" className=" w-96 h-80 rounded-xl" /></figure>

                </div>

                <div className="card w-96 bg-base-100 shadow-xl my-5">
                    <figure><Image src={GalleryPic3} alt="GalleryPic" className=" w-96 h-80 rounded-xl" /></figure>

                </div>

                <div className="card w-96 bg-base-100 shadow-xl my-5">
                    <figure><Image src={GalleryPic2} alt="GalleryPic" className=" w-96 h-80 rounded-xl" /></figure>

                </div>

            </div>
        </div>
    );
};

export default GalleryPage;