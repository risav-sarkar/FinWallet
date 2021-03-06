import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Firebase from "firebase";
import { auth } from "./firebase/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const History = () => {
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
  });

  let f = 0;
  let data = [];
  for (let key in userdata) {
    let obj = userdata[key];
    data.push(obj);
    f++;
  }
  f -= 1;

  return (
    <main>
      <div className="mainContainer">
        <div className="historyContainer">
          <div className="listHeader">
            <h1>History</h1>
            <Link to="/">
              <button>Back</button>
            </Link>
          </div>
          {data
            .slice(0)
            .reverse()
            .map((items) => {
              const { name, amount } = items;
              let g = f;
              return (
                <div
                  key={Object.keys(userdata)[f--]}
                  className={`listItems ${
                    amount < 0 ? "expenseItems" : "incomeItems"
                  }`}
                >
                  <h1>{name}</h1>
                  <h4>₹ {Math.abs(amount)}</h4>
                  <button
                    onClick={() => {
                      auth.onAuthStateChanged((user) => {
                        if (user) {
                          database
                            .ref(user.uid)
                            .child(Object.keys(userdata)[g])
                            .remove();
                        }
                      });
                      setUserdata(userdata);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
};
