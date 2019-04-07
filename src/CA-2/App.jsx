import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import Table from "./Table";
import "../App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TableData: [],
      temp: {
        songname: "",
        songwriter: "",
        Release_Date: ""
      },
      modal: false
    };
    this.submitForm = this.submitForm.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://localhost:8080/");
    xmlhttp.send();
    xmlhttp.onload = function() {
      let serverData = JSON.parse(xmlhttp.responseText);
      console.log(serverData);
      this.setState({ TableData: serverData });
      console.log(this.state.TableData);
    }.bind(this);
  }

  submitForm(item) {
    if (item.songname === "" || item.songwriter === "") {
      return alert("Enter Details");
    } else {
      let initial_state = { songname: "", songwriter: "", Release_Date: "" };
      let xmlhttp = new XMLHttpRequest();
      xmlhttp.open("POST", "http://localhost:8080/");
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(JSON.stringify(item));
      let temp_array = [...this.state.TableData];
      console.log(temp_array);
      temp_array.push(item);
      console.log(temp_array);

      this.setState({
        TableData: temp_array,
        modal: false,
        temp: initial_state
      });

      console.log(item);
    }
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="m-4">
          <Form
            toggle={this.toggle}
            modal={this.state.modal}
            submitForm={this.submitForm}
          />
        </div>
        <div className="m-4">
          <Table TableData={this.state.TableData} />
        </div>
      </div>
    );
  }
}

export default App;
