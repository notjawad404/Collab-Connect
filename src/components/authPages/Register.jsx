import { useState, useRef } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useFirebase } from '../context/authContext';


export default function RegisterPage() {
  const emailRef = useRef(null)
  const passRef = useRef(null) 
  const conpassRef = useRef(null)

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmpasswaord, setConfirmPassword] = useState('')
  
const auth = useFirebase().auth;


  const handleSubmit = async(e) =>{
  
      e.preventDefault();
      try {

        console.log()
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential)

        // const user = userCredential.user;
        // console.log(user)
      } catch (error) {
        console.error(error.code+"\n"+ error.message)
      }
  }

  return (
    <div className="bg-slate-800 h-screen text-slate-100 py-32">
    <p className="text-center py-5 text-xl font-semibold">
    Register Page
    </p>
      <div className="flex justify-center items-center flex-col">
        <form onSubmit={handleSubmit} className=" flex flex-col">

{/* Email */}
          <label>Email:</label>
          <input 
          type="email" 
          ref={emailRef} 
          value={email} 
          required 
          onChange={(e)=>setEmail(e.target.value)}
          className=" text-slate-800 w-[300px] my-2 p-1 rounded-lg"/>

{/* Password */}
          <label>Password:</label>
          <input 
          type="password" 
          ref={passRef} 
          value={password} 
          required  
          onChange={(e)=>setPassword(e.target.value)}
          className=" text-slate-800 w-[300px] my-2 p-1 rounded-lg"/>

{/* Confirm Password */}
          <label>Confirm Password:</label>
          <input 
          type="password" 
          ref={conpassRef} 
          value={confirmpasswaord} 
          required 
          onChange={(e)=>setConfirmPassword(e.target.value)}
          className=" text-slate-800 w-[300px] my-2 p-1 rounded-lg"/>

{/* Submit Button */}
          <input 
          type="submit" 
          value="Register" 
          className="bg-red-600 text-slate-100 w-[100px] my-2 p-1 rounded-lg"/>
        </form>
        <div className='flex flex-row'>
        <p className='py-1'>Already have an account</p>
        <p className='bg-blue-600 py-1 mx-4 w-[100px] rounded-lg text-center'> Login</p></div>
      </div>
    </div>
  )
}
