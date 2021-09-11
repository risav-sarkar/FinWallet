import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import { useAuth } from "./firebase/AuthContext";
import { auth } from "./firebase/firebase";

export const Forgotpass = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { passwordReset } = useAuth();

  const mailpass = useRef("");
  // eslint-disable-next-line
  const [warnmess2, setwarnmess2] = useState("");

  let fstyle = {
    color: "red",
    fontSize: "13px",
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    const email = mailpass.current.value;
    passwordReset(email)
      .then((msg) => {
        setMessage(msg);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const Fbtn = (e) => {
    if (mailpass.current.value === "") {
      setwarnmess2("Please enter the email");
      mailpass.current.value = "";
    } else handlePasswordReset(e);
  };

  const [btn3,setBtn3] = useState("Forgot Password");
  const checkUser = auth.onAuthStateChanged((user) => {
    if (user) {
      setBtn3('Reset Password')
    }
  });
  checkUser();

  return (
    <main>
      <div className="mainContainer">
        <div className="signinContainer">
          <div className="signinHeader">
            <h1>{btn3}</h1>

            <p className="Credentials1">Enter you email</p>
            <input
              type="email"
              size="35"
              className="datainputs"
              onChange={(e) => e.target.value}
              ref={mailpass}
            />
          </div>
          <p className="warnimess" style={fstyle}>
            {error}
          </p>
          <p className="success">{message}</p>
          <button
            disabled={loading}
            type="submit"
            onClick={(e) => Fbtn(e)}
            className="signinBtn"
          >
            Next
          </button>
          <p className="signup">
            <Link className="linksign" to="/">
              Back
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};
