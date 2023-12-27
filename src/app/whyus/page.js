import WhyusCard from "@/components/WhyusCard";


const WhyusPage = () => {
    return (
        <div>
            <h1 className=" text-center text-5xl text-primary font-extrabold my-5">Whyus!</h1>
            <div className=" grid grid-cols-4 gap-3">
            
              <WhyusCard/>
              <WhyusCard/>
              <WhyusCard/>
              <WhyusCard/>
            
               
            </div>
            
        </div>
    );
};

export default WhyusPage;