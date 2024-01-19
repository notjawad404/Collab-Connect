import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
apiKey: `${import.meta.env.VITE_apiKey}`,
authDomain: `${import.meta.env.VITE_authDomain}`,
projectId: `${import.meta.env.VITE_projectId}`,
storageBucket: `${import.meta.env.VITE_storageBucket}`,
messagingSenderId: `${import.meta.env.VITE_messagingSenderId}`,
appId: `${import.meta.env.VITE_appId}`,
measurementId: `${import.meta.env.VITE_measurementId}`,
})


export const auth = firebaseApp.auth();

export default firebaseApp;