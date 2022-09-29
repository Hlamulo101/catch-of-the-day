import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDaeCO1PR2OWH_Q6O5Rd9s56tPzDiNsnno",
    authDomain: "catch-of-the-dat-d951d.firebaseapp.com",
    appId: "1:770649292820:web:acedca263ff8af5c5d6701",
    projectId: "catch-of-the-dat-d951d",
    databaseURL:"https://catch-of-the-dat-d951d-default-rtdb.asia-southeast1.firebasedatabase.app"
   
});

const base=Rebase.createClass(firebaseApp.database());

export {firebaseApp}

export default base;