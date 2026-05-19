import Entry from "./components/Entry.jsx";
import Header from "./components/Header.jsx";
import DataArray from "../data/data.js";

import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        {DataArray.map((item) => (
          <Entry key={item.id} item={item} />
        ))}
      </main>
    </>
  );
}

export default App;
