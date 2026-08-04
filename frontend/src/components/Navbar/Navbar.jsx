import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearAuth } from '../../store/authSlice';
import logo from '../../assets/Logo/bg1.png';

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const token = localStorage.getItem('token') || user;

  return token ? <PrivateNavbar /> : <PublicNavbar />;
}

function PublicNavbar() {
  return (
    <div className="bg-blue-600 text-white py-2 px-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="logo" className="h-10 w-10" />
        <h1 className="text-2xl font-bold">Collab Connect</h1>
      </div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/allprojects">All Projects</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

function PrivateNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(clearAuth());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="bg-blue-600 text-slate-100 py-2 px-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="logo" className="h-10 w-10" />
        <h1 className="text-2xl font-bold">Collab Connect</h1>
      </div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/allprojects">All Projects</Link>
        <Link to="/addproject">Add Project</Link>
        <Link to="/myprojects">My Projects</Link>
        <Link to="/userprofile">User Profile</Link>
        <button className="p-1 bg-green-600 rounded-lg hover:bg-slate-100 hover:text-slate-800" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
