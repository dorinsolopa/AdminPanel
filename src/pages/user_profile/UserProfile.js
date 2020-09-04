import React from "react";
import EditProfile from "../../components/form/EditProfile";
import ProfileCard from "../../components/form/ProfileCard";

class UserProfile extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-8">
          <EditProfile />
        </div>
        <div className="col-4 pr-4">
          <ProfileCard />
        </div>
      </div>
    );
  }
}
export default UserProfile;
