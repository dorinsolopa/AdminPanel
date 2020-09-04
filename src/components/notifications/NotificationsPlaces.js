import React from "react";
import Card from "../chart/Card";
import "./NotificationsPlaces.css"
class NotificationsPlaces extends React.Component {
  render() {
    return (
      <Card>
        <div className="d-flex justify-content-center pb-4">
          <div>
            <h3>Notifications Places</h3>
            <small className="d-flex justify-content-center">
              Click To View Notifications
            </small>
          </div>
        </div>

        <div className="row pb-2">
          <div className="ml-auto mr-auto col-lg-8">
            <div className="row">
              <div className="col-md-4">
                <button type="button" className="btn btn-pink btn-block font-weight-bold text-white">
                  Top Left
                </button>
              </div>
              <div className="col-md-4">
                <button type="button" className="btn btn-pink btn-block font-weight-bold text-white">
                  Top Center
                </button>
              </div>
              <div className="col-md-4 ">
                <button type="button" className="btn btn-pink btn-block font-weight-bold text-white">
                  Top Right
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row pb-4 ">
          <div className="ml-auto mr-auto col-lg-8">
            <div className="row">
              <div className="col-md-4">
                <button type="button" className="btn btn-pink btn-block font-weight-bold text-white">
                  Bottom Left
                </button>
              </div>
              <div className="col-md-4">
                <button type="button" className="btn btn-pink btn-block font-weight-bold text-white">
                  Bottom Center
                </button>
              </div>
              <div className="col-md-4">
                <button type="button" className="btn btn-pink btn-block font-weight-bold text-white">
                  Bottom Right
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}
export default NotificationsPlaces;
