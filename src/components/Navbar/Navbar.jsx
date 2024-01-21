import { Link } from 'react-router-dom';


export default function Navbar() {
    const token = localStorage.getItem('token')
    return (
        <>
            {token ? <PrivateNavbar /> : <PublicNavbar />
            }
        </>

    )
}

function PublicNavbar() {
    return (
        <div className='bg-slate-100 text-slate-800 py-2 px-2'>

            <div className='flex justify-between'>
                <div>

                    <h1>OC Hub</h1>
                </div>
                <div className='px-4'>
                    <Link className='mx-2 py-1' to='/'>Home</Link>
                    <Link className='mx-2 py-1' to='/allprojects'>All Projects</Link>
                    <Link className='mx-2 py-1' to='/login'>Login</Link>
                </div>
            </div>

        </div>

    )
}


function PrivateNavbar() {
    return (
        <div className='bg-slate-100 text-slate-800 py-2 px-2'>

            <div className='flex justify-between'>
                <div>

                    <h1>OC Hub</h1>
                </div>
                <div className='px-4'>

                    <Link className='mx-2 py-1' to='/'>Home</Link>
                    <Link className='mx-2 py-1' to='/allprojects'>All Projects</Link>
                    <Link className='mx-2 py-1' to='/addproject'>Add Project</Link>
                    <Link className='mx-2 py-1' to='/myprojects'>My Projects</Link>
                    <Link className='mx-2 py-1' to='/userprofile'>User Profile</Link>
                    <Link className='p-1 bg-green-600 rounded-lg hover:bg-slate-100 hover:text-slate-800' to='/login' onClick={() => localStorage.removeItem('token')}>Logout</Link>
                </div>
            </div>

        </div>
    )

}

