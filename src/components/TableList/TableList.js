import React from "react";
import "./TableList.css";
import Card from "../chart/Card"
class TableList extends React.Component {
  render() {
    const { tableData } = this.props;
    return (
      <Card>
      <table class="table table-border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>City</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => {
            return (
              <tr>
                <td>{row.name}</td>
                <td>{row.country}</td>
                <td>{row.city}</td>
                <td>{row.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </Card>
    );
  }
}
export default TableList;
