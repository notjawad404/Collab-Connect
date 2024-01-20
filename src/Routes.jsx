
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import App from './App.jsx';
import Home from './components/Public/home.jsx';
import LoginPage from './components/authPages/LoginPage';
import RegisterPage from './components/authPages/Register';
import UserProfile from './components/UserManagment/userProfile.jsx';
import ProtectedRoute from './components/authPages/ProtectedRoute.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/' element={<ProtectedRoute />}>
        <Route path='/userprofile' element={<UserProfile />} />
      </Route>
    </Route>
  )
);

export default function RouterApp() {
  return (
    <RouterProvider router={router}/>
  )
}
