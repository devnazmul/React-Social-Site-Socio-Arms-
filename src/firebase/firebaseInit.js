// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './firebase.config.js'

const appInit = () => {
    initializeApp(firebaseConfig);
} 
const analytics = getAnalytics(initializeApp(firebaseConfig));

export {appInit, analytics};

