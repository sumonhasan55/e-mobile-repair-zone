/* eslint-disable react/prop-types */
// ServiceCard.js
import React from 'react';
import Link from 'next/link';


async function getData() {
    const res = await fetch('http://localhost:3001/services')
    
    if (!res.ok) {
      
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const ServiceCard = async () => {
    const services = await getData()
  return (
    <>
      {services?.map((service) => (
        <div className="card w-96 bg-base-100 shadow-xl my-8" key={service.name}>
          <Link href={`/services/${encodeURIComponent(service.name)}`}>
            
              <figure>
                <img src={service.imageURL} alt="Services" className="rounded-2xl w-80 h-60" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
                <button className="bg-primary text-white rounded-full p-2">Get Now!</button>
              </div>
            
          </Link>
        </div>
      ))}
    </>
  );
};


export default ServiceCard;
