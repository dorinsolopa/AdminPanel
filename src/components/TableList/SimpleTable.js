import React from "react";
import Card from "../chart/Card";

class SimpleTable extends React.Component {
  render() {
    const { tableData } = this.props;
    return (
      <Card>
        <div className="rounded  ">
          <div className="pb-3 pl-2">
            <h5>Simple Table</h5>
          </div>
          <table
            className="table table-border text-white "
            cellSpacing="0"
            role="grid"
          >
            <thead>
              <tr role="row">
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
        </div>
      </Card>
    );
  }
}
export default SimpleTable;
