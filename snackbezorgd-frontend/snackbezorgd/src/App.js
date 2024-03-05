// Filename - App.js

import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Admin from "./pages/admin";
import OrderDetails from "./pages/orderDetails";



function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/order" element={<OrderDetails />} />
        </Routes>
      </Router>
  );
}

export default App;
