import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1_VzqhXZZxd5t-iLvhYo604vuelys2rc",
  authDomain: "postu-dlya-dushu.firebaseapp.com",
  databaseURL:
    "https://postu-dlya-dushu-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "postu-dlya-dushu",
  storageBucket: "postu-dlya-dushu.appspot.com",
  messagingSenderId: "892960490028",
  appId: "1:892960490028:web:eea63173e0614fa09f8789",
  measurementId: "G-1XVLXJD3H1",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
