const PaymentList = () => {
  let data = [];
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("data"));

  if (dataFromLocalStorage) {
    data = dataFromLocalStorage;
  }

  return (
    <div className="listContainer">
      <h3>History</h3>
      {data.map((items) => {
        const { name, amount, id } = items;
        return (
          <div
            key={id}
            className={
              "listItems " + (amount < 0 ? "expenseItems" : "incomeItems")
            }
          >
            <h1>{name}</h1>
            <h4>₹ {Math.abs(amount)}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default PaymentList;
