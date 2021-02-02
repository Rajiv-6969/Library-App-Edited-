import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAXbWw5BOXaKkKEO0EJcoy8RRPRF2BRUdQ",
  authDomain: "library-app-d26cb.firebaseapp.com",
  databaseURL: "https://library-app-d26cb-default-rtdb.firebaseio.com",
  projectId: "library-app-d26cb",
  storageBucket: "library-app-d26cb.appspot.com",
  messagingSenderId: "750016403822",
  appId: "1:750016403822:web:12f11cafa97c531436c97f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
