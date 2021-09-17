import Firebase from "firebase";
import { useEffect, useState } from "react";
import StockDisplay from "./stockDisplay";

const Stocks = () => {
  const database = Firebase.database();
  const [bse, setBse] = useState({});
  const [nse, setNse] = useState({});
  const [bsebtn, setBsebtn] = useState(1);
  const [nsebtn, setNsebtn] = useState(0);
  let bseArr = [];
  let nseArr = [];

  useEffect(() => {
    database.ref("bse").once("value", function (snapshot) {
      setBse(snapshot.val());
    });
    database.ref("nse").once("value", function (snapshot) {
      setNse(snapshot.val());
    });
  }, [database]);

  if (Object.keys(bse).length && Object.keys(nse).length) {
    for (let i = 0; i < 10; i++) {
      bseArr.push({
        id: "bse" + i,
        name: bse.name[i],
        rupeeChange: bse.RupeeChange[i],
        percentChange: bse.percentChange[i],
        prevClose: bse.prev_close[i],
        close: bse.close[i],
        volume: bse.volume[i],
      });
      nseArr.push({
        id: "nse" + i,
        name: nse.name[i],
        rupeeChange: nse.RupeeChange[i],
        percentChange: nse.percentChange[i],
        prevClose: nse.prev_close[i],
        close: nse.close[i],
        volume: nse.volume[i],
      });
    }

    return (
      <div className="stocksMain">
        <div className="tabs">
          <div className="tabsContainer">
            <input type="radio" id="btn1" name="tab" />
            <label
              htmlFor="btn1"
              onClick={() => {
                setBsebtn(1);
                setNsebtn(0);
              }}
            >
              BSE
            </label>
            <input type="radio" id="btn2" name="tab" />
            <label
              htmlFor="btn2"
              onClick={() => {
                setBsebtn(0);
                setNsebtn(1);
              }}
            >
              NSE
            </label>
          </div>
        </div>
        {bsebtn === 1 && nsebtn === 0 ? (
          <div className="stocksContainer">
            <h1>Top 10 BSE Gainers</h1>
            {bseArr.map((stock) => {
              return (
                <StockDisplay
                  key={stock.id}
                  name={stock.name}
                  rupeeChange={stock.rupeeChange}
                  percentChange={stock.percentChange}
                  prevClose={stock.prevClose}
                  close={stock.close}
                  volume={stock.volume}
                />
              );
            })}
          </div>
        ) : (
          <div className="stocksContainer">
            <h1>Top 10 NSE Gainers</h1>
            {nseArr.map((stock) => {
              return (
                <StockDisplay
                  key={stock.id}
                  name={stock.name}
                  rupeeChange={stock.rupeeChange}
                  percentChange={stock.percentChange}
                  prevClose={stock.prevClose}
                  close={stock.close}
                  volume={stock.volume}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  } else return <h1>h1</h1>;
};
export default Stocks;
