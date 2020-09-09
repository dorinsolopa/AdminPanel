import React from "react";
import TableList from "../../components/TableList/TableList";
import PlainTable from "../../components/TableList/PlainTable"
import {tableData} from "../../info/Info"

class TableCard extends React.Component {
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-12">
          <TableList tableData={tableData}/>
        </div>
        <div className="col-12 mt-4 pt-5">
            <PlainTable tableData={tableData}/>
        </div>
      </div>
    );
  }
}
export default TableCard;
