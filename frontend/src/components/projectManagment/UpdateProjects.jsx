import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateProjectPage() {
  const navigate = useNavigate();
  const [pName, setPName] = useState('');
  const [pDescription, setPDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert('Project updated successfully');
      setLoading(false);
      navigate('/myprojects');
    }, 500);
  };

  return (
    <div className="bg-slate-800 h-screen text-white p-6">
      <h1 className='text-center text-3xl font-bold mb-6'>Update Project</h1>
      <div className="flex justify-center items-center">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="py-1">Project Name</label>
          <input className="w-[400px] p-1 rounded-lg text-slate-800" required value={pName} onChange={(e) => setPName(e.target.value)} type="text" />
          <label className="py-1">Tech Stack Used</label>
          <input className="w-[400px] p-1 rounded-lg text-slate-800" required value={techStack} onChange={(e) => setTechStack(e.target.value)} type="text" />
          <label className="py-1">Project Description</label>
          <textarea className="w-[400px] p-1 rounded-lg text-slate-800" rows={3} required value={pDescription} onChange={(e) => setPDescription(e.target.value)} />
          <button
            type="submit"
            className='bg-red-600 hover:bg-slate-100 hover:text-slate-800 mx-auto w-[200px] mt-4 py-1 rounded-full'
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update'}
          </button>
        </form>
      </div>
    </div>
  );
}
