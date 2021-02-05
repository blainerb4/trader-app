import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD5oWbx1PSTFKoRutQvzGRNUzYcepH1xtk",
    authDomain: "trader-app-35e95.firebaseapp.com",
    projectId: "trader-app-35e95",
    storageBucket: "trader-app-35e95.appspot.com",
    messagingSenderId: "960623223786",
    appId: "1:960623223786:web:f53b51a092db7c6505c893"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
  
export { db };