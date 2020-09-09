import React from "react";
import ChartLine from "../../components/chart/ChartLine";
import ChartLineSmall from "../../components/chart/ChartLineSmall";
import ChartBar from "../../components/chart/ChartBar";
import Chart from "../../components/chart/Chart";
import SimpleTable from "../../components/TableList/SimpleTable";
import { tableData, tasksData } from "../../info/Info";
import Tasks from "../../components/TableList/Tasks";
import "../../components/chart/Card.css";
class Dashboard extends React.Component {
  render() {
    return (
      <div className=" pr-4 ">
        <div className="row ">
          <div className="col-sm-12">
            <ChartLine
              chartData={this.props.chartData}
              legendPosition="bottom"
            />
          </div>
        </div>
        <div className="row pt-4 ">
          <div className="col-4">
            <ChartLineSmall />
          </div>
          <div className="col-4">
            <ChartBar legendPosition="bottom" />
          </div>
          <div className="col-4">
            <Chart legendPosition="bottom" />
          </div>
        </div>

        <div className="row mt-4  ">
          <div className=" col-sm-6 ">
            <Tasks tasksData={tasksData} />
          </div>
          <div className="col-sm-6 ">
            <SimpleTable tableData={tableData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
