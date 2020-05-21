import React, { Component } from "react";
import "../css/App.css";

import AddGames from "./AddGames";
import ListGames from "./ListGames";
import SearchGames from "./SearchGames";

class App extends Component () {
  return (
      <div>
        <AddGames />
      </div>
      <div>
        <ListGames />
      </div>
      <div>
        <SearchGames />
      </div>
  );
}

export default App;
