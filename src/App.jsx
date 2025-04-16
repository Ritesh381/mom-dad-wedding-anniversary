import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Games from "./components/Games";
import WishPage from "./components/WishPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>  
        <Route path="/" element={<Home />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/wishes" element={<WishPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
