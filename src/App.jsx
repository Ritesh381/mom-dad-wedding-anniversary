import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";

// Lazy load components
const GiftBox = lazy(() => import("./components/GiftBox"));
const NavBar = lazy(() => import("./components/NavBar"));
const Home = lazy(() => import("./components/Home"));
const Games = lazy(() => import("./components/Games"));
const WishPage = lazy(() => import("./components/WishPage"));
const Footer = lazy(() => import("./components/Footer"));
const Contributions = lazy(() => import("./components/Contributions"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<GiftBox />} />
          <Route
            path="/home"
            element={
              <div className="app-container">
                <div className="page-content">
                  <NavBar />
                  <Home />
                </div>
                <Footer />
              </div>
            }
          />

          <Route
            path="/games"
            element={
              <div className="app-container">
                <div className="page-content">
                  <NavBar />
                  <Games />
                </div>
                <Footer />
              </div>
            }
          />

          <Route
            path="/wishes"
            element={
              <div className="app-container">
                <div className="page-content">
                  <NavBar />
                  <WishPage />
                </div>
                <Footer />
              </div>
            }
          />
          <Route
            path="/contribution"
            element={
              <div className="app-container">
                <div className="page-content">
                  <NavBar />
                  <Contributions />
                </div>
                <Footer />
              </div>
            }
          ></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
