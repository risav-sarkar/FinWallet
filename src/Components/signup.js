import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "./firebase/AuthContext";
import React, { useRef, useState } from "react";

export const Signup = () => {
  let Stylesheet = {
    color: "red",
    fontSize: "13px",
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const pass = useRef("");
  const confirmpass = useRef("");
  const mail = useRef("");
  const userid = useRef("");

  const { signup } = useAuth();
  const history = useHistory();

  const [warnmessage, setwarnmessage] = useState("");

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
        history.push("/");
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
