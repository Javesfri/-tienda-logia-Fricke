import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDLoyrJHpmO1MQoelH_-nXN0mCeBjFeq4",
  authDomain: "tienda-logia.firebaseapp.com",
  projectId: "tienda-logia",
  storageBucket: "tienda-logia.appspot.com",
  messagingSenderId: "103086535140",
  appId: "1:103086535140:web:879c195627fc954766d7f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


