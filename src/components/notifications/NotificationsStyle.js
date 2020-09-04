import React from "react";
import Card from "../chart/Card";
class NotificationsStyle extends React.Component {
  render() {
    const { backgroundColor } = this.props;
    return (
      <Card >
        <div className="mb-3 pl-3">
          <h3>Notification states</h3>
        </div>
        {backgroundColor.map((item) => {
          return (
            <div className={`bg-${item.color} rounded m-3  d-flex align-items-center`}>
              <div className="">
                <div className="p-4">
                  <dt>{item.text}</dt>
                </div>
              </div>
              <div className="d-flex justify-content-end pr-3">
                <i className={item.icons}></i>
              </div>
            </div>
          );
        })}
      </Card>
    );
  }
}
export default NotificationsStyle;
