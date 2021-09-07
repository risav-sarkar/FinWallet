import Home from "./components/home";
import History from "./components/history";
import Investment from "./components/investment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/investment" element={<Investment />} />
      </Routes>
    </Router>
  );
};

export default App;
