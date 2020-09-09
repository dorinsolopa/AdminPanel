import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

class SideBar extends React.Component {
  render() {
    const routes = this.props.routes.filter((route) => {
      return route.menu === true;
    });
    return (
      <div className="d-flex marginLeft" id="wrapper">
        <div className="bg-primary border-right  rounded" id="sidebar-wrapper">
          <div className="sidebar-heading row">
            <div className="pr-2 pl-2">
              <img
                className="logo-img"
                src={require("../../assests/logo2.jpg")}
              />
            </div>
            CREATIVE TIM
          </div>
          <hr />
          <div className="list-group list-group-flush">
            {routes.map((route) => {
              return (
                <a
                  href="#"
                  className="list-group-item list-group-item-action bg-primary"
                >
                  <Link to={route.path} className="text-white">
                    <i className={route.icon}></i>
                    {route.name}
                  </Link>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
