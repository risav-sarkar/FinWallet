import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDknVAIzb1q0AfwR8Td02cWBks_wuNFvIU",
  authDomain: "wall-manager-56530.firebaseapp.com",
  databaseURL: "https://wall-manager-56530-default-rtdb.firebaseio.com",
  projectId: "wall-manager-56530",
  storageBucket: "wall-manager-56530.appspot.com",
  messagingSenderId: 74911556963,
  appId: "1:74911556963:web:754a946894f6360a2d5f56",
  measurementId: "G-WK7PSVJJZ7"
};
const myApp = firebase.initializeApp(firebaseConfig);
export const auth = myApp.auth();

export const db = firebase.database();

const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signinGoogle = () =>{
  auth.signInWithPopup(googleProvider)
  .then((res) =>{
    console.log(res.user)
  })
  .catch(function(error) {
    console.log(error.message)
    if (error.code==='auth/account-exists-with-different-credential'){
      var pendingCred = error.credential;
      var email = error.email;
      auth.fetchProvidersForEmail(email).then(function (methods) {
        if (methods[0] === 'password'){
          var password = prompt("Enter your password");
          auth.signInWithEmailAndPassword(email, password).then(function(result){
            return result.user.linkWithCredential(pendingCred);
          })
        }
      })
    }
  })
}
