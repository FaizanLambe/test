import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDMFiT6HKBAEvGV-AfaU3SL8Mc8z3R3nnM",
    authDomain: "clone-a3c85.firebaseapp.com",
    projectId: "clone-a3c85",
    storageBucket: "clone-a3c85.appspot.com",
    messagingSenderId: "903876011424",
    appId: "1:903876011424:web:8ea4c6531ba3b7e51070c5",
    measurementId: "G-7LBQ97KC1N"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };