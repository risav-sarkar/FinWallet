import { useState } from "react";
import Crypto from "../financeComponents/crypto";
import Stocks from "../financeComponents/stocks";
import News from "../financeComponents/news";

const FinanceDashboard = () => {
  const [cryptoBtn, setCryptoBtn] = useState(1);
  const [stocksBtn, setStocksBtn] = useState(0);
  const [newsBtn, setNewsBtn] = useState(0);

  return (
    <div className="tabs">
      <div className="tabsContainer">
        <input type="radio" id="btn1" name="tab" />
        <label
          htmlFor="btn1"
          onClick={() => {
            setCryptoBtn(1);
            setStocksBtn(0);
            setNewsBtn(0);
          }}
        >
          Crypto
        </label>
        <input type="radio" id="btn2" name="tab" />
        <label
          htmlFor="btn2"
          onClick={() => {
            setCryptoBtn(0);
            setStocksBtn(1);
            setNewsBtn(0);
          }}
        >
          Stocks
        </label>
        <input type="radio" id="btn3" name="tab" />
        <label
          htmlFor="btn3"
          onClick={() => {
            setCryptoBtn(0);
            setStocksBtn(0);
            setNewsBtn(1);
          }}
        >
          News
        </label>
      </div>
      {cryptoBtn === 1 && stocksBtn === 0 && newsBtn === 0 ? (
        <Crypto />
      ) : cryptoBtn === 0 && stocksBtn === 1 && newsBtn === 0 ? (
        <Stocks />
      ) : (
        <News />
      )}
    </div>
  );
};

export default FinanceDashboard;
