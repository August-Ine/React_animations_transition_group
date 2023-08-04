import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsShowing: false
    };
  }

  toggleModalHandler = () => {
    this.setState({ modalIsShowing: !this.state.modalIsShowing });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <>
          <Backdrop isShowing={this.state.modalIsShowing} />
          <Modal
            isShowing={this.state.modalIsShowing}
            closed={this.toggleModalHandler}
          />
        </>
        <button className="Button" onClick={this.toggleModalHandler}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
