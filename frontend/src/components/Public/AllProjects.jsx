import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import OurMission from "../Aboutus/OurMission";

export default function AllProjects() {
  const [fetchData] = useState([]);
  const navigate = useNavigate();

  const repoLink = (project) => {
    window.open(project.RepoLink, '_blank');
  };

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

  const DetailPage = (project) => {
    navigate(`/projectDetails/${project}`);
  };

  return (
    <div className="bg-slate-800 h-screen overflow-y-auto text-slate-100">
      <Navbar />
      <div className="flex justify-start">
        <div className="w-1/4">
          <OurMission />
        </div>
        <div className="w-3/4 p-4">
          {fetchData.length === 0 ? (
            <p className="text-center text-slate-400 mt-10">No projects available yet.</p>
          ) : (
            fetchData.map((project, index) => (
              <div key={index} className="bg-slate-600 text-slate-50 w-4/5 mx-auto mt-10 py-2 rounded-lg">
                <div className="flex flex-row justify-between px-2">
                  <h1>{project.ProjectName}</h1>
                  <button className="bg-red-400 p-1 rounded" onClick={() => DetailPage(project.ProjectID)}>
                    Project Details
                  </button>
                </div>
                <div className="flex flex-row justify-between p-2">
                  <button onClick={() => repoLink(project)} className="bg-blue-600 p-1 rounded-lg text-slate-100 cursor-pointer">
                    GitHub Repo
                  </button>
                  <h1>{project.PaidProject}</h1>
                </div>
                <div className="flex flex-row px-2 pb-2">
                  <h1 className="whitespace-nowrap pr-2">Tech Stack: </h1>
                  <div className="flex px-2 py-2 overflow-x-auto bg-slate-500 rounded">
                    {renderTechStack(project.TechStack)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
