import {   signOut } from "firebase/auth"
import {  useNavigate } from "react-router-dom";
import { useFirebase } from "../context/authContext";


export default function Home() {
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
    <div>
        <h1>Welcone to OC Hub</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}
