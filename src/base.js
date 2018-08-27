import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyDyN1TN1UaXTsFWyz1BfEm0tU83iFpaSFg",
        authDomain: "catch-of-the-day-joshs.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-joshs.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;