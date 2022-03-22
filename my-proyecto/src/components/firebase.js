import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAB96rCc7AFEERDdfcDsTfJgP7mPr85WkM",
    authDomain: "tienda-react-388e2.firebaseapp.com",
    projectId: "tienda-react-388e2",
    storageBucket: "tienda-react-388e2.appspot.com",
    messagingSenderId: "704091131909",
    appId: "1:704091131909:web:57d96c9292881c70a24c6c"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);