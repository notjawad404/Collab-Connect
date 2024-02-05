import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export default function UpdateProjectPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [pName, setPName] = useState('');
  const [pDescription, setPDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [repoLink, setRepoLink] = useState('');
  const [requirements, setRequirement] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentType, setPaymentType] = useState('');

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const projectDoc = await getDoc(doc(db, 'projects', projectId));

        if (projectDoc.exists()) {
          const projectData = projectDoc.data();
          setPName(projectData.ProjectName);
          setPDescription(projectData.ProjectDescription);
          setTechStack(projectData.TechStack);
          setRepoLink(projectData.RepoLink);
          setRequirement(projectData.Requirements);
          setPaymentType(projectData.PaidProject);
        } else {
          console.error('Project not found');
          // Redirect to some error page or handle accordingly
        }
      } catch (error) {
        console.error('Error fetching project data:', error.message);
        // Handle error accordingly
      }
    };

    fetchProjectData();
  }, [projectId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Update the project data in Firebase
      await updateDoc(doc(db, 'projects', projectId), {
        ProjectName: pName,
        ProjectDescription: pDescription,
        TechStack: techStack,
        RepoLink: repoLink,
        Requirements: requirements,
        PaidProject: paymentType,
      });

      alert('Project Updated Successfully');
      navigate('/myprojects');
    } catch (error) {
      console.error('Error updating document: ', error);
      alert('Error updating project. \nPlease try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-800 h-screen text-white">
      <div className='flex justify-between pt-2 px-4'>

      </div>
      <h1 className='text-center text-3xl'>Update Project</h1>
      <div className="flex justify-center items-center">
        <form className="flex flex-col">
          <label className="py-1">Project Name</label>
          <input className="w-[400px] p-1 rounded-lg text-slate-800" required value={pName} onChange={(e) => setPName(e.target.value)} type="text"/>

          <label className="py-1">Tech Stack Used <span className='text-xs'>{'(Add Multiple separated by comma ,)'}</span></label>
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
  );
}
