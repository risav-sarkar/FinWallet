import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "./firebase/AuthContext";
import React, { useRef, useState } from "react";
import { auth } from "./firebase/firebase";
import Firebase from "firebase";

export const Signup = () => {
  
  let Stylesheet = {
    color: "red",
    fontSize: "13px",
  };

  const history = useHistory();
  const checkUser = auth.onAuthStateChanged((user) => {
    if (user) {
      history.push('/')
    }
  });
  checkUser();
  
  const [loading, setLoading] = useState(false);
  const [human,setHuman] = useState(false);
  const [error, setError] = useState("");

  const pass = useRef("");
  const confirmpass = useRef("");
  const mail = useRef("");
  const userid = useRef("");

  const { signup } = useAuth();
  const { signout } = useAuth();

  const [warnmessage, setwarnmessage] = useState("");


  setTimeout(function() {
    const recaptchaVerifier = new Firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'theme':'dark',
        'callback': function(response) {
            recaptchaVerifier.verify().then(function(token){
              console.log(response);
              if(token===response)
                setHuman(true)
            })
        },
        'expired-callback': function() {
            console.log("expired-callback");
            setHuman(false)
        }
    });

    recaptchaVerifier.render()
  },2000);


  const handleSignup = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const email = mail.current.value;
    const password = pass.current.value;
    const fullName = userid.current.value;
    signup(email, password, fullName)
      .then((ref) => {
        setLoading(false);
        signout();
        history.push("/signin");
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const Check = (e) => {
    if (
      pass.current.value === "" ||
      confirmpass.current.value === "" ||
      mail.current.value === "" ||
      userid.current.value === ""
    ) {
      setwarnmessage("All fields are *mandatory");
    } else {
      if (userid.current.value.length < 4) {
        setwarnmessage("Username should not less than 4 characters");
      } else {
        if (pass.current.value.length < 8) {
          setwarnmessage("Password should be atleast 8 characters");
        } else{
          if(!human){
            setwarnmessage("Please verify that you are a human")
          } else {
            if (pass.current.value === confirmpass.current.value) {
              console.log("password accepted");
              handleSignup(e);
              pass.current.value = "";
              userid.current.value = "";
              confirmpass.current.value = "";
              mail.current.value = "";
              setwarnmessage("");
            } else {
              setwarnmessage("Passwords must match");
            }
          }
        }
      }
    }
  };

  let btn2 = "Sign Up";

  return (
    <main>
      <div className="mainContainer">
        <div className="signinContainer">
          <div className="signinHeader">
            <h1>{btn2}</h1>
            <p className="Credentials1">Username</p>
            <input
              type="text"
              size="35"
              required
              minLength="4"
              className="datainputs alpha"
              onChange={(e) => e.target.value}
              ref={userid}
            />

            <p className="Credentials1">Email</p>
            <input
              type="email"
              size="35"
              required
              className="datainputs alpha"
              onChange={(e) => e.target.value}
              ref={mail}
            />

            <p className="Credentials2" minlength="8">
              Password
            </p>
            <input
              type="password"
              size="35"
              required
              minlength="8"
              className="datainputs alpha"
              onChange={(e) => e.target.value}
              ref={pass}
            />

            <p className="Credentials2">Confirm Password</p>
            <input
              type="password"
              size="35"
              className="datainputs alpha"
              onChange={(e) => e.target.value}
              ref={confirmpass}
            />
          </div>
          <div id={'recaptcha-container'}></div>
          <p className="warnimess" style={Stylesheet}>
            {warnmessage}
          </p>
          <p className="warnimess" style={Stylesheet}>
            {error}
          </p>
          <button
            className="signinBtn"
            disabled={loading}
            type="submit"
            onClick={(e) => Check(e)}
          >
            {btn2}
          </button>
          <p className="signup">
            Already have an account?{" "}
            <Link className="linksign" to="/signin">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};
