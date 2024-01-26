import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import OurMission from "../Aboutus/OurMission";

export default function AllProjects() {
  const [fetchData, setFetchData] = useState([]);

  const dbref = collection(db, 'projects');
  const navigate = useNavigate();

  const fetch = async () => {
    try {
      const querySnapshot = await getDocs(dbref);
      const fetchdata = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFetchData(fetchdata);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const repoLink = (project) => {
    window.open(project.RepoLink, '_blank');
  };

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

  const DetailPage = (project) =>{
    const projectId = project
    // console.log(projectId)
    navigate(`/projectDetails/${projectId}`);
  }
  

  return (
    <div className="bg-slate-800 h-screen overflow-y-auto">
      <Navbar />
      <div className="flex justify-start">
      <div className="w-1/4">
          <OurMission/>
      </div>
      <div className="w-3/4">
      {fetchData.map((project, index) => (
          <div key={index} className="bg-slate-600 text-slate-50 w-4/5 mx-auto mt-10 py-2">
            <div className="flex flex-row justify-between px-2">
              <h1>{project.ProjectName}</h1>
              <button className="bg-red-400 p-1" onClick={()=>DetailPage(project.ProjectID)}>Project Details</button>
            </div>
            <div className="flex flex-row justify-between p-2">
              <button onClick={() => repoLink(project)} className="bg-blue-600 p-1 rounded-lg text-slate-100 cursor-pointer">GitHub Repo</button>
              <h1>{project.PaidProject}</h1>
            </div>
            <div className="flex flex-row px-2 pb-2">
              <h1 className="whitespace-nowrap pr-2">Tech Stack: </h1>
              <div className="flex px-2 py-2 overflow-x-auto bg-slate-500">
                {renderTechStack(project.TechStack)}
              </div>
            </div>
            <div className="">
            short description
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
