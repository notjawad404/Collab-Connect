/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/compat/auth';
import PropTypes from 'prop-types';



const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_apiKey}`,
  authDomain: `${import.meta.env.VITE_authDomain}`,
  projectId: `${import.meta.env.VITE_projectId}`,
  storageBucket: `${import.meta.env.VITE_storageBucket}`,
  messagingSenderId: `${import.meta.env.VITE_messagingSenderId}`,
  appId: `${import.meta.env.VITE_appId}`,
  measurementId: `${import.meta.env.VITE_measurementId}`,
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => (
  <FirebaseContext.Provider value={{ firebaseApp, auth }}>
    {children}
  </FirebaseContext.Provider>
);

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};

// export const db = .firestore();

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
