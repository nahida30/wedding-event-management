import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import {  useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../../Providers/AuthProvider";





const Registration = () => {
  const {createUser} = useContext(AuthContext);
 
  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword ] = useState(false);

  
  const handleRegister = e =>{
   
    e.preventDefault();
   console.log(e.currentTarget);
   const form = new FormData(e.currentTarget);
   const text = form.get('name');
   const email = form.get('email');
   const password = form.get('password');

   const accepted = e.target.conditions.checked;
   console.log(text,email,password, accepted);

   createUser(email,password)
   .then(result =>{
    console.log(result.user)
   })
   .catch(error =>{
    console.error(error)
   })


   
   if(password.length <6){
    setErrorMessage('Password should be at least 6 characters or longer');
    return;
   }
   else if(!/[A-Z]/.test(password)){
    setErrorMessage('Your password should have at least one uppercase characters')
    return;
   }
   
   else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
    setErrorMessage('Your password should have at least one special character');
    return;
}

else if (!accepted){
  setErrorMessage('Please accept our terms and conditions')
  return;
}
   
   


   setErrorMessage('');
   setSuccess('');


  

  //  create user 
  createUserWithEmailAndPassword(auth,email,password)
  .then(result =>{
    console.log(result.user);
    setSuccess('User created successfully!!')
    
  })
  .catch(error => {
    console.error(error);
    setErrorMessage(error.message);
   
  })

  }
    return (
        <div>
            <div className="hero min-h-[50%] ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-96  shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" name="name" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
          <input type={showPassword ? "text": "password"} placeholder="password" className="input input-bordered w-full" name="password" required />
          <span className="absolute mt-4 -ml-6" onClick={()=> setShowPassword(!showPassword)}>
            {
              showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }


          </span>
          </div>
          
        </div>
       <div>
       <input type="checkbox" name="conditions" id="conditions" />
        <label className="ml-2" htmlFor="conditions">Accept our terms and conditions</label>
       </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-red-200 text-black">Register</button>
        </div>
        <div>npm install -g firebase-tools
            <p>Already have an account?? <Link to="/login" className='text-sky-600'>Login Here</Link></p>
        </div>
      </form>
      {
        errorMessage && <p className="text-red-600 px-8">{errorMessage}</p>
      }
      {
        success && <p className="text-green-600 px-8">{success}</p>
      }
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Registration;