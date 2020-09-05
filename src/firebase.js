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

// handles errors with custom messages
export function handleErr(err) {
  if (err.code === "not-found") {
    alert("Backend error: data not found");
  } else {
    alert(err);
  }
    //More cases
}

//returns the person's data by the id
export async function getUserById(userId) {
  var retDoc;
  await db.collection("Users").doc(userId).get().then(doc => {
    if (doc.exists) {
      console.log("getUserById returns Document data:", doc.data());
      retDoc = doc.data();
    } else {
      alert("No such document!");
    }
  }).catch(err => handleErr(err));
  return retDoc;
}
