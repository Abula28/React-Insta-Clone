import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home.jsx";
import "./index.css";
import { Sidebar } from "./components/Sidebar.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { BottomBar } from "./components/Bottombar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Navbar />
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <BottomBar />
  </Router>
);
