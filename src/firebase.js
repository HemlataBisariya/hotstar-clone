import firebase from "firebase";

import "firebase/auth"; // Authentication
import "firebase/database"; // database use for like sql /mongodb 
import "firebase/storage"; //storage use for some vdo / img / pdf / fonts

const firebaseConfig = {
    apiKey: "AIzaSyBwWHy1EXMesxX1yMIxJrOYlCbPoynqcWs",
    authDomain: "hotstar-14935.firebaseapp.com",
    databaseURL: "https://hotstar-14935.firebaseio.com",
    projectId: "hotstar-14935",
    storageBucket: "hotstar-14935.appspot.com",
    messagingSenderId: "823364100750",
    appId: "1:823364100750:web:2b7d4c436da44f34fa9fdf"
  };

  //Initialize firebase and react application
  firebase.initializeApp(firebaseConfig);

  export default firebase;