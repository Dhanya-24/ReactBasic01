import React from "react";
import { useGlobalContext } from "../store/context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// items

function Layout() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default Layout;
