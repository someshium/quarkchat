import firebase from "firebase";




const firebaseConfig = {
  apiKey: "AIzaSyDX1yZXYq2IUnQz2iEcI6ERBNjLbD-2YzY",
  authDomain: "quarkchats.firebaseapp.com",
  projectId: "quarkchats",
  storageBucket: "quarkchats.appspot.com",
  messagingSenderId: "710709264077",
  appId: "1:710709264077:web:31edeae7e7a7ceaac13384",
  measurementId: "G-34VLNCP8FW"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth  = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;
 

