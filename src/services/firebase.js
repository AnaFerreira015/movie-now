import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBWo6u6PGKkAZdd3LQD10wfKwxqYD4IjzE',
  authDomain: 'movie-now-ana.firebaseapp.com',
  projectId: 'movie-now-ana',
  storageBucket: 'movie-now-ana.appspot.com',
  messagingSenderId: '316227929193',
  appId: '1:316227929193:web:4397f3d5672d8640240ef8',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
