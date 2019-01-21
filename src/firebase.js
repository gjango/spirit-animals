import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDddQYH61Pd0Fc2XlY6XURaCpwCZUROXoY",
    authDomain: "social-animals-b4441.firebaseapp.com",
    databaseURL: "https://social-animals-b4441.firebaseio.com",
    projectId: "social-animals-b4441",
    storageBucket: "social-animals-b4441.appspot.com",
    messagingSenderId: "968611177297"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
