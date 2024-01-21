
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import App from '../../App.jsx';
import Home from '../Public/home.jsx';
import LoginPage from '../authPages/LoginPage.jsx';
import RegisterPage from '../authPages/Register.jsx';
import UserProfile from '../UserManagment/userProfile.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import AddProjectspage from '../projectManagment/AddProject.jsx';
import MyProjectsList from '../projectManagment/MyProjectsList.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/' element={<ProtectedRoute />}>
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/addproject' element={<AddProjectspage/>} />
        <Route path='/myprojects' element={<MyProjectsList/>} />
      </Route>
    </Route>
  )
);

export default function RouterApp() {
  return (
    <RouterProvider router={router}/>
  )
}
