const Dashboard = ({ data }) => {
  let balance = 0;
  let incomeMonthly = 0;
  let expenseMonthly = 0;

  for (let i = 0; i < data.length; i++) {
    balance += data[i].amount;
    if (data[i].month === new Date().getMonth() && data[i].amount > 0) {
      incomeMonthly += data[i].amount;
    }
    if (data[i].month === new Date().getMonth() && data[i].amount < 0) {
      expenseMonthly += Math.abs(data[i].amount);
    }
  }

  return (
    <div className="dashboardContainer">
      <h4>Current Balance</h4>
      <h1>₹ {balance}</h1>
      <div className="monthDash">
        <h4>Current Month</h4>
        <div className="monthDashGrid">
          <div className="monthDashIncome">
            <h4>Income</h4>
            <h3>₹ {incomeMonthly}</h3>
          </div>
          <div className="bar"></div>
          <div className="monthDashExpense">
            <h4>Expense</h4>
            <h3>₹ {expenseMonthly}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
