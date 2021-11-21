import React from "react";
import { AppProvider } from "./store/context";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import "./MovieDb.css";

export default function MovieDb() {
  return (
    <AppProvider>
      <Router>
        <Layout />
      </Router>
    </AppProvider>
  );
}
