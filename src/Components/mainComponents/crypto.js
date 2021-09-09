import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export const Crypto = ({ name, image, price, mkt, volume, priceChange }) => {
  return (
    <div className="coin">
      <div className="coinHeader">
        <img src={image} alt="logo" />
        <h2>{name}</h2>
      </div>

      <div className="coinBody">
        <div className="coinPrice">
          <h3>${price}</h3>
          <h4 className={priceChange < 0 ? "negPrice" : "posPrice"}>
            {priceChange}
            {priceChange < 0 ? (
              <FontAwesomeIcon icon={faCaretDown} />
            ) : (
              <FontAwesomeIcon icon={faCaretUp} />
            )}
          </h4>
        </div>
        <div className="coinDetails">
          <div>
            <h5>Volume</h5>
            <h3>${volume}</h3>
            <br />
            <h5>Market Cap</h5>
            <h3>${mkt}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
