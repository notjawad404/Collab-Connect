import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function ProjectDetails() {
  const [fetchData] = useState([]);

  const renderTechStack = (techStack) => {
    return (
      <div className="flex">
        {techStack?.split(',').map((stack, index) => (
          <div key={index} className="bg-red-400 mx-1 inline-block rounded-lg whitespace-nowrap">
            <span className="px-2">{stack.trim()}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-slate-800 h-screen overflow-y-auto text-slate-100">
      <Navbar />
      {fetchData.length === 0 ? (
        <p className="text-center text-slate-400 mt-10">Project details loading...</p>
      ) : (
        fetchData.map((project, index) => (
          <div key={index} className="bg-slate-600 text-slate-50 font-bold text-lg w-4/5 mx-auto mt-10 py-2 rounded-lg p-4">
            <div className="flex flex-row justify-between px-2">
              <h1 className="w-[200px] px-2">{project.ProjectName}</h1>
              <h1 className="w-[200px] px-2">{project.PaidProject}</h1>
            </div>
            <div className="flex flex-row justify-between px-2 py-2">
              <Link to={project.RepoLink} className="w-[200px] px-2 text-blue-400">GitHub Repo Link</Link>
            </div>
            <div className="flex flex-row px-2">
              <h1 className="bg-slate-600">Tech Stack: </h1>
              <div className="flex px-2 py-2 overflow-x-auto bg-slate-500 rounded">
                {renderTechStack(project.TechStack)}
              </div>
            </div>
            <div className="py-2">
              <h1>Project Description</h1>
              <div className="h-40 bg-slate-400 overflow-y-auto p-2 rounded">
                <p>{project.ProjectDescription}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
