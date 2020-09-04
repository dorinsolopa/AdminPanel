import React from "react";
import RightFooter from "./RightFooter";
import LeftFooter from "./LeftFooter";

class Footer extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <RightFooter />
        </div>
        <div className=" col-6 justify-content-end">
          <LeftFooter />
        </div>
      </div>
    );
  }
}
export default Footer;
