<h1 align="center">FinWallet</h1>

> <p align="center">Keeping track of finances to raise financial awareness.<p>

## ✨ The Problem It Solves

Most people are unaware of the importance of tracking personal finances and managing spending habits. Tracking your spending allows you to see where your money is really going. It is essential if you want to understand your financial habits and make changes to them. Tracking your spending ultimately allows you to take control of your financial situation. Knowing where your money is going is empowering. It can curb impulse spending, help you achieve your financial goals, cut unnecessary purchases out of your budget, force you to focus on what is worth spending your money on, and overall, will make managing your money easier. And this app helps in doing so.

Features of this app

- User can add Income and Expenses, also can delete an entry
- Display all transaction history
- Display current balance, as well as income and expense of the current month
- It has a Finance page, which shows current details about Crypto, Stocks (Top gainers from NSE and BSE ) and lastly latest news.
- It also has a small section containing information about various investment opportunities.

## 🚀 Usage

The website is hosted in Netlify. [Click here to Visit](https://finwallet.netlify.app/)

<br>
To run locally make sure you have NPM installed.

Just run the following command at the root of the project:

Install Dependencies

```sh
npm install
```

Run the app

```sh
npm start
```

## 🔨 Challenges we ran into

The main challenge for us was to create a backend server for storing our data and user authentication. As we are not acquainted with Node.js and MongoDB, so we opted to use Firebase as our backend server. But we ran into problems as some parts of the Firebase were not well documented. But ultimately Stack Overflow answers came to the rescue. Secondly searching for the APIs were a pain, as most of the APIs were either paid or had very low API call limit, so had to search a lot of websites to get some adequate APIs. But alas, we did not find an adequate API for stocks and so we decided to create a python script that will scrape BSE and NSE Top 10 Gainers from Financial Express every hour and push them to our Firebase Database as a python object(which is eventually converted to a JSON).

## 🧍 Creators

**Risav Sarkar**

- Github: [@risav-sarkar](https://github.com/risav-sarkar)

**Sarbottam Chatterjee**

- Github: [@import-sarbottam](https://github.com/import-sarbottam)

**Rohit Pandey**

- Github: [@therohit777](https://github.com/therohit777)

**Ruhul Amin Sardar**

- Github: [@using-namespace-ruhul](https://github.com/using-namespace-ruhul)
