import React from "react";
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
