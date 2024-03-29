import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { query, where, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function MyProjectsList() {
  const [fetchData, setFetchData] = useState([]);

  const userID = localStorage.getItem('userId');
  const navigate = useNavigate();
  // const dbref = collection(db, 'projects');

  const fetch = async () => {
    try {
      const querySnapshot = await getDocs(query(collection(db, 'projects'), where('UserToken', '==', userID)));
      const fetchdata = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFetchData(fetchdata);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateProject = (id) => {
    navigate(`/update/${id}`);
  };
  
  const deleteProject = async (id) => {
    try{
      await deleteDoc(doc(db, 'projects', id));
      fetch();
    }
    catch (error) {
      alert("Error deleting document: ", error);
    }
  };

  useEffect(() => {
    fetch();
  });

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
  

  return (
    <div className="bg-slate-800 h-screen overflow-y-auto">
      <Navbar />
      <div>
        {fetchData.map((project, index) => (
          <div key={index} className="bg-slate-100 w-[500px] mx-auto mt-10 py-2">
            <div className="flex flex-row justify-between px-2">
              <h1>{project.ProjectName}</h1>
              <h1>{project.PaidProject}</h1>
            </div>
            <div className="flex flex-row justify-between p-2">
              <button onClick={() => repoLink(project)} className="bg-blue-600 p-1 rounded-lg text-slate-100 cursor-pointer">GitHub Repo</button>
              <h1></h1>
            </div>
            <div className="flex flex-row px-2 pb-2">
              <h1 className="whitespace-nowrap pr-2">Tech Stack: </h1>
              <div className="flex px-2 py-2 overflow-x-auto bg-slate-500">
                {renderTechStack(project.TechStack)}
              </div>
            </div>
            <div className="flex justify-between">
            <div>
            </div>
            <div>
            </div>
              <button className="bg-red-400 p-1 mx-1 rounded-lg">Project Details</button>
              <button className="bg-red-400 p-1 mx-1 rounded-lg" onClick={()=>updateProject(project.id)}>Update</button>
              <button className="bg-red-400 p-1 mx-1 rounded-lg" onClick={()=>deleteProject(project.id)}>Delete</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

