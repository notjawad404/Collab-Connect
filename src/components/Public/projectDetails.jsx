import Navbar from "../Navbar/Navbar";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function ProjectDetails() {
  const [fetchData, setFetchData] = useState([]);
  const location = useLocation();
  const dbref = collection(db, 'projects');
  const projectId = location.pathname.split('/').pop();
  console.log(projectId);

  const fetch = async () => {
    try {
      const querySnapshot = await getDocs(query(dbref, where('ProjectID', '==', projectId)));
  
      const fetchdata = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFetchData(fetchdata);
      console.log(fetchdata, "A")
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(()=>{
    fetch()
  }, [])
  const renderTechStack = (techStack) => {
    return (
      <div className="flex">
        {techStack.split(',').map((stack, index) => (
          <div key={index} className="bg-red-400 mx-1 inline-block rounded-lg whitespace-nowrap">
            <span className="px-2">{stack.trim()}</span>
          </div>
        ))}
      </div>
    );
  };
  return (
<div className="bg-slate-800 h-screen overflow-y-auto">
      <Navbar/>
      
      {
        fetchData.map((project, index) => (
          <div key={index} className=" bg-slate-600 text-slate-50 font-bold text-lg w-4/5 mx-auto mt-10 py-2">
        <div className="flex flex-row justify-between px-2 ">
          <h1 className=" w-[200px] px-2">{project.ProjectName}</h1>
          <h1 className=" w-[200px] px-2">{project.PaidProject}</h1>
        </div>
        <div className="flex flex-row justify-between px-2 py-2">
          <Link to={project.RepoLink} className=" w-[200px] px-2">GitHub Repo Link</Link>
          <h1 className=" w-[200px] px-2"></h1>

        </div>
        <div className="flex flex-row px-2">
          <h1 className="bg-slate-600">Tech Stack: </h1>
          <div className="flex px-2 py-2 overflow-x-auto bg-slate-500">
                {renderTechStack(project.TechStack)}
              </div>
        </div>
        <div className="py-2">
        <h1 className="">Project Description</h1>
          <div className=" h-40 bg-slate-400 overflow-y-auto overflow-x-auto">
            <p>{project.ProjectDescription}</p>
          </div>
        </div>
        <div className="my-2">
        <h1 className="">Developer Require</h1>
          <div className=" h-40 bg-slate-400 overflow-y-auto">
            <div>{project.Requirements}</div>
          </div>
        </div>
      </div>
        ))
      }
    </div>

  )
}
