import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBVx6mWF_offxNWrD6W8A9cHC6LJnyl5gg",
    authDomain: "todolist-8e65d.firebaseapp.com",
    projectId: "todolist-8e65d",
    storageBucket: "todolist-8e65d.appspot.com",
    messagingSenderId: "126200699545",
    appId: "1:126200699545:web:42fa6209b5307240373608"
}

if(!firebase.apps.length ===0){
    firebase = firebase.initializeApp(firebaseConfig);
}

export default firebase;