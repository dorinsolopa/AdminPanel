import React from "react";
import "./TableList.css";

class PlainTable extends React.Component {
  render() {
    const { tableData } = this.props;
    return (
      <div className="bodyBgColor">
        <div className="text-white">
          <h4 className="card-title"> Table on Plain Background</h4>
          <small>Here Is A Subtitle For This Table</small>
        </div>

        <table class="table text-white rounded  ">
          <thead>
            <tr>
              <th scope="col">NAME</th>
              <th scope="col">COUNTRY</th>
              <th scope="col">CITY</th>
              <th scope="col">SALARY</th>
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
    );
  }
}
export default PlainTable;
