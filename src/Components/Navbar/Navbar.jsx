import { Link, NavLink } from 'react-router-dom';
import Image from '/src/assets/images/logo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import userImage from '/src/assets/images/user.jpg'

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
    .then()
    .catch()

  }
    const navLink = <>
    <NavLink to="/" className={({isActive,isPending}) => 
        isPending ? "pending" : isActive ? "text-[#F4A492] ": ""}>Home</NavLink>
    <NavLink to="/contact" className={({isActive,isPending}) => 
        isPending ? "pending" : isActive ? "text-[#F4A492] ": ""}>Contact</NavLink>
    <NavLink to="/events" className={({isActive,isPending}) => 
        isPending ? "pending" : isActive ? "text-[#F4A492] ": ""}>Events</NavLink>
    <NavLink to="/gallery" className={({isActive,isPending}) => 
        isPending ? "pending" : isActive ? "text-[#F4A492] ": ""}>Gallery</NavLink>

    
    </>

    
    return (
        <div>

<div className="navbar bg-base-100  items-center justify-between mx-auto p-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl">
      
        {navLink}
      </ul>
    </div>
    <div className=" flex  normal-case text-xl">
        <img src={Image} className='h-12 ml-6'/><p className='-ml-[12] font-bold mt-5'>RIDELY</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-xl">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? 
      <button onClick={handleSignOut} className='btn bg-red-200 text-black'>Sign Out</button>
      :
      <Link to="/login">
    <button className='btn bg-red-200 text-black'>Login</button></Link> 

    
    }

<div className="w-10 rounded-full">
          <img src={userImage} />
        </div>
     {/* <NavLink to="/login" className='btn bg-slate-600 text-white'>Login</NavLink> */}
    
  </div>
</div>
            
</div>
    );
};

export default Navbar;