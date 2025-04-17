import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Games from "./components/Games";
import WishPage from "./components/WishPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GiftBox from "./components/GiftBox";

function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<GiftBox/>}></Route>
        <Route path="/home" element={<div><NavBar />  <Home /></div>}></Route>
        <Route path="/games" element={<div><NavBar />  <Games /></div>}></Route>
        <Route path="/wishes" element={<div><NavBar />  <WishPage /></div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
