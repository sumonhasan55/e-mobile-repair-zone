'use client'
import { useEffect, useState } from "react";



const ServiceCard = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/services');
                const data = await response.json();
                setServices(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <>


            {services.map((service) => (
                <div className="card w-96 bg-base-100 shadow-xl my-8"  key={service.name}>
                    <figure><img src={service.imageURL} alt="Services"  className=" rounded-2xl w-80 h-60"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {service.name}
                           
                        </h2>
                        <p>{service.description}</p>
                       <button className=" bg-primary text-white rounded-full p-2">Get Now!</button>
                    </div>
                </div>

            ))}


        </>
    );
};

export default ServiceCard;