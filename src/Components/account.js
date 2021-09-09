import Header from "./mainComponents/header.js";

export const Account = () => {
  return (
    <main>
      <div className="mainContainer">
        <Header />
        <div className="accountContainer">
          <div className="btnContainer">
            <button>Change Password</button>
            <button>Reset All Data</button>
          </div>
        </div>
      </div>
    </main>
  );
};
