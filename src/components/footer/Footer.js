import React from "react";
import LeftFooter from "./LeftFooter";
import RightFooter from "./RightFooter";

class Footer extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <LeftFooter />
        </div>
        <div className=" col-6 justify-content-end">
          <RightFooter />
        </div>
      </div>
    );
  }
}
export default Footer;
