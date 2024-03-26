import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Admin from "./pages/admin";
import Login from "./pages/login";
import Register from "./pages/register";
import { Logout } from "./pages/logout";

import ProductDisplay from "./pages/productDisplay";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
\        <Route path="/productDisplay" element={<ProductDisplay />} />
        <Route path="/registreren" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
