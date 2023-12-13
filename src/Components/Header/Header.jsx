/* eslint-disable react/no-unescaped-entities */

import headerImage from '/src/assets/images/banner_overlay.png'
import bannerImage from '/src/assets/images/banner-image.jpg'
const Header = () => {
    return (
        <div>

<div className="hero min-h-screen w-[100%] mx-auto  lg:px-20 ">
    <img src={headerImage} className="h-[80vh]" alt="" />
  <div className="hero-overlay bg-opacity-10"></div>
  
  <div className="hero-content flex-col lg:flex-row-reverse gap-14">
    <div className="text-center lg:text-left">
      <h1 className="text-6xl font-bold lg:w-3/4"> Your Big Day with Grace and Ease!</h1>
      <p className="py-6">Unlocking the Secrets to a Successful Wedding" isn't just a wedding planning guide; it's a roadmap to creating a day that celebrates your love and leaves a lasting impression. With our guidance and expert insights, you'll be well-equipped to craft a wedding that's not only successful but also a true reflection of your love and commitment.</p>

     
      <button className="h-11 w-40 rounded-full bg-red-200" data-aos="zoom-in">Make Reservations</button>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <img src={bannerImage} className="h-96 w-96" alt="" />
    </div>

    
  </div>

</div>
            
        </div>
    );
};

export default Header;