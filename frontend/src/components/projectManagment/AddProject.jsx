import { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';


export default function AddProjectspage() {
  const [pName, setPName] = useState('');
  const [pDescription, setPDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [repoLink, setRepoLink] = useState('');
  const [requirements, setRequirement] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentType, setPaymentType] = useState('');

  const userId = localStorage.getItem('userId');
  const dbref = collection(db, 'projects');


  const generateProjectID = async () => {
    let projectId;
    let isUnique = false;

    while (!isUnique) {
      projectId = userId + '-' + Math.floor(Math.random() * 1000);
      const docSnapshot = await getDoc(doc(dbref, projectId));

      if (!docSnapshot.exists()) {
        isUnique = true;
      }
    }
    return projectId;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const projectID = await generateProjectID();

      const addData = await addDoc(dbref, {
        ProjectID: projectID,
        ProjectName: pName,
        ProjectDescription: pDescription,
        TechStack: techStack,
        RepoLink: repoLink,
        Requirements: requirements,
        PaidProject: paymentType,
        UserToken: userId,
      });

      if (addData) {
        alert('Project Added Successfully');
        window.location.reload();
      } else {
        alert('Error adding project. \nPlease try again');
      }
    } catch (error) {
      alert('Error adding document: ', error);
    } finally{
      setLoading(false);
    }

  };

  return (
    <div className="bg-slate-800 h-screen text-white">
    <div className='flex justify-between pt-2 px-4'>
      <Link className='rounded-lg p-2 bg-green-600' to='/'>Home</Link>
      <h1>AddProject</h1>
      <Link className='rounded-lg p-2 bg-green-600' to='/myprojects'>My Project</Link>
    </div>
    <div className="flex justify-center items-center">
      <form className="flex flex-col">
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
        
        <label className='py-1'>Paid/UnPaid Project</label>
<div className="flex items-center space-x-4">
  <label className="flex items-center">
    <input
      type="radio"
      id="paid"
      name="paymentType"
      value="Paid"
      checked={paymentType === 'Paid'}
      onChange={(e) => setPaymentType(e.target.value)}
      className="text-slate-800"
    />
    <span className="ml-2">Paid</span>
  </label>

  <label className="flex items-center">
    <input
      type="radio"
      id="unpaid"
      name="paymentType"
      value="Unpaid"
      checked={paymentType === 'Unpaid'}
      onChange={(e) => setPaymentType(e.target.value)}
      className="text-slate-800"
    />
    <span className="ml-2">Unpaid</span>
  </label>
</div>
          <button
            type="submit"
            onClick={handleSubmit}
            className='bg-red-600 hover:bg-slate-100 hover:text-slate-800 mx-auto w-[200px] mt-2 py-1 rounded-full'
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>
      </form>
      </div>
    </div>
  )
}
