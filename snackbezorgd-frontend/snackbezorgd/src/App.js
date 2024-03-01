import React from "react";
import Home from "./pages/home";
import SB_Home from "./pages/sb_home";
import NavBar from "./components/navbar";
import { Stack } from "@mui/material/";

function App() {
  return (
    <Stack className="container">
      {/* <NavBar /> */}
      <SB_Home />
    </Stack>
  );
}
export default App;
