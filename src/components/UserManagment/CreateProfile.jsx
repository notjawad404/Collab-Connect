import { Link } from "react-router-dom";


export default function CreateProfile() {
    const newUser = localStorage.setItem('newUser', false);
    console.log(newUser)
    return (
    <div>
    <Link className="bg-red-400 w-[200px] p-2" to='/'>Home</Link>
      Create User Profile
    </div>
  )
}
