// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// import firebase from 'firebase/app';
import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';



const firebaseConfig = {
    // apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    // storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,

    apiKey: "AIzaSyC5ENtF1HdeS_-03UqXmbpAH95Cd2_dGOc",
    authDomain: "eplramailo-6c942.firebaseapp.com",
    projectId: "eplramailo-6c942",
    storageBucket: "eplramailo-6c942.appspot.com",
    messagingSenderId: "838999420857",
    appId: "1:838999420857:web:c98c95c54730f769571068"



  };

if(!firebase.apps.length){

  firebase.initializeApp(firebaseConfig);


}
  export default firebase;