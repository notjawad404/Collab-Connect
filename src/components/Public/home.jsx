
import About from "../Home/About";
import Banner from "../Home/Banner";
import Services from "../Home/Services";
import Navbar from "../Navbar/Navbar";

export default function Home() {

  return (
    <div className="bg-slate-800 h-screen overflow-y-auto text-slate-50">
      <Navbar/>
      <Banner/>
      <About/>
      <Services/>
      
    </div>
  )
}
