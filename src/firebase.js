import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAVEu2IDykNPN_cRxYHjL6Z8lJUQ4lkGn4",
    authDomain: "contactform-b1603.firebaseapp.com",
    databaseURL: "https://contactform-b1603.firebaseio.com",
    projectId: "contactform-b1603",
    storageBucket: "contactform-b1603.appspot.com",
    messagingSenderId: "591116124209"
  };
firebase.initializeApp(config);
export default firebase;