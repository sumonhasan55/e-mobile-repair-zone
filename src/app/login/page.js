import React from 'react';
import Layout from '@/components/Layout';


const login = () => {
    return (
        <Layout>

            <>

                <div className="min-h-screen hero bg-gradient-to-r from-cyan-500 to-blue-500">
                    <div>
                        <h3 className="my-5 text-5xl font-bold">Login!</h3>
                        <hr />
                        <form>
                           <input type='text'></input>
                        </form>
                    </div>
                </div>

            </>
        </Layout>
    );
};

export default login;




