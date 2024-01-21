import { useState } from 'react';
import { db } from '../../firebase';
// import { doc, collection, addDoc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';

export default function AddProjectspage() {
  const [pName, setPName] = useState('')
  const [pDescription, setPDescription] = useState('')
  const [techStack, setTechStack] = useState('')
  const [repoLink, setRepoLink] = useState('')
  const [requirements, setRequirement] = useState('')
  const [PaidProject, setPaidProject] = useState('')
  // const [ setProject] = useState({})
  const documentToken = localStorage.getItem('token')
  // Creating a reference to the projects collection
  const dbref = collection(db, 'projects')

  //storing data in firestore

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const docRef = await addDoc(dbref, project)
      const addData = await addDoc(dbref, {ProjectName: pName, ProjectDescription: pDescription, TechStack: techStack, RepoLink: repoLink, Requirements: requirements, PaidProject: PaidProject, UserToken: documentToken,})
      if(addData) {
        alert("Project Added Successfully")
      }
      else{
        alert("Error adding project. \nPlease try again")
      }
      // console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }


  // const handleSubmit = async (e) => {
  //   console.log(db);
  //   e.preventDefault();
  //   try {
  //     const project = {pName, pDescription, techStack, repoLink}
  //     setProject(project)
  //     console.log(project)

  //     alert("Project Added Successfully")

  //   } catch (error) {
  //     alert("Error adding project. \nPlease try again")
  //   }
  // }

  const NavigateHome = () => {
    Navigate('/')

  }
  const NavigateMyProjects = () => {
    Navigate('/myprojects')
  }
  return (
    <div className="bg-slate-800 h-screen text-white">
    <div className='flex justify-between pt-2 px-4'>
      <button className='rounded-lg p-2 bg-green-600' onClick={NavigateHome}>Home</button>
      <h1>AddProject</h1>
      <button className='rounded-lg p-2 bg-green-600' onClick={NavigateMyProjects}>My Project</button>
    </div>
    <div className="flex justify-center items-center">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="py-1">Project Name</label>
        <input className="w-[400px] p-1 rounded-lg text-slate-800" required value={pName} onChange={(e) => setPName(e.target.value)} type="text"/>
        <label className="py-1">Tech Stack Used <span className='text-xs'>{'(Add Multiple seperated by comma ,)'}</span></label>
        <input className="w-[400px] p-1 rounded-lg text-slate-800" required value={techStack} onChange={(e) => setTechStack(e.target.value)} type="text"/>
        <label className="py-1">Project&apos;s GitHub Repo Link</label>
        <input className="w-[400px] p-1 rounded-lg text-slate-800" required value={repoLink} onChange={(e) => setRepoLink(e.target.value)} type="text" />
        <label className="py-1">Project Description</label>
        <textarea className="w-[400px] p-1 rounded-lg text-slate-800" rows={3}  required value={pDescription} onChange={(e) => setPDescription(e.target.value)} type="textbox"/>
        <label className='py-1'>Individual Resource Requirements</label>
        <textarea className='w-[400px] p-1 rounded-lg text-slate-800' rows={3} required value={requirements} onChange={(e) => setRequirement(e.target.value)} type="text" />
        
        <label className='py-1'>Paid/UnPaid Project </label>
        <input className='w-[400px] p-1 rounded-lg text-slate-800' type='text' required value={PaidProject} onChange={(e) => setPaidProject(e.target.value)}/>        <button type="submit" onClick={handleSubmit} className='bg-red-600 hover:bg-slate-100 hover:text-slate-800 mx-auto w-[200px] mt-2 py-1 rounded-full'>Submit</button>
      </form>
      </div>
    </div>
  )
}
