import "./App.css";
import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard.jsx";
import AboutMe from "./AboutMe/AboutMe.jsx";
import Reviews from "./Reviews/Reviews.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx"; 


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/reviews" element={<Reviews />} /> 
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
