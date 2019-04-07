import React, { Component } from "react";

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      num1: "",
      num2: ""
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.addAction = this.addAction.bind(this);
  }

  handleChange1(e) {
    this.setState({ num1: e.target.value });
  }
  handleChange2(e) {
    this.setState({ num2: e.target.value });
  }

  addAction(event) {
    var numb1 = this.state.num1;
    var numb2 = this.state.num2;
    if (numb1 == "" || numb2 == "") {
      return alert("enter number");
    } else {
      var number1 = parseInt(numb1, 10);
      var number2 = parseInt(numb2, 10);
      var sum = number1 + number2;
      console.log(sum);
      this.setState({ result: sum, num1: "", num2: "" });
    }
  }
  render() {
    return (
      <form>
        <label>
          NUM 1:
          <input
            className="container m-3"
            type="number"
            value={this.state.num1}
            onChange={this.handleChange1}
          />
        </label>
        <br />
        <label>
          NUM :
          <input
            className="container m-3"
            type="number"
            value={this.state.num2}
            onChange={this.handleChange2}
          />
        </label>

        <br />
        <label>
          <input
            className="btn btn-info m-3 btn-lg btn-block"
            type="button"
            onClick={this.addAction}
            value="Add"
          />
          <br />
          <label className="container m-2">
            The sum is <b>{this.state.result}</b>
          </label>
        </label>
      </form>
    );
  }
}
