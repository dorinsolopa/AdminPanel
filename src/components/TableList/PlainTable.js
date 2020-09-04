import React from "react";
import "./TableList";
class PlainTable extends React.Component {
  render() {
    const { tableData } = this.props;
    return (
      <div>
        <div>
          <h3> Table on Plain Background</h3>
          <small>Here Is A Subtitle For This Table</small>
        </div>

        <table class="table table table-dark rounded color ">
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
