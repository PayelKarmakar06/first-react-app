import React, { Component } from "react";
import "./App.css";
import NavBar from "./component/navbar";
import Counters from "./component/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App constructed");
  }

  componentDidMount() {
    console.log("App mounted");
  }

  handleIncrement = counterVal => {
    let counters = [...this.state.counters];
    counterVal.value++;
    const counter = { ...counterVal };
    const idx = counters.indexOf(counter);
    counters[idx] = counter;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(val => val.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  // getTotalCounterValue = () => {
  //   let totalCounter = 0;
  //   this.state.counters.map(elem => {
  //     totalCounter += elem.value;
  //   });
  //   return totalCounter;
  // };

  render() {
    console.log("App rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounter={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
