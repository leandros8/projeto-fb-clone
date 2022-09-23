import firebase from 'firebase';

  const config = {
    //configurações da conta do firebase
  };

  const firebaseApp = firebase.initializeApp(config);


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};