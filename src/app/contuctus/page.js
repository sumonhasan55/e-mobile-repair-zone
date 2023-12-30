
import MapComponent from '@/components/MapComponent';
import ContactUs from '@/components/ContactUs';

const ContactcUsPage = () => {

    const location = { lat: 23.810332, lng: 90.41251809999994 };

    return (
        <div className=' bg-base-200  '> 
            <h1 className=' font-extrabold text-5xl text-center  text-slate-500 py-20 '>Contact us!</h1>
            <div className=' my-5'>
                <div className=' rounded-md px-2'>
                    <MapComponent location={location} />
                </div>
                
            </div>
           
            
            <ContactUs/>

        </div>
    );
};

export default ContactcUsPage;