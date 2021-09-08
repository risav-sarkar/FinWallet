import { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./mainComponents/dashboard.js";
import PaymentList from "./mainComponents/paymentList.js";
import Header from "./mainComponents/header.js";

export const Home = () => {
  let data = [];
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("data"));

  if (dataFromLocalStorage) {
    data = dataFromLocalStorage;
  }
  console.log(data);

  const [addBtn, setAddBtn] = useState(0);
  const [delBtn, setDelBtn] = useState(0);
  const [menuBtn, setMenuBtn] = useState(0);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && amount > 0) {
      data.push({
        name: name,
        amount: addBtn === 1 ? parseInt(amount) : parseInt(amount) * -1,
        id: data.length,
        month: new Date().getMonth(),
      });

      localStorage.setItem("data", JSON.stringify(data));
      setAddBtn(0);
      setDelBtn(0);
    } else alert("Enter Correct Name and Amount!");
  };

  return (
    <main>
      <div className="mainContainer">
        {addBtn === 1 || delBtn === 1 ? (
          <form onSubmit={handleSubmit}>
            <div className="inputFields">
              <div className="styled-input">
                <p>Name</p>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="styled-input">
                <p>Amount</p>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
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
                    <button
                      className="investBtn"
                      onClick={() => {
                        setMenuBtn(0);
                      }}
                    >
                      Investment
                    </button>
                  </Link>
                  <Link to="/account">
                    <button
                      className="investBtn"
                      onClick={() => {
                        setMenuBtn(0);
                      }}
                    >
                      Account
                    </button>
                  </Link>
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
