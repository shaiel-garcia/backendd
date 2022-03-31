import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firebase";

const firebaseConfig = {

    apiKey: "AIzaSyDkumaUqyxCpyL-1Fwc784QRRMGrjm8Its",

    authDomain: "terra-natural.firebaseapp.com",

    projectId: "terra-natural",

    storageBucket: "terra-natural.appspot.com",

    messagingSenderId: "143582340519",

    appId: "1:143582340519:web:ac5c9f1bb6e5bbef6cc282",

    measurementId: "G-VENLHGRNE8"

};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;