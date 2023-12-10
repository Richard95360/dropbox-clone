import {getApp,getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/*const firebaseConfig = {
    apiKey: "AIzaSyCMbHAT2MnIDOsAbeBvViXDxXi_mCDN05Y",
    authDomain: "dropbox-clone-7a286.firebaseapp.com",
    projectId: "dropbox-clone-7a286",
    storageBucket: "dropbox-clone-7a286.appspot.com",
    messagingSenderId: "540886569714",
    appId: "1:540886569714:web:5335710e02987b7677366b",
    measurementId: "G-JN824V510B"
  
  };*/

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
  
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {db , storage}