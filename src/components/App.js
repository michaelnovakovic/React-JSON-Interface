import React, { Component } from "react";
import "../css/App.css";

import Header from "./Header";

import ListGames from "./ListGames";

class App extends Component {
  constructor() {
    super(); // calls the constructor of the parent class
    this.state = {
      // sets the current state of the constructor class
      myDogs: [], // holds the data from json file within array
    };
  }

  componentDidMount() {
    // Mounts the data file content to the DOM
    fetch("./data.json") // fetches the json data from the json data
      .then((response) => response.json()) // creates a response when fetching the data from the file
      .then((result) => {
        // the result of the data being fetched
        const dogs = result.map((item) => {
          // created variable to hold each item in the json file
          return item; // returns the content of the json file
        });
        this.setState({
          // sets the current state of the dom to display the data from json file
          myDogs: dogs, // calls the variable to the DOM to display data (myGames is the array to hold data)
        });
      });
  }

  render() {

    return (
      <div>
            <div><Header /></div>
            <div class="container">
            <ListGames dogs={this.state.myDogs}/>
            </div>
            <div>Footer</div>
      </div>

    );
  }
}

export default App;
