import Navbar from "../Navbar/Navbar";

export default function AllProjects() {
  return (
    <div className="bg-slate-800 h-screen">
      <Navbar />
      <div className="bg-slate-100 w-[500px] mx-auto mt-10 py-2">
        <div className="flex flex-row justify-between px-2">
          <h1>User Name</h1>
          <h1>Paid/UnPaid</h1>
        </div>
        <div className="flex flex-row justify-between px-2">
          <h1>Name</h1>
          <h1>GitHub Link</h1>
        </div>
        <div className="flex flex-row px-2">
          <h1 className="">Tech Stack: </h1>
          <div className="px-2">
          <h1 className="">Reactjs
          </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-red-400 p-1">Project Details</button>
        </div>
      </div>
    </div>
  )
}
