import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function MyProjectsList() {
  const [fetchData] = useState([]);
  const navigate = useNavigate();

  const updateProject = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="bg-slate-800 h-screen overflow-y-auto text-slate-100">
      <Navbar />
      <div className="p-4">
        {fetchData.length === 0 ? (
          <p className="text-center text-slate-400 mt-10">No projects created yet.</p>
        ) : (
          fetchData.map((project, index) => (
            <div key={index} className="bg-slate-100 text-slate-800 w-[500px] mx-auto mt-10 py-2 p-4 rounded-lg">
              <div className="flex flex-row justify-between">
                <h1 className="font-bold">{project.ProjectName}</h1>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button className="bg-red-400 p-1 px-3 rounded-lg text-white" onClick={() => updateProject(project.id)}>
                  Update
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
