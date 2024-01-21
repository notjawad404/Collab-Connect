import Navbar from "../Navbar/Navbar";


export default function ProjectDetails() {
  return (
<div className="bg-slate-800 h-screen">
      <Navbar/>
      <div className=" bg-orange-400 text-slate-100 w-[500px] mx-auto mt-10 py-2">
        <div className="flex flex-row justify-between px-2 ">
          <h1 className="bg-slate-600 text-slate-100 w-[200px] px-2">User Name</h1>
          <h1 className="bg-slate-600 text-slate-100 w-[200px] px-2">Paid/UnPaid</h1>
        </div>
        <div className="flex flex-row justify-between px-2 py-2">
          <h1 className="bg-slate-600 text-slate-100 w-[200px] px-2">Name</h1>
          <h1 className="bg-slate-600 text-slate-100 w-[200px] px-2">GitHub Link</h1>
        </div>
        <div className="flex flex-row px-2">
          <h1 className="bg-slate-600">Tech Stack: </h1>
          <div className="px-2">
          <h1 className=" bg-slate-400">Reactjs
          </h1>
          </div>
        </div>
        <div className="">
          <div className=" h-40 bg-slate-400 overflow-y-auto">
            <h1 className="bg-slate-600 text-slate-100">Project Description</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.</p>
          </div>
        </div>
        <div className="my-2">
          <div className=" h-40 bg-slate-400 overflow-y-auto">
            <h1 className="bg-slate-600 text-slate-100">Developer Require</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.</p>
          </div>
        </div>
      </div>
    </div>

  )
}
