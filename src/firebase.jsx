// import firebase from 'firebase/compat/app';
// import {getAuth} from 'firebase/compat/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
apiKey: `${import.meta.env.VITE_apiKey}`,
authDomain: `${import.meta.env.VITE_authDomain}`,
projectId: `${import.meta.env.VITE_projectId}`,
storageBucket: `${import.meta.env.VITE_storageBucket}`,
messagingSenderId: `${import.meta.env.VITE_messagingSenderId}`,
appId: `${import.meta.env.VITE_appId}`,
measurementId: `${import.meta.env.VITE_measurementId}`,
}

const firebaseApp = initializeApp(firebaseConfig);


// export const auth = getAuth();

export default firebaseApp;