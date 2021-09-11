import { Link } from "react-router-dom";
import Firebase from "firebase";
import { auth } from "../firebase/firebase";
import { useEffect, useState } from "react";

const PaymentList = () => {
  const database = Firebase.database();
  const [userdata, setUserdata] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        database.ref(user.uid).once("value", function (snapshot) {
          setUserdata(snapshot.val());
        });
      }
    });
    // eslint-disable-next-line
  }, []);

  let data = [];
  for (let key in userdata) {
    let obj = userdata[key];
    data.push(obj);
  }

  let arrTemp = [];
  let f = data.length - 1;
  while (f >= 0 && data.length - f <= 5) {
    arrTemp.push(data[f--]);
  }
  f = 0;

  return (
    <div className="listContainer">
      <div className="listHeader">
        <h3>Recent</h3>
        <Link to="/history">
          <button>View All</button>
        </Link>
      </div>
      {arrTemp.map((items) => {
        const { name, amount } = items;
        return (
          <div
            key={Object.keys(userdata)[f++]}
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
