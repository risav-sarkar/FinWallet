import { auth } from "./firebase/firebase";
import Firebase from "firebase";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase";

export const Account = () => {
  const database = Firebase.database();

  const history = useHistory();
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("User");
  const [editBtn, setEditBtn] = useState(0);
  const editName = useRef(name);

  const checkUser = auth.onAuthStateChanged((user) => {
    if (user) {
      setUserID(user.uid);
      setName(user.displayName);
    } else history.push("/signin");
  });
  checkUser();

  const handleRemove = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const dataRef = database.ref(userID).remove();
    history.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = firebase.auth().currentUser
    user.updateProfile({
      displayName : editName.current.value
    })
    .then(()=>{
      setName(user.displayName)
    })
    setEditBtn(0);
  };

  return (
    <main>
      <div className="mainContainer">
        <div className="headerAccounts">
          {editBtn === 0 ? (
            <h1>
              {`Hi ${name}`}
              <button
                className="editBtn"
                onClick={() => {
                  setEditBtn(1);
                }}
              >
                <FontAwesomeIcon icon={faPen} />
              </button>
            </h1>
          ) : (
            <h1>
              <form onSubmit={handleSubmit}>
                <input
                  className="accountInput"
                  type="text"
                  ref={editName}
                  placeholder={name}
                  required
                />
                <button className="editBtn" type="submit">
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                <button
                  className="editBtn"
                  onClick={() => {
                    setEditBtn(0);
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </form>
            </h1>
          )}
        </div>
        <div className="accountContainer">
          <div className="btnContainer">
            <button
              onClick={() => {
                history.push("/forgot");
              }}
            >
              Change Password
            </button>
            <button onClick={(e) => handleRemove(e)}>Reset All Data</button>
          </div>
        </div>
      </div>
    </main>
  );
};
