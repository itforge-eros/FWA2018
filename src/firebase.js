import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAUzD_S42CyRKZ0kmWyBFTRglhr_Xs6giY',
  authDomain: 'freshy-app2018.firebaseapp.com',
  databaseURL: 'https://freshy-app2018.firebaseio.com',
  projectId: 'freshy-app2018',
  storageBucket: 'freshy-app2018.appspot.com',
  messagingSenderId: '1022334144149'
};

firebase.initializeApp(config);

export default firebase;
export const provider = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export const db = firebase.firestore().settings({ timestampsInSnapshots: true });
