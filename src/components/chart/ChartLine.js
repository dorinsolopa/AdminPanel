import React from "react";
import { Line } from "react-chartjs-2";
import Card from "./Card"
class ChartLine extends React.Component {
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
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Earnings:$",
            data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
            backgroundColor: "rgba(13, 115, 217,0.4)",
         
          },
        ],
      },
    });
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "center",
    height:"250px"
  };

  render() {
    return (
      <Card >
        <div className="card-header ">
          <small>Total Shipments</small>
          <h3 className="font-weight text-white">Performance</h3>
        </div>
        <div className="card-body">
          <Line
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                fontSize: 10,
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
              },
            }}
          />
        </div>
      </Card>
    );
  }
}

export default ChartLine;
