import React from "react";
import { withRouter } from "react-router-dom";
import Sidebar from "../components/side_bar/SideBar";
import Footer from "../components/footer/LeftFooter";
import "../components/chart/Card.css";

const AppLayout = (props) => {
  //   console.log(props, "props comment");

  const isPrivat = props.routes.find((route) => {
    return props.location.pathname === route.path;
  });
  //   console.log(isPrivat, "isPrivat");
  if (!isPrivat) {
    return <div>{props.children}</div>;
  }

  return (
    <div className="row  bodyBgColor pr-3">
      <div className="col-2  text-white pl-3  bodyBgColor">
        <Sidebar routes={props.routes}   activeClassName="active"/>
      </div>

      <div className="col-10 ">
        {props.children}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default withRouter(AppLayout);
