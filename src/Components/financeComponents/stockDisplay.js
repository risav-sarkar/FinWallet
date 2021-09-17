import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const StockDisplay = ({
  name,
  rupeeChange,
  percentChange,
  prevClose,
  volume,
  close,
}) => {
  return (
    <div className="stock">
      <div className="stockHeader">
        <h1>{name}</h1>
        <div className="priceChange">
          <p>
            <FontAwesomeIcon icon={faCaretUp} />
            {` ₹${rupeeChange}`}
          </p>
          <p className="percent">
            <FontAwesomeIcon icon={faCaretUp} />
            {` ${percentChange}%`}
          </p>
        </div>
      </div>
      <div className="details">
        <div className="close">
          <div>
            <p>Close</p>
            <p>₹{close}</p>
          </div>
          <div>
            <p>Prev Close</p>
            <p>₹{prevClose}</p>
          </div>
        </div>
        <div className="volume">
          <p>Volume('000s)</p>
          <p>{volume}</p>
        </div>
      </div>
    </div>
  );
};

export default StockDisplay;
