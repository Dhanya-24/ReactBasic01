import React from "react";
import SearchForm from "./components/SearchForm";
import Stories from "./components/Stories";
import Buttons from "./components/Buttons";
import { AppProvider } from "./store/context";
// import "./HackerNews.css";

export default function HackerNews() {
  return (
    <AppProvider>
      <SearchForm />
      <Buttons />
      <Stories />
    </AppProvider>
  );
}
