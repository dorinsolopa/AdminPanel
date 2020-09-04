import React from "react";
import "./ProfileCard.css";

class ProfileCard extends React.Component {
  render() {
    return (
      <div>
        <div class="card profile-card-4 bg-dark">
          <div class="card-img-block">
            <img src={require("../../assests/tree.jpg")} />
          </div>
          <div class="card-body pt-5">
            <img
              src={require("../../assests/header.jpg")}
              alt="profile-image"
              class="profile"
            />
            <h6 className="card-title text-center text-white">Mike Smith</h6>
            <h5 className="text-center text-white">CEO</h5>
            <p className="card-text text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="icon-block text-center">
              <a href="#">
                <i className="	fa fa-facebook-official"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileCard;
