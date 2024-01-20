// import {  getAuth, signOut } from "firebase/auth"
import {  useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate()
  const logout = async () =>{
    try {
      // await signOut(getAuth);
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      navigate('/login')
    } catch (error) {
      console.error(error.code + "\n" + error.message)
    }

    
  }
  return (
    <div>
        <h1>Welcone to OC Hub</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}
