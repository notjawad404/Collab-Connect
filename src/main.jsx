// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { FirebaseProvider } from './components/context/authContext.jsx';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Home from './components/home';
import LoginPage from './components/authPages/LoginPage';
import RegisterPage from './components/authPages/Register';
import UserProfile from './components/userProfile.jsx';
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <FirebaseProvider>
    <RouterProvider router={router} />
  </FirebaseProvider>
);
