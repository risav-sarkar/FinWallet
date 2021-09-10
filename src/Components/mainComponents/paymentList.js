import { Link } from "react-router-dom";
import Firebase from 'firebase'
import { auth } from "../firebase/firebase";
import { useState } from "react";

const PaymentList = () => {

  const database = Firebase.database();
  // eslint-disable-next-line
  const [userCheck, setUserCheck] = useState(0);
  const checkUser = auth.onAuthStateChanged((user) => {
    if (user) {
      setUserCheck(1);
      const dataRef = database.ref(user.uid)
      dataRef.on("value", function(snapshot) {
        console.log(snapshot.val())
        }, function (error) {
            console.log("Error: " + error.code);
          });
    }
  });
  checkUser();

  let data = [];
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("data"));

  if (dataFromLocalStorage) {
    data = dataFromLocalStorage;
  }

  let arrTemp = [];
  let f = data.length - 1;
  while (f >= 0 && data.length - f <= 5) {
    arrTemp.push(data[f--]);
  }

  return (
    <div className="listContainer">
      <div className="listHeader">
        <h3>Recent</h3>
        <Link to="/history">
          <button>View All</button>
        </Link>
      </div>

      {arrTemp.map((items) => {
        const { name, amount, id } = items;
        return (
          <div
            key={id}
            className={
              "listItems " + (amount < 0 ? "expenseItems" : "incomeItems")
            }
          >
            <h1>{name}</h1>
            <h4>₹ {Math.abs(amount)}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default PaymentList;
