import React from "react";
import Card from "../../components/chart/Card";
class CardNotifications extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <Card >
        <div className="mb-3 pl-3">
          <h3>Notifications Style</h3>
        </div>
        {info.map((item) => {
          return (
            <div className="btn bg-primary  m-3 d-flex align-items-center  text-white ">
              <div className="row pl-3 ">
                <i className={item.icons}></i>
              </div>
              <div className="pl-4">
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </Card>
    );
  }
}
export default CardNotifications;
