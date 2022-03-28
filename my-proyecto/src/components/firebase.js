import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

    apiKey: "AIzaSyAcJVsfVu11heQe87I-gjHAWJRSe_XEths",

    authDomain: "garcia-f9ea3.firebaseapp.com",

    projectId: "garcia-f9ea3",

    storageBucket: "garcia-f9ea3.appspot.com",

    messagingSenderId: "797726499863",

    appId: "1:797726499863:web:1a0544ae49d89e1cb8e852",

    measurementId: "G-WMTTE6117S"

};



const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);