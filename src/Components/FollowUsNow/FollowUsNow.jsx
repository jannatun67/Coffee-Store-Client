import coffee0 from '../../assets/images/cups/Rectangle 9.png'
import coffee1 from '../../assets/images/cups/Rectangle 10.png'
import coffee2 from '../../assets/images/cups/Rectangle 11.png'
import coffee3 from '../../assets/images/cups/Rectangle 12.png'
import coffee4 from '../../assets/images/cups/Rectangle 13.png'
import coffee5 from '../../assets/images/cups/Rectangle 14.png'
import coffee6 from '../../assets/images/cups/Rectangle 15.png'
import coffee7 from '../../assets/images/cups/Rectangle 16.png'



const FollowUsNow = () => {
    return (
        <div className="w-10/12 mx-auto mt-7 mb-6">
            <div className="text-center mb-9">
                <p>Follow Us Now</p>
                <h3 className="text-[#331A15] text-[55px] font-semibold">Follow on Instagram</h3>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                <img src={coffee0} alt="" />
                <img src={coffee1} alt="" />
                <img src={coffee2} alt="" />
                <img src={coffee3} alt="" />
                <img src={coffee4} alt="" />
                <img src={coffee5} alt="" />
                <img src={coffee6} alt="" />
                <img src={coffee7} alt="" />
              

            </div>
        </div>
    );
};

export default FollowUsNow;