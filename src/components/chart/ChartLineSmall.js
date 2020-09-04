import React from "react";
import { Line } from "react-chartjs-2";

class ChartLineSmal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  componentWillMount() {
    this.getchartData();
  }

  getchartData() {
    this.setState({
      chartData: {
        type: "line",
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Earnings:$",
            data: [80, 100, 70, 80, 120, 80],
            backgroundColor: "rgba(13, 115, 217,0.4)",
          },
        ],
      },
    });
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "bottom",
  };

  render() {
    return (
      <div className="card shadow bg-secondary ">
        <div className="card-header py-3">
          <small>Total Shipments</small>
          <h5 className=" text-white">763,215</h5>
        </div>
        <div className="card-body ">
          <Line
            type="line"
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                fontSize: 5,
                height:50
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
              },
            }}
          />
        </div>
      </div>
    );
  }
}
export default ChartLineSmal;
