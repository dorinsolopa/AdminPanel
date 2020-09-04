import React from "react";
import CardNotifications from "../../components/notifications/CardNotifiations";
import NotificationsStyle from "../../components/notifications/NotificationsStyle";
import NotificationsPlaces from "../../components/notifications/NotificationsPlaces"
import { info, backgroundColor } from "../../info/Info";
class Notifications extends React.Component {
  render() {
    return (
      <div>
        <div className=" row ">
          <div className="col-6 ">
            <CardNotifications info={info} />
          </div>
          <div className="col-6">
            <NotificationsStyle backgroundColor={backgroundColor} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-4">
            <NotificationsPlaces />
          </div>
        </div>
      </div>
    );
  }
}

export default Notifications;
