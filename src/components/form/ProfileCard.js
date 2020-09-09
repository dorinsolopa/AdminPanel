import React from "react";
import "./ProfileCard.css";
import Card from "../chart/Card";
class ProfileCard extends React.Component {
  render() {
    return (
      <Card>
        <div class=" profile-card-4 ">
          <div class="card-img-block rounded">
            <img src={require("../../assests/tree.jpg")} />
          </div>
          <div class="card-body pt-5">
            <img
              src={require("../../assests/anime3.png")}
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
                <i className="	fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}
export default ProfileCard;
