import React from "react";
import Card from "../chart/Card";

class Tasks extends React.Component {
  render() {
    const { tasksData } = this.props;
    return (
      <div className="overflow-auto">
        {tasksData.map((task) => {
          return (
            <div className="row ">
              <div class=" col-12 custom-control custom-checkbox ">
            
                <div className="pl-4 ">
                <input
                  type="checkbox"
                  className="custom-control-input  "
                  id="customCheck1"
                />
                  <label class="custom-control-label -2" for="customCheck1">
                    {task.title}
                  </label>
                  <br />
                  <small>{task.small}</small>
                </div>

                <div className="d-flex justify-content-end text-center">
                  <button
                    className="bg-secondary"
                    style={{ border: "none", outline: "0" }}
                  >
                    <i className=" text-white fas fa-pencil-alt"></i>
                  </button>
                </div>

                <div class="dropdown-divider"></div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Tasks;
