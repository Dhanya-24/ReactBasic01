import React from "react";
import { AppProvider } from "./context/context";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import Hero from "./pages/Hero";
import Submenu from "./pages/Submenu";
// import "./SubmenuContainer.css";

function SubmenuContainer() {
  return (
    <AppProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppProvider>
  );
}

export default SubmenuContainer;
