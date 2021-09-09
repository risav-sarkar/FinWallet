import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDr7UEGfffcjrDnS9ky4wS1aYJLaOfqt3U",
  authDomain: "wallet-manager-33200.firebaseapp.com",
  projectId: "wallet-manager-33200",
  storageBucket: "wallet-manager-33200.appspot.com",
  messagingSenderId: 216475441508,
  appId: "1:216475441508:web:ff8e659aff17526b114271",
  measurementId: "G-LY2NX1HF4H",
};
const myApp = firebase.initializeApp(firebaseConfig);
export const auth = myApp.auth();

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
