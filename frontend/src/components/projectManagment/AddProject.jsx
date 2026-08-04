import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddProjectspage() {
  const [pName, setPName] = useState('');
  const [pDescription, setPDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [repoLink, setRepoLink] = useState('');
  const [requirements, setRequirement] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentType, setPaymentType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert('Project creation ready for Supabase phase');
      setLoading(false);
    }, 500);
  };

  return (
    <div className="bg-slate-800 h-screen text-white">
      <div className='flex justify-between pt-2 px-4'>
        <Link className='rounded-lg p-2 bg-green-600' to='/'>Home</Link>
        <h1 className="text-xl font-bold">Add Project</h1>
        <Link className='rounded-lg p-2 bg-green-600' to='/myprojects'>My Projects</Link>
      </div>
      <div className="flex justify-center items-center mt-6">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="py-1">Project Name</label>
          <input className="w-[400px] p-1 rounded-lg text-slate-800" required value={pName} onChange={(e) => setPName(e.target.value)} type="text" />
          <label className="py-1">Tech Stack Used <span className='text-xs'>{'(Separated by comma)'}</span></label>
          <input className="w-[400px] p-1 rounded-lg text-slate-800" required value={techStack} onChange={(e) => setTechStack(e.target.value)} type="text" />
          <label className="py-1">GitHub Repo Link</label>
          <input className="w-[400px] p-1 rounded-lg text-slate-800" required value={repoLink} onChange={(e) => setRepoLink(e.target.value)} type="text" />
          <label className="py-1">Project Description</label>
          <textarea className="w-[400px] p-1 rounded-lg text-slate-800" rows={3} required value={pDescription} onChange={(e) => setPDescription(e.target.value)} />
          <label className='py-1'>Resource Requirements</label>
          <textarea className='w-[400px] p-1 rounded-lg text-slate-800' rows={3} required value={requirements} onChange={(e) => setRequirement(e.target.value)} />
          <button
            type="submit"
            className='bg-red-600 hover:bg-slate-100 hover:text-slate-800 mx-auto w-[200px] mt-4 py-1 rounded-full'
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}
