import {getApp,getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
apiKey: "AIzaSyCMbHAT2MnIDOsAbeBvViXDxXi_mCDN05Y",
authDomain: "dropbox-clone-7a286.firebaseapp.com",
projectId: "dropbox-clone-7a286",
storageBucket: "dropbox-clone-7a286.appspot.com",
messagingSenderId: "540886569714",
appId: "1:540886569714:web:5335710e02987b7677366b",
measurementId: "G-JN824V510B"
};

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {db , storage}