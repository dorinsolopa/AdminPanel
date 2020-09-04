import React from "react";
import { withRouter } from "react-router-dom";
import Sidebar from "../components/side_bar/SideBar";
import Footer from "../components/footer/Footer"
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
    <div className="row bg-dark pl-3">
      <div className="col-2  bg-primary text-white  bg-dark">
        <Sidebar routes={props.routes} />
      </div>

      <div className="col-10 ">{props.children}</div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default withRouter(AppLayout);
