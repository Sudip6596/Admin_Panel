import "./App.css";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar.js";
import Stats from "./Stats.js";
import List from "./List.js";
import { useGlobalContext } from "./Context";

function App() {
  const { data } = useGlobalContext();

  return (
    <div className="App">
      <div className="app_sidebar">
        <Sidebar />
      </div>
      <div className="app_stats_list">
        <Stats />
        <List data={data} />
      </div>
    </div>
  );
}

export default App;
