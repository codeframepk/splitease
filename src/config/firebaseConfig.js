import firebase from 'firebase/app'
require("firebase/firestore");
require("firebase/auth")

let firebaseConfig = {

};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth}
