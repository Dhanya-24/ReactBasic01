import React from "react";
import { AppProvider } from "./context";
import Layout from "./Layout";
import "./Cocktails.css";

export default function Cocktails() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}
