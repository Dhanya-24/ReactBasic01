import React from "react";
import Layout from "./Layout";
import { AppProvider } from "./store/context";
import "./Quiz.css";

export default function Quiz() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}
