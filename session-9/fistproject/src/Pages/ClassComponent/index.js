import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { count: props.count };
  }

  coonentDidMount() {}

  componentWillUpdate() {}

  componentDidUpdate() {}

  shouldComponentUpdate(nextProps, nextState) {
    // Only re-render if the favoriteFood state has changed
    return this.state.favoriteFood !== nextState.favoriteFood;
  }

  render() {
    return <div> Count: {this.state.count} </div>;
  }
}

export default ClassComponent;
