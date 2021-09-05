import { useState } from "react";
import { Link } from "react-router-dom";

const History = () => {
  let data = [];
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("data"));

  if (dataFromLocalStorage) {
    data = dataFromLocalStorage;
  }
  // eslint-disable-next-line
  const [render, setRender] = useState([]);

  return (
    <main>
      <div className="mainContainer">
        <div className="historyContainer">
          <div className="listHeader">
            <h3>All History</h3>
            <Link to="/">
              <button>Back</button>
            </Link>
          </div>
          {data
            .slice(0)
            .reverse()
            .map((items) => {
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
                  <button
                    onClick={() => {
                      data.splice(id, 1);
                      let f = 0;
                      // eslint-disable-next-line
                      data.map((n) => {
                        n.id = f++;
                      });
                      localStorage.setItem("data", JSON.stringify(data));
                      setRender([]);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default History;
