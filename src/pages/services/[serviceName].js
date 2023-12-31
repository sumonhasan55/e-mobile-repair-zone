
import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';


const ServiceDetail = ({ service }) => {
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <Layout>
      <section>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
          <img src={service.imageURL} alt="Services" className="rounded-2xl w-80 h-60" />
            <div>
              <h1 className="text-5xl font-bold">{service?.name}</h1>
              <p className="py-6">{service.description}</p>
              <Link href={"/cart"}>
              <button className="btn btn-primary">Add to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>

  );
};

export async function getServerSideProps({ params }) {
  const { serviceName } = params;
  const res = await fetch(`http://localhost:3001/services?name=${encodeURIComponent(serviceName)}`);
  const data = await res.json();
  const service = data[0];

  return {
    props: {
      service,
    },
  };
}

export default ServiceDetail;
