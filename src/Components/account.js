import Header from "./mainComponents/header.js";
import { auth } from "./firebase/firebase";
import Firebase from "firebase";
import { useState } from "react";
import { useHistory } from "react-router-dom";


export const Account = () => {

  const database = Firebase.database();

  const history = useHistory();
  const [userID, setUserID] = useState("");
  const checkUser = auth.onAuthStateChanged((user) => {
    if (user) {
      setUserID(user.uid);
    }
    else
      history.push('/signin')
  });
  checkUser();

  const handleRemove = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const dataRef = database.ref(userID).remove();
    history.push('/')
  }
  return (
    <main>
      <div className="mainContainer">
        <Header />
        <div className="accountContainer">
          <div className="btnContainer">
            <button onClick={()=>{history.push('/forgot')}}>Change Password</button>
            <button onClick={(e)=>handleRemove(e)}>Reset All Data</button>
          </div>
        </div>
      </div>
    </main>
  );
};
