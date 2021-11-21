import React from "react";
import { AppProvider } from "./store/context";
import Layout from "./components/Layout";
// import "./Cart.css";

export default function Cart() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}
