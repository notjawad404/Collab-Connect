import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RouterApp from './Routes.jsx'
import { FirebaseProvider } from './components/context/authContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <FirebaseProvider>
    <RouterApp/>

  </FirebaseProvider>
  </React.StrictMode>,
)
