/* eslint-disable react/no-unescaped-entities */
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import  { app } from "../../firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the login page", location);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, provider)
    .then(result =>{
      const user = result.user
      console.log(user);
    })
    .catch(error => {
      console.log('error',error.message);
    })
  }
  
  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState('')
  
  const handleLogin = e => {
   e.preventDefault();
   console.log(e.currentTarget);
   const form = new FormData(e.currentTarget);
   const email = form.get('email');
   const password = form.get('password');
   console.log(email,password);

   signIn(email, password)
   .then(result =>{
    console.log(result.user);
    navigate(location?.state? location.state : '/');

   })
   .catch(error =>{
    console.error(error);
   })

   if (password !== password){
    setErrorMessage('Password do not match')
    return;
   }
   else if(email !== email){
    setErrorMessage('Email do not match')
    return;
   }

   setErrorMessage('');
   setSuccess('');

   signInWithEmailAndPassword(auth,email,password)
   .then(result =>{
    console.log(result.user);
    setSuccess('Logged in successfully')
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
      <form onSubmit={handleLogin}className="card-body">
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
          <input type="password" placeholder="password" className="input input-bordered" name="password" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-red-200 text-black">Login</button>
        </div>
        <hr />
        <p className="text-center">Sign in with</p>
        <button onClick={handleGoogleSignIn} className="h-12 w-20 mx-auto rounded-full bg-red-200">Google</button>
        <div>
            <p>Don't have any account?? <Link to="/registration" className='text-sky-600'>Register Here</Link></p>
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

export default Login;