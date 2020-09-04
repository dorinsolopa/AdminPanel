import React from "react";
import { Line } from "react-chartjs-2";
import Card from "../chart/Card";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        type: "line",
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov"],
        datasets: [
          {
            label: "Earnings:$",
            data: [90, 27, 60, 12, 80],
            backgroundColor: "rgb(5, 233, 245,0.4)",
          },
        ],
      },
    });
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "center",
  };

  render() {
    return (
      <Card>
        <div className="card shadow  bg-secondary ">
          <div className="card-header ">
            <small>Completed Tasks</small>
            <h3 className=" text-white"> 12,100K</h3>
          </div>
          <div className="card-body ">
            <Line
              data={this.state.chartData}
              options={{
                title: {
                  display: this.props.displayTitle,
                  fontSize: 8,
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                },
              }}
            />
          </div>
        </div>
      </Card>
    );
  }
}

export default Chart;
