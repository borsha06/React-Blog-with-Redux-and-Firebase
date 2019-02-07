import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyBTQ60PCmlRUPoVUuJCXJSdBemj_tuugqQ",
    authDomain: "new-plan-project.firebaseapp.com",
    databaseURL: "https://new-plan-project.firebaseio.com",
    projectId: "new-plan-project",
    storageBucket: "new-plan-project.appspot.com",
    messagingSenderId: "108991491316"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase