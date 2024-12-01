
import logo from '../../assets/images/more/logo1.png'
import header from '../../assets/images/more/15.jpg'

const Header = () => {
    return (
        <div >
            <div className='relative'>
                <img className=' h-[120px] w-full' src={header} alt="" />
            </div>
           <div className='absolute top-4 left-96'>
           <div className='flex items-center justify-center '>
                <img className='w-[60px]' src={logo} alt="" />
                <h2 className=' md:text-6xl text-white'>Espresso Emporium</h2>
            </div>
           </div>
        </div>
    );
};

export default Header;