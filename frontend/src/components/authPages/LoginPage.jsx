import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useFirebase } from '../context/authContext';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {


  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = useFirebase().auth;


  const handleSubmit = async (e) => {

    e.preventDefault();
    try {

      console.log()
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('login Successfully')
      alert("Login  Successfully")

      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken)
      localStorage.setItem('user', user)
      localStorage.setItem('userId', user.uid)

      const userID = localStorage.getItem('userId');
      console.log(userID)

      navigate('/')
    } catch (error) {
      console.error(error.code + "\n" + error.message)
      alert("Error cannot Login. \nPlease try again")
    }
  }

   const LoginRoute = () => {
    navigate('/register')
  }

  return (
    <div className="bg-slate-800 h-screen text-slate-100 py-32">
      <p className="text-center py-5 text-xl font-semibold">
        Login
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



          {/* Submit Button */}
          <input
            type="submit"
            value="Login"
            className="bg-red-600 text-slate-100 w-[100px] my-2 p-1 rounded-lg" />
        </form>
        <div className='flex flex-row'>
          <p className='py-1'>Don&apos;t have an account?</p>
          <button className='bg-blue-600 py-1 mx-4 w-[100px] rounded-lg text-center' onClick={LoginRoute}>Register</button></div>
      </div>
    </div>
  )
}
