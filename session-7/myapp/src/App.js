import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritefood: "rice" };
  }

  static getDerivedStateFromProps(props, state) {
    return {favoritefood: props.favfod };
  }
  
  render() {
    return <div className="">Fisrt Project {this.state.favoritefood}</div>;
  }
}

export default App;
