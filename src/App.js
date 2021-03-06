import "./css/index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./Components/firebase/AuthContext";
import { Signup } from "./Components/signup";
import { Signin } from "./Components/signin";
import { Forgotpass } from "./Components/forgotpass";
import { Home } from "./Components/home";
import { History } from "./Components/history";
import { Finance } from "./Components/finance";
import { Account } from "./Components/account";
import { Frontlogo } from "./Components/frontlogo";
import { LearnFinance } from "./Components/financeComponents/learnFinance";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/forgot" component={Forgotpass} />
            <Route path="/frontlogo" component={Frontlogo} />
            <Route path="/signin" component={Signin} />
            <Route path="/history" component={History} />
            <Route path="/finance" component={Finance} />
            <Route path="/account" component={Account} />
            <Route path="/learn" component={LearnFinance} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
