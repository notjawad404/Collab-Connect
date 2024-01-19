import { useRef } from 'react'
import { useAuth } from '../context/authContext'

export default function RegisterPage() {
  const emailRef = useRef(null)
  const passRef = useRef(null)
  const conpassRef = useRef(null)
  const {registerUser} = useAuth();

  console.log(registerUser);

  
  function handleSubmit(e){
  
      e.preventDefault();
  
  }

  return (
    <div className="bg-slate-800 h-screen text-slate-100 py-32">
    <p className="text-center py-5 text-xl font-semibold">
    Register Page
    </p>
      <div className="flex justify-center items-center flex-col">
        <form className=" flex flex-col">
          <label>Email:</label>
          <input type="email" ref={emailRef} required className=" text-slate-800 w-[300px] my-2 p-1 rounded-lg"/>
          <label>Password:</label>
          <input type="password" ref={passRef} required  className=" text-slate-800 w-[300px] my-2 p-1 rounded-lg"/>
          <label>Confirm Password:</label>
          <input type="password" ref={conpassRef} required  className=" text-slate-800 w-[300px] my-2 p-1 rounded-lg"/>
          <input type="submit" onClick={handleSubmit} value="Register" className="bg-red-600 text-slate-100 w-[100px] my-2 p-1 rounded-lg"/>
        </form>
        <div className='flex flex-row'>
        <p className='py-1'>Already have an account</p>
        <p className='bg-blue-600 py-1 mx-4 w-[100px] rounded-lg text-center'> Login</p></div>
      </div>
    </div>
  )
}
