import ServiceCard from "./ServiceCard";


const Services = () => {
    return (
        <div>
            <h1 className=" text-primary font-extrabold text-5xl text-center my-5">Our Top Services</h1>
            <div className=" grid grid-cols-3 gap-5">
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
            </div>
            
        </div>
    );
};

export default Services;