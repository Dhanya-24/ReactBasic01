import React, { useState } from "react";
import data from "../mockData/data";
import ListItem from "./ListItem";
import "./List.css";

function ListContainer() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <ListItem people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default ListContainer;
