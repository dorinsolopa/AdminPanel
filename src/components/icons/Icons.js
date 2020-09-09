import React from "react";
import "./Icons.css";
import Card from "../chart/Card";
class Icons extends React.Component {
  render() {
    const { icons } = this.props;
    return (
      <Card>
        <div className="p-3">
          <small className="font-weight-bold">100 Awesome Nucleo Icons</small>
          <br />
          <small >
            Handcrafted By Our Friends From
            <a className="pl-2" href="https://nucleoapp.com/developer" target="_blank">
              NucleoApp
            </a>
          </small>
        </div>
        <div className="row d-flex justify-content-center">
          {icons.map((icons) => {
            return (
              <div className="font_detail col-lg-2 m-3">
                <a href={icons.link}>
                  <i className={icons.icon}></i>
                </a>
                <br />
                <small>{icons.info}</small>
              </div>
            );
          })}
        </div>
      </Card>
    );
  }
}
export default Icons;
