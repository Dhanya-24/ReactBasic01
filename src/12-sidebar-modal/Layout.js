import React from "react";
import Home from "./containers/Home";
import Modal from "./containers/Modal";
import Sidebar from "./containers/Sidebar";
import { AppProvider } from "./context/context";
// import "./Layout.css";

function Layout() {
  return (
    <AppProvider>
      <Home />
      <Modal />
      <Sidebar />
    </AppProvider>
  );
}

export default Layout;
