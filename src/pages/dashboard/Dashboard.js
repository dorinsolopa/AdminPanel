import React from "react";
import ChartLine from "../../components/chart/ChartLine";
import ChartLineSmall from "../../components/chart/ChartLineSmall";
import ChartBar from "../../components/chart/ChartBar";
import Chart from "../../components/chart/Chart";
import SimpleTable from "../../components/TableList/SimpleTable";
import { tableData,tasksData } from "../../info/Info";
import Tasks from "../../components/TableList/Tasks"

class Dashboard extends React.Component {
  render() {
    return (
      <div className="bg-dark pr-4 ">
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
      
        <div className="card-deck mt-4">
        <div className="card bg-secondary">
          <Tasks tasksData={tasksData}/>
        </div>
          <div className="card bg-secondary">
            <SimpleTable tableData={tableData} />
          </div>
        </div>
        </div>
     
    );
  }
}

export default Dashboard;
