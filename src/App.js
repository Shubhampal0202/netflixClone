import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import Header from "./Components/header/Header";
import "./app.scss";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
