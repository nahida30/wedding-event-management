/* eslint-disable react/no-unescaped-entities */
import headerImage from '/src/assets/images/banner_overlay.png'
import aboutImage from '/src/assets/images/about1.jpg'

const About = () => {
    return (
        <div>
         
            <div className="hero  w-[100%] mx-auto  lg:px-20 ">
            
            <img src={headerImage} className="" alt="" />

            <div className="hero-overlay bg-opacity-10">
               <h1 className="text-xl lg:text-5xl w-3/9 text-center mt-5 font-bold ">The Unrivaled Scenery, <span className="text-red-300">Unforgettable Wedding Program</span></h1>
            </div>

  <div className="hero-content mt-24 flex-col-reverse  lg:flex-row-reverse">
    <img src={aboutImage} className=" h-96 w-96 rounded-lg shadow-2xl " />
    <div>

      <h1 className="text-red-500 text-3xl font-thin">About Bridely</h1>
      <h1 className="text-6xl font-bold lg:w-3/4 font-Sans-serif"> What We do, We do With Passion</h1>
      <p className="py-6 text-xl w-[90%]"> This simple yet powerful philosophy is at the heart of everything we undertake, ensuring that every couple's dream wedding becomes a reality.</p>
      
    </div>
  </div>
</div>
           



  



  {/* <div className="text-center lg:text-left">
    <h1 className="text-red-500 text-3xl font-thin">About Bridely</h1>
    <h1 className="text-6xl font-bold lg:w-3/4 font-Sans-serif"> What We do, We do With Passion</h1>
    <p className="py-6 text-xl w-[90%]"> This simple yet powerful philosophy is at the heart of everything we undertake, ensuring that every couple's dream wedding becomes a reality.</p>

   
  
  </div> */}
 

  




    
  
        </div>
    );
};

export default About;