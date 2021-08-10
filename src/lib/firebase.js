// import {seedDatabase} from '../seed'

const config = {
    apiKey: "AIzaSyAdFuL4b-Z6wqnLReOvQJzI-Q4otNL6CvA",
    authDomain: "instagram-clone-pm.firebaseapp.com",
    projectId: "instagram-clone-pm",
    storageBucket: "instagram-clone-pm.appspot.com",
    messagingSenderId: "80775383714",
    appId: "1:80775383714:web:10083b4abf66ef07aba5fb"
  };

  const firebase = window.firebase.initializeApp(config);
  const {FieldValue} = window.firebase.firestore;


//   seedDatabase(firebase);

  export { firebase, FieldValue };