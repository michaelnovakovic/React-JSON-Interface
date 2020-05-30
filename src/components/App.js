import React, { Component } from "react";
import "../css/App.css";

import Header from "./Header";
import Footer from "./Footer";

import ListDogs from "./ListDogs";
import SearchDogs from "./SearchDogs";

class App extends Component {
  constructor() {
    super(); // calls the constructor of the parent class
    this.state = {
      // sets the current state of the constructor class
      myDogs: [], // holds the data from json file within array
      formDisplay: false,
      orderBy: 'dogName', // orders the array by the field dogName
      orderDir: 'asc', // sets the direction of the ordering of array
      queryText: '', // sets the query to empty
      lastIndex: 0 // starts the id at 0
    };
    this.changeOrder = this.changeOrder.bind(this);
    this.SearchDogs = this.SearchDogs.bind(this);
  }

  SearchDogs(query) {
    this.setState({ queryText: query });
  }

  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir
    });
  }

  componentDidMount() {
    // Mounts the data file content to the DOM
    fetch("./data.json") // fetches the json data from the json data
      .then((response) => response.json()) // creates a response when fetching the data from the file
      .then((result) => {
        // the result of the data being fetched
        const dogs = result.map((item) => {
          item.dogId = this.state.lastIndex; // ID starts at 0
          this.setState({ lastIndex: this.state}) // 
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

    let order;
    let filteredDogs = this.state.myDogs;
    if (this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    filteredDogs = filteredDogs
      .sort((a, b) => {
        if (
          a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
        ) {
          return -1 * order;
        } else {
          return 1 * order;
        }
      })
      .filter(eachItem => {
        return (
          eachItem['dogName']
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) || 
          eachItem['dogBreedGroup']
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
            eachItem['dogWeight']
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase())
        );
      });

    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="col-sm-12 section1">
        <SearchDogs
            orderBy={this.state.orderBy}
            orderDir={this.state.orderDir}
            changeOrder={this.changeOrder}
            SearchDogs={this.SearchDogs}
          />
        </div>
        <div className="container-fluid">
          <ListDogs dogs={filteredDogs} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
