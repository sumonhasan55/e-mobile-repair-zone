import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faMessage, faPhoneAlt, } from '@fortawesome/free-solid-svg-icons';
import MapComponent from '@/components/MapComponent';
import ContactForm from '@/components/ContactForm';

const ContactcUsPage = () => {

    const location = { lat: 23.810332, lng: 90.41251809999994 };

    return (
        <div>
            <h1 className=' font-extrabold text-5xl text-center my-5 text-slate-500 '>CONTACT US</h1>
            <div className='grid grid-cols-2  gap-8 justify-between my-8'>
                <div className=' w-5/6 rounded-md px-2'>
                    <MapComponent location={location} />
                </div>
                <div className=' my-5'>

                    <div className=' flex  mb-8'>
                        <div className=' my-auto mx-5  text-slate-500'>
                            <FontAwesomeIcon width={22} icon={faMapMarkerAlt} />
                        </div>

                        <div>
                            <h1 className=' font-semibold text-2xl  text-slate-500'>Our Office Address</h1>
                            <p>Dhaka-1211,Bangladesh</p>
                        </div>
                    </div>
                    <div className=' flex  my-8'>
                        <div className=' my-auto mx-5  text-slate-500'>
                            <FontAwesomeIcon width={22} icon={faMessage} />
                        </div>

                        <div>
                            <h1 className=' font-semibold text-2xl  text-slate-500'>General Enquiries</h1>
                            <p>Dhaka-1211,Bangladesh</p>
                        </div>
                    </div>
                    <div className=' flex  my-8'>
                        <div className=' my-auto mx-5  text-slate-500'>
                            <FontAwesomeIcon width={22} icon={faPhoneAlt} />
                        </div>

                        <div>
                            <h1 className=' font-semibold text-2xl  text-slate-500'>Call Us</h1>
                            <p>+880-01303434869</p>
                        </div>
                    </div>
                    <div className=' flex  my-8'>
                        <div className=' my-auto mx-5  text-slate-500'>
                            <FontAwesomeIcon width={22} icon={faClock} />
                        </div>

                        <div>
                            <h1 className=' font-semibold text-2xl  text-slate-500'>Our Timing</h1>
                            <p>09:00 am-12:00 pm</p>
                        </div>
                    </div>

                </div>
            </div>
            <ContactForm/>

        </div>
    );
};

export default ContactcUsPage;