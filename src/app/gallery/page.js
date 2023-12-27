import Image from "next/image";

import GalleryPic1 from "../../../public/gallery-pic.jpg"
import GalleryPic2 from "../../../public/gallery-pic.png"

const GalleryPage = () => {
    return (
        <div>
            <h1 className=" text-center text-5xl my-5 text-primary font-extrabold">
                Gallery
            </h1>
           <div className=" flex flex-1 justify-between">
           <Image src={GalleryPic1} />
            <Image src={GalleryPic2} />

           </div>
        </div>
    );
};

export default GalleryPage;