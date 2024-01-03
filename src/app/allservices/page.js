import Layout from '@/components/Layout';
import React from 'react';
import Services from '../services/page';

const AllServices = () => {
    return (
       <Layout>
         <div className=' container'>

          <Services/>
       
            
        </div>
       </Layout>
    );
};

export default AllServices;