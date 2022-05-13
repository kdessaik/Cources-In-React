

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDpEShbS2wprllcd9M2sEN4IzYV6YA8HxU",
authDomain: "chatapp-3d2fd.firebaseapp.com",
projectId: "chatapp-3d2fd",
storageBucket: "chatapp-3d2fd.appspot.com",
messagingSenderId: "574669832152",
appId: "1:574669832152:web:7b089ad76ee0d052ac7cad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var db=firebase.firestore

db.collection('messages')
	.add({
		name: 'John Doe',
		message: 'Hello world!' 
	})
	.then(function (docRef) {
		console.log(`Document written with ID: ${docRef.id}`);
	})
	.catch(function (error) {
		console.error(`Error adding document: ${error}`);
	});

if (!localStorage.getItem('name')) {
	name = prompt('What is your name?')
	localStorage.setItem('name', name)
} else {
	name = localStorage.getItem('name')
}
document.querySelector('#name').innerText = name

document.querySelector('#change-name').addEventListener('click', () => {
	name = prompt('What is your name?')
	localStorage.setItem('name', name)
	document.querySelector('#name').innerText = name
})

