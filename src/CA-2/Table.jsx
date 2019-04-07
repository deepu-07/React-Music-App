import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let TableData = this.props.TableData;
    return (
      <div className="container-fluid">
        <div className="row">
          <table className="table table-striped ">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>SongName</th>
                <th>SongWriter</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              {TableData.map(function(details, index) {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{details.songname}</td>
                    <td>{details.songwriter}</td>
                    <td>{details.Release_Date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
