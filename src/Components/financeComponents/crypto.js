import { useState, useEffect } from "react";
import axios from "axios";
import CryptoDisplay from "./cryptoDisplay";

const Crypto = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function round(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }

  function convertToInternationalCurrencySystem(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
      : Math.abs(Number(labelValue));
  }

  if (coins) {
    return (
      <div className="coinContainer">
        {coins.map((coin) => {
          return (
            <CryptoDisplay
              key={coin.id}
              name={coin.name}
              image={coin.image}
              price={round(coin.current_price)}
              volume={convertToInternationalCurrencySystem(coin.total_volume)}
              priceChange={round(coin.price_change_percentage_24h)}
              mkt={convertToInternationalCurrencySystem(coin.market_cap)}
            />
          );
        })}
      </div>
    );
  } else
    return (
      <div className="coinContainer">
        <h1>No Data</h1>
      </div>
    );
};

export default Crypto;
