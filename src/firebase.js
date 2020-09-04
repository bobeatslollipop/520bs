import * as firebase from 'firebase';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBCusOm2FX8FhgYzZOjtWI8rS2nVzwGevc",
  authDomain: "bs-936a2.firebaseapp.com",
  databaseURL: "https://bs-936a2.firebaseio.com",
  projectId: "bs-936a2",
  storageBucket: "bs-936a2.appspot.com",
  messagingSenderId: "823117490524",
  appId: "1:823117490524:web:4993f8d167aa3f7a12b999",
  measurementId: "G-7M9E4R1Y9Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const Auth = firebase.auth();
Auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);