import  firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyCfe57I3nWjEW0tMdFl8uIuTxjJWpwvN84",
    authDomain: "charity-151.firebaseapp.com",
    databaseURL: "https://charity-151.firebaseio.com",
    projectId: "charity-151",
    storageBucket: "charity-151.appspot.com",
    messagingSenderId: "657758874862",
    appId: "1:657758874862:web:68d4ecb39a012775cc97ff",
    measurementId: "G-Q4YEE82LNB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

firebase.firestore().settings({timestampInSnapshots: true})

export default firebase;