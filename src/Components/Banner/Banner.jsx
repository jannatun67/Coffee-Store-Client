import './banner.css'
import icon from "../../assets/images/icons/1.png"
import icon2 from "../../assets/images/icons/2.png"
import icon3 from "../../assets/images/icons/3.png"
import icon4 from "../../assets/images/icons/4.png"


const Banner = () => {
    return (
        <div>
          <div className='banner'>
           <div className='text-white w-7/12 mx-auto py-52 mr-[25px] pl-14 space-y-3'>
           <h2 className='text-[55px] '>Would you like a Cup of Delicious Coffee?</h2>
            <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className='bg-[#c4a275] py-2 px-1 text-black'>Learn More</button>
           </div>
          </div>
          <div className='bg-[#ECEAE3] py-10'>
            <div className='w-10/12 mx-auto'>
                <div className='grid md:grid-cols-2 grid-cols-4 gap-4'>
                    <div className='space-y-2'>
                        <img src={icon} alt="" />
                        <h1 className='text-3xl text-[#331A15]'>Awesome Aroma</h1>
                        <p className='text-gray-500'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className='space-y-2'>
                        <img src={icon2} alt="" />
                        <h1 className='text-3xl text-[#331A15]'>High Quality</h1>
                        <p className='text-gray-500'>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className='space-y-2'>
                        <img src={icon3} alt="" />
                        <h1 className='text-3xl text-[#331A15]'>Pure Grades</h1>
                        <p className='text-gray-500'>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className='space-y-2'>
                        <img src={icon4} alt="" />
                        <h1 className='text-3xl text-[#331A15]'>Proper Roasting</h1>
                        <p className='text-gray-500'>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Banner;