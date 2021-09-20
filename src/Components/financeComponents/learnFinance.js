import { Link } from "react-router-dom";
import LearnInfo from "./learnInfo";

export const LearnFinance = () => {
  return (
    <main>
      <div className="mainContainer">
        <div className="learn">
          <div className="header">
            <h1>Learn</h1>
            <Link to="/finance">
              <button>Back</button>
            </Link>
          </div>
          <div className="learnComponents">
            <LearnInfo
              name={"Mutual funds"}
              desc={
                "Mutual funds combine the rewards of investing in stocks with the ease of putting money into a diversified mutual fund."
              }
              pros={[
                "No prerequisite knowledge required",
                "Moderate to High returns",
              ]}
              cons={[
                "Moderate to High risk",
                "You do not get to take any investment decisions",
              ]}
            />
            <LearnInfo
              name={"Stocks"}
              desc={
                "A stock is a type of investment that represents an ownership share in a company. Investors buy stocks that they think will go up in value over time."
              }
              pros={[
                "Value of the investment grows in proportion to economic growth",
                "Moderate to High returns",
              ]}
              cons={[
                "Moderate to High risk",
                "Knowledge about market and companies required",
              ]}
            />
            <LearnInfo
              name={"Cryptocurrency"}
              desc={
                "Cryptocurrency is basically a digital currency that is managed by using one of the most advanced encryption techniques called cryptography."
              }
              pros={["High security, accessible to everyone", "High returns"]}
              cons={[
                "Extremely Volatile and very High risk",
                "Future uncertainty",
              ]}
            />
            <LearnInfo
              name={"PPF"}
              desc={
                "The Public Provident Fund is a savings-cum-tax-saving instrument in India, introduced by the National Savings Institute of the Ministry of Finance in 1968."
              }
              pros={["No tax on returns", "No market risk"]}
              cons={[
                "Low returns",
                "Investment period has to be minimum 15 years",
              ]}
            />
            <LearnInfo
              name={"FD"}
              desc={
                "In this account, you will deposit a fixed sum of money with the bank for a specific period. The amount in the account will be handed over to the holder of the account at the end of the predetermined tenure."
              }
              pros={["No market risk"]}
              cons={["Very Low returns", `"Please Don't Do It!"`]}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
