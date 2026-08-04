import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../store/authSlice';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuth({ user: { email }, session: { access_token: 'dummy-token' } }));
    localStorage.setItem('token', 'dummy-token');
    localStorage.setItem('user', email);
    navigate('/');
  };

  return (
    <div className="bg-slate-800 h-screen text-slate-100 py-32 flex flex-col items-center justify-center">
      <p className="text-center py-5 text-2xl font-bold">Login</p>
      <form onSubmit={handleSubmit} className="flex flex-col w-[300px]">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="text-slate-800 my-2 p-2 rounded-lg"
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="text-slate-800 my-2 p-2 rounded-lg"
        />
        <input
          type="submit"
          value="Login"
          className="bg-red-600 hover:bg-red-700 text-slate-100 my-4 p-2 rounded-lg cursor-pointer font-bold"
        />
      </form>
      <div className="flex flex-row items-center mt-4 space-x-2">
        <p>Don't have an account?</p>
        <button className="bg-blue-600 px-4 py-1 rounded-lg" onClick={() => navigate('/register')}>
          Register
        </button>
      </div>
    </div>
  );
}
