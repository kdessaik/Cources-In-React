// document.write("firebase from dessai Kibeho kambale")
// document.getElementsById('title').innerText=' '

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore , collection, getDocs,addDoc, updateDoc, deleteDoc
  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpEShbS2wprllcd9M2sEN4IzYV6YA8HxU",
  authDomain: "chatapp-3d2fd.firebaseapp.com",
  databaseURL: "https://chatapp-3d2fd-default-rtdb.firebaseio.com",
  projectId: "chatapp-3d2fd",
  storageBucket: "chatapp-3d2fd.appspot.com",
  messagingSenderId: "574669832152",
  appId: "1:574669832152:web:7b089ad76ee0d052ac7cad"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 //initialise service
 const db= getFirestore();
 //collection refs for a specific collection
const colRef = collection(db, 'books');
//get collection data
getDocs(colRef)  //RETURNS A PROMISE 
.then(snapshot => {
  //  console.log(snapshot.docs);
  let books  = [];
  snapshot.docs.forEach(doc => {
    books.push({...doc.data(), id: doc.id});
  });
  console.log(books);
})
.catch(err => console.log(err.message));


