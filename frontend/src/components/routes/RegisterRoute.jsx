import { Navigate, Outlet } from "react-router-dom"

export default function RegisterRoute() {

    const newUser = localStorage.getItem('newUser')
  return (
    newUser ? <Outlet/> : <Navigate to='/createprofile' />
  )
  
}
