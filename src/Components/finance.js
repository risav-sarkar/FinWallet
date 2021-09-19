import { Link } from "react-router-dom";
import FinanceDashboard from "./financeComponents/financeDashboard";

export const Finance = () => {
  return (
    <main>
      <div className="mainContainer">
        <div className="finance">
          <div className="header">
            <h1>Finances</h1>
            <Link to="/">
              <button>Back</button>
            </Link>
          </div>
          <div className="learnContainer">
            <h1>Learn About Investments!</h1>
            <Link to="/learn">
              <button>Click Here</button>
            </Link>
            <div className="bar"></div>
          </div>
          <FinanceDashboard />
        </div>
      </div>
    </main>
  );
};
