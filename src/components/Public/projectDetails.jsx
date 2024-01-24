import Navbar from "../Navbar/Navbar";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function ProjectDetails() {
  const [fetchData, setFetchData] = useState([]);
  const location = useLocation();

  // const userID = localStorage.getItem('token');
  const dbref = collection(db, 'projects');


  const projectId = location.pathname.split('/').pop();
  console.log(projectId);

  // const fetch = async () => {
  //   try {
  //     // const querySnapshot = await getDocs(query(collection(db, 'projects'), where('pid', '==', projectId)));
  //     // const querySnapshot = await getDocs(dbref);
  //     const querySnapshot = await getDocs(query(dbref, where('id', '==', `${projectId}`)));
  //     const fetchdata = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //     setFetchData(fetchdata);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const fetch = async () => {
    try {
      // Create a query to get documents where the 'id' field is equal to the projectId
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
  }, [location])

  console.log("Fetch Data:", fetchData);

  // const projectId = location.pathname.split('/').pop();
  // console.log(projectId);
  return (
<div className="bg-slate-800 h-screen">
      <Navbar/>
      AVCSDAS
      {
        fetchData.map((project, index) => (
          <div key={index} className=" bg-blue-600 text-slate-100 w-[500px] mx-auto mt-10 py-2">
        <div className="flex flex-row justify-between px-2 ">
          <h1 className="bg-slate-600 text-slate-100 w-[200px] px-2">{project.ProjectName}</h1>
          <h1 className="bg-slate-600 text-slate-100 w-[200px] px-2">{project.PaidProject}</h1>
        </div>
        <div className="flex flex-row justify-between px-2 py-2">
          <h1 className="bg-slate-600 text-slate-100 w-[200px] px-2">{project.RepoLink}</h1>
          <h1 className="bg-slate-600 text-slate-100 w-[200px] px-2"></h1>

        </div>
        <div className="flex flex-row px-2">
          <h1 className="bg-slate-600">Tech Stack: </h1>
          <div className="px-2">
          <h1 className=" bg-slate-400">{project.TechStack}
          </h1>
          </div>
        </div>
        <div className="">
          <div className=" h-40 bg-slate-400 overflow-y-auto">
            <h1 className="bg-slate-600 text-slate-100">Project Description</h1>
            <p>{project.ProjectDescription}</p>
          </div>
        </div>
        <div className="my-2">
          <div className=" h-40 bg-slate-400 overflow-y-auto">
            <h1 className="bg-slate-600 text-slate-100">Developer Require</h1>
            <p>{project.Requirements}</p>
          </div>
        </div>
      </div>
        ))
      }
    </div>

  )
}
