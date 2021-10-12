import React from "react";
import { authWithFacebook, authWithGithub, authWithGoogle } from "../../../firebase/customFunctions/firebaseAuth";
import logo from '../../../icons/fbLogo.svg';
import googleLogo from '../../../icons/googleLogo.svg';
import githubLogo from '../../../icons/githubLogo.svg';


const Signup = () => {

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div>
        <img className='w-24 h-24 mb-5' src={logo} alt="" />
      </div>
      <div className='flex justify-between items-center flex-col'>
        <h1 className='text-blue-600 text-center text-5xl font-medium mb-8'>Sign Up</h1>
        <input
          className='w-80 py-3 px-3 outline-none rounded-md mb-3'
          placeholder='Your email....'
          type="email"
          required
        />
        <input
          className='w-80 py-3 px-3 outline-none rounded-md mb-3'
          placeholder='Your password....'
          type="password"
          required
        />
        <button className='bg-blue-700 text-white w-80 py-3 px-3 outline-none rounded-md ' >Sign In</button>
        <div className='flex justify-between w-full mt-5 items-center'>
        <button onClick={authWithGoogle} className='p-2 border-2 rounded-lg bg-white border-green-200 hover:bg-green-100'><img className='h-8 w-8' src={googleLogo} alt="" /></button>
        <button onClick={authWithFacebook} className='p-2 border-2 rounded-lg bg-white border-blue-200 hover:bg-blue-100'><img className='h-8 w-8' src={logo} alt="" /></button>
        <button onClick={authWithGithub} className='p-2 border-2 rounded-lg bg-white border-gray-300 hover:bg-gray-100'><img className='h-8 w-8' src={githubLogo} alt="" /></button>
      </div>
      </div>
    </div>
  );
};

export default Signup;
