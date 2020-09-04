import React from "react";
import { Bar } from "react-chartjs-2";

class ChartBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartBar: props.chartBar,
    };
  }

  componentWillMount() {
    this.getChartBar();
  }

  getChartBar() {
    this.setState({
      chartBar: {
        type: "line",
        labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
        datasets: [
          {
            label: "Earnings:$",
            data: [53, 20, 10, 80, 100, 45],
            backgroundColor: " rgb(245, 5, 169, 0.4)",
          },
        ],
      },
    });
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "none",
  };

  render() {
    return (
      <div className="card shadow bg-secondary ">
        <div className="card-header py-3">
        <small>Daily Sales</small>
          <h5 className="font-weight text-primary"> 3,500€</h5>
        </div>
        <div className="card-body ">
          <Bar
            type="bar"
            data={this.state.chartBar}
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
      </div>
    );
  }
}
export default ChartBar;
