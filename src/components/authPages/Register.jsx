import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useFirebase } from '../context/authContext';
import { useNavigate } from 'react-router-dom';


export default function RegisterPage() {


  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpasswaord, setConfirmPassword] = useState('')

  const auth = useFirebase().auth;


  const handleSubmit = async (e) => {

    e.preventDefault();
    try {

      if (password === confirmpasswaord) {

        console.log()
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        alert("Signed in Successfully")
  
        const user = userCredential.user;
        localStorage.setItem('token', user.accessToken)
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('newUser', true)
        navigate('/createprofile')
        
      }
      else{
        alert("Password and Confirm Password must be same")
      }
    } catch (error) {
      console.error(error.code + "\n" + error.message)
      alert("Error Cannot Sign in. \nPlease try again")
    }
  }

   const LoginRoute = () => {
    navigate('/login')
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
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className=" text-slate-800 w-[300px] my-2 p-1 rounded-lg" />

          {/* Password */}
          <label>Password:</label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className=" text-slate-800 w-[300px] my-2 p-1 rounded-lg" />

          {/* Confirm Password */}
          <label>Confirm Password:</label>
          <input
            type="password"

            value={confirmpasswaord}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            className=" text-slate-800 w-[300px] my-2 p-1 rounded-lg" />

          {/* Submit Button */}
          <input
            type="submit"
            value="Register"
            className="bg-red-600 text-slate-100 w-[100px] my-2 p-1 rounded-lg" />
        </form>
        <div className='flex flex-row'>
          <p className='py-1'>Already have an account</p>
          <button className='bg-blue-600 py-1 mx-4 w-[100px] rounded-lg text-center' onClick={LoginRoute}> Login</button></div>
      </div>
    </div>
  )
}
