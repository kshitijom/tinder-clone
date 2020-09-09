import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAK7HTgRNavOWoQW57Gi0TuXSGE-QI4GsA",
  authDomain: "tinder-clone-287c7.firebaseapp.com",
  databaseURL: "https://tinder-clone-287c7.firebaseio.com",
  projectId: "tinder-clone-287c7",
  storageBucket: "tinder-clone-287c7.appspot.com",
  messagingSenderId: "118466303007",
  appId: "1:118466303007:web:93e4aecf94aa73017c712a",
  measurementId: "G-DKV6CW33DS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;