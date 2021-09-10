import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./mainComponents/dashboard.js";
import PaymentList from "./mainComponents/paymentList.js";
import Header from "./mainComponents/header.js";
import { auth } from "./firebase/firebase";
import { useAuth } from "./firebase/AuthContext";
import { useHistory } from "react-router-dom";
import Firebase from 'firebase'

export const Home = () => {


  const database = Firebase.database();

  const [userCheck, setUserCheck] = useState(0);
  const [userID, setUserID] = useState('')
  const checkUser = auth.onAuthStateChanged((user) => {
    if (user) {
      setUserCheck(1);
      setUserID(user.uid)
    }
  });
  checkUser();

  let data = [];
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("data"));

  if (dataFromLocalStorage) {
    data = dataFromLocalStorage;
  }
  console.log(data);

  const [addBtn, setAddBtn] = useState(0);
  const [delBtn, setDelBtn] = useState(0);
  const [menuBtn, setMenuBtn] = useState(0);
  // const [objLen, setObjLen] = useState(0);

  const name = useRef("");
  const amount = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(parseInt(amount.current.value) > 0 && userCheck===1){
      const dataRef = database.ref(userID).push();
      
      dataRef.set({
        userID,
        name: name.current.value,
        amount:
          addBtn === 1
            ? parseInt(amount.current.value)
            : parseInt(amount.current.value) * -1,
        // id: objLen,
        month: new Date().getMonth(),
      })
      history.push(`/account`);
    }
    else{
      if(parseInt(amount.current.value) > 0){
        data.push({
          name: name.current.value,
          amount:
            addBtn === 1
              ? parseInt(amount.current.value)
              : parseInt(amount.current.value) * -1,
          id: data.length,
          month: new Date().getMonth(),
        });
  
        localStorage.setItem("data", JSON.stringify(data));
        setAddBtn(0);
        setDelBtn(0);
      }
      else
        alert("Enter Correct Name and Amount!");
    }
  } 

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (parseInt(amount.current.value) > 0 && userCheck===1) {
  //     data.push({
  //       name: name.current.value,
  //       amount:
  //         addBtn === 1
  //           ? parseInt(amount.current.value)
  //           : parseInt(amount.current.value) * -1,
  //       id: data.length,
  //       month: new Date().getMonth(),
  //     });

  //     localStorage.setItem("data", JSON.stringify(data));
  //     setAddBtn(0);
  //     setDelBtn(0);
  //   }
 
  //   else 
  //     alert("Enter Correct Name and Amount!");
  // };

  const history = useHistory();
  const { signout } = useAuth();
  const handleSignout = () => {
    signout();
    history.push("/signin");
  };

  return (
    <main>
      <div className="mainContainer">
        {addBtn === 1 || delBtn === 1 ? (
          <form onSubmit={handleSubmit}>
            <div className="inputFields">
              <div className="styled-input">
                <p>Name</p>
                <input type="text" ref={name} required />
              </div>
              <div className="styled-input">
                <p>Amount</p>
                <input type="number" ref={amount} required />
              </div>
            </div>
            <div className="btnContainer">
              <button className="submitBtn" type="submit">
                Submit
              </button>
              <button
                className="cancelBtn"
                onClick={() => {
                  setAddBtn(0);
                  setDelBtn(0);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="menuContainer">
              <button
                onClick={() => {
                  menuBtn === 1 ? setMenuBtn(0) : setMenuBtn(1);
                }}
                className="menu"
              >
                <div className="menuLines"></div>
                <div className="menuLines"></div>
                <div className="menuLines"></div>
              </button>
              {menuBtn === 1 ? (
                <div className="menuContent">
                  <Link to="/investment">
                    <button className="investBtn">Investment</button>
                  </Link>
                  {userCheck === 0 ? (
                    <Link to="/signin">
                      <button className="investBtn">Sign In</button>
                    </Link>
                  ) : (
                    <>
                      <Link to="/account">
                        <button className="investBtn">Accounts</button>
                      </Link>
                      <Link to="/signin">
                        <button
                          className="investBtn"
                          onClick={() => {
                            handleSignout();
                          }}
                        >
                          Logout
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              ) : null}
            </div>
            <Header />
            <Dashboard />
            <PaymentList />
            <div className="btnContainer">
              <button
                className="addBtn"
                onClick={() => {
                  setAddBtn(1);
                }}
              >
                Add Income
              </button>
              <button
                className="delBtn"
                onClick={() => {
                  setDelBtn(1);
                }}
              >
                Add Expense
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};
