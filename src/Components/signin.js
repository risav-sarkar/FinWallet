import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "./firebase/AuthContext";
import google from "../image/google.png";
import React, { useRef, useState } from "react";
import { signinGoogle, auth } from "./firebase/firebase";

export const Signin = () => {
  const checkUser = auth.onAuthStateChanged((user) => {
    if (user) {
      history.push("/");
    }
  });
  checkUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const userid1 = useRef("");
  const pass1 = useRef("");

  const { signin } = useAuth();
  const history = useHistory();
  // eslint-disable-next-line
  const [warnmess1, setwarnmess1] = useState("");

  let Stylesheet1 = {
    color: "red",
    fontSize: "13px",
  };

  const handleSignin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const email = userid1.current.value;
    const password = pass1.current.value;
    signin(email, password)
      .then((ref) => {
        setLoading(false);
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const checksign = (e) => {
    if (pass1.current.value === "" || userid1.current.value === "") {
      setwarnmess1("Both fields are mandatory");
      pass1.current.value = "";
      userid1.current.value = "";
    } else handleSignin(e);
  };

  let btn1 = "Sign In";

  return (
    <main>
      <div className="mainContainer">
        <div className="signinContainer">
          <div className="signinHeader">
            <h1>{btn1}</h1>
            <p>Email</p>
            <input type="email" size="35" ref={userid1} />
            <p>Password</p>
            <input type="password" size="35" ref={pass1} />
          </div>
          <p className="warnimess" style={Stylesheet1}>
            {error}
          </p>
          <button
            disabled={loading}
            type="submit"
            onClick={(e) => checksign(e)}
            className="signinBtn"
          >
            {btn1}
          </button>

          <p className="signup">
            Don't have an account?{" "}
            <Link className="linksign" to="/signup">
              Sign up
            </Link>
          </p>

          <div className="forgetpass">
            <Link to="/forgot">Forgot password?</Link>
          </div>
          <div className="googlecont">
            <button
              className="googlebtn"
              disabled={loading}
              onClick={signinGoogle}
            >
              {" "}
              <img
                src={google}
                alt=""
                width="25px"
                className="googleimg"
              />{" "}
              <p className="loginwithg">Continue With Google</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
