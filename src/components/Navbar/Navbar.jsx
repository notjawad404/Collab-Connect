import { Link } from 'react-router-dom';
import {   signOut } from "firebase/auth"
import {  useNavigate } from "react-router-dom";
import { useFirebase } from "../context/authContext";
import logo from '../../assets/Logo/bg1.png'

export default function Navbar() {
    const token = localStorage.getItem('token')
    return (
        <>
            {token ? <PrivateNavbar /> : <PublicNavbar />
            }
        </>

    )
}

function PublicNavbar() {

    

    return (
        <div className='bg-blue-600 text-white py-2 px-2'>

            <div className='flex justify-between'>
                <div className='flex flex-row'>

                    <img src={logo} alt='logo' className='h-10 w-10' />
                    <h1 className='py-1 px-3 text-2xl font-bold'>Collab Connect</h1>
                </div>
                <div className='px-4 pt-2'>
                    <Link className='mx-2 py-1' to='/'>Home</Link>
                    <Link className='mx-2 py-1' to='/allprojects'>All Projects</Link>
                    <Link className='mx-2 py-1' to='/login'>Login</Link>
                </div>
            </div>

        </div>

    )
}


function PrivateNavbar() {
    const auth = useFirebase().auth
  const navigate = useNavigate()
  const logout = async () =>{
    try {
      await signOut(auth);
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      navigate('/login')
    } catch (error) {
      alert("Error cannot logout")
    } 
  }

    return (
        <div className='bg-blue-600 text-slate-100 py-2 px-2'>

            <div className='flex justify-between'>
            <div className='flex flex-row'>

<img src={logo} alt='logo' className='h-10 w-10' />
<h1 className='py-1 px-3 text-2xl font-bold'>Collab Connect</h1>
</div>
                <div className='px-4'>

                    <Link className='mx-2 py-1' to='/'>Home</Link>
                    <Link className='mx-2 py-1' to='/allprojects'>All Projects</Link>
                    <Link className='mx-2 py-1' to='/addproject'>Add Project</Link>
                    <Link className='mx-2 py-1' to='/myprojects'>My Projects</Link>
                    <Link className='mx-2 py-1' to='/userprofile'>User Profile</Link>
                    <Link className='p-1 bg-green-600 rounded-lg hover:bg-slate-100 hover:text-slate-800' to='/login' onClick={logout}>Logout</Link>
                </div>
            </div>

        </div>
    )

}

