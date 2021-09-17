import Firebase from "firebase";
import { useEffect, useState } from "react";
import StockDisplay from "./stockDisplay";

const Stocks = () => {
  const database = Firebase.database();
  const [bse, setBse] = useState({});
  const [nse, setNse] = useState({});
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

    console.log(bseArr);
    console.log(nseArr);

    return (
      <>
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
      </>
    );
  } else return <h1>h1</h1>;
};
export default Stocks;
