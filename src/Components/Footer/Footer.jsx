import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/images/more/logo1.png'
import { MdCall, MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='mt-9'>
            <div>
            <div className="footer">
            <div className='md:flex md:justify-between md:items-center gap-6 w-10/12 mx-auto px-20'>
            <div className='mb-10  md:w-1/2 mx-auto space-y-10'>
                <div>
                <img className='w-[60px]' src={logo} alt="" />
                <h3 className='text-[#331A15] font-bold text-2xl'>Espresso Emporium</h3>
                <p className='text-gray-500'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                </div>
                <div className='flex gap-3 text-2xl text-[#331A15] mt-3'>
                    <p><FaFacebook /></p>
                    <p><FaTwitter /></p>
                    <p><FaInstagram /></p>
                    <p><FaLinkedin /></p>
                </div>
                <div className='mt-5'>
                    <h3 className='text-[#331A15] text-2xl font-bold'>Get in Touch</h3>
                    <p className='flex items-center gap-3 mt-2'><span className='text-[#331A15]'><MdCall /></span> +88 01533 333 333</p>
                    <p className='flex items-center gap-3 mt-2'><span className='text-[#331A15]'><MdEmail /></span>info@gmail.com</p>
                    <p className='flex items-center gap-3 mt-2'> <span className='text-[#331A15]'><FaLocationDot /></span>72, Wall street, King Road, Dhaka</p>
                </div>
            </div>
            <div className='mb-10  md:w-1/2 mx-auto pl-10 mt-16'>
                <h2 className='text-[#331A15] font-bold text-2xl'>Connect with Us</h2>
                <div className='mt-4 space-y-2'>
                    <input type="text" placeholder='name'className='bg-[#f8f1ef] px-2 py-1 w-full' /><br />
                    <input type="email" placeholder='email'className='bg-[#f8f1ef] px-2 py-1 w-full' />
                    <textarea name="message" id="" cols="30" rows="7" placeholder='message'
                        className='p-2 bg-[#f8f1ef]'
                    ></textarea><br />
                    <button className='border border-[#331A15] p-2 rounded-2xl'>Send Message</button>
                </div>
            </div>
            </div>
            </div>
            </div>
            <div className='footerImg p-3'>
                <p className=' text-center'>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;