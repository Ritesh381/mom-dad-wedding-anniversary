import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load components
const GiftBox = lazy(() => import("./components/GiftBox"));
const NavBar = lazy(() => import("./components/NavBar"));
const Home = lazy(() => import("./components/Home"));
const Games = lazy(() => import("./components/Games"));
const WishPage = lazy(() => import("./components/WishPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<GiftBox />} />
          <Route path="/home" element={<div><NavBar /> <Home /></div>} />
          <Route path="/games" element={<div><NavBar /> <Games /></div>} />
          <Route path="/wishes" element={<div><NavBar /> <WishPage /></div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
