import firebase from "firebase"; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoJuIM6dhFOTEACx-fjE36SCbESus7LnM",
    authDomain: "eshop-4f082.firebaseapp.com",
    databaseURL: "https://eshop-4f082.firebaseio.com",
    projectId: "eshop-4f082",
    storageBucket: "eshop-4f082.appspot.com",
    messagingSenderId: "489497509112",
    appId: "1:489497509112:web:799b8cb7af001d34508f0d",
    measurementId: "G-VCZQTNPCK6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};