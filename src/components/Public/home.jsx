
import Navbar from "../Navbar/Navbar";

import bg1 from '../../assets/Logo/bg1.png'

export default function Home() {

  return (
    <div className="bg-slate-800 h-screen text-slate-50">
      <Navbar/>
      <div>
        <img className="" src={bg1} alt="OC Hub Logo"/>
      </div>
    </div>
  )
}
