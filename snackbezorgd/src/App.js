import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Admin from "./pages/admin";
import Login from "./pages/login";
import Register from "./pages/register";
import About from "./pages/about";
import Contact from "./pages/contact";
import Checkout from "./pages/checkout"; 
import { Logout } from "./pages/logout";

import ProductDisplay from "./pages/productDisplay";
import ForgotPasswordComponent from "./components/forgotpasswordComponent";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/wachtwoord_vergeten"
          element={<ForgotPasswordComponent />}
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="/producten" element={<ProductDisplay />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/registreren" element={<Register />} />
        <Route path="/overons" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
