import React from "react";
export class ClassBaseComponent extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      name: "",
    };
  }
  fetchData() {
    setTimeout(() => {
      this.setState({ name: "Deepak" });
    }, 3000);
  }
  componentDidMount() {
    this.fetchData();
    console.log("component Did Mount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <div>
        {console.log("I am rendering")}
        <div>ClassBaseComponent</div>
        <div>{this?.state.name}</div>
        <input
          value={this.state.name}
          type="text"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
      </div>
    );
  }
}
