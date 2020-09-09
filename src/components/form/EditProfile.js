import React from "react";
import Card from "../chart/Card";
import "./EditProfile.css";

class EditProfile extends React.Component {
  render() {
    return (

        <Card>
          <form className="p-5 ">
            <div className="form-row ">
              <div className="form-group col-md-5 ">
                <label for="Company">Company (disabled)</label>
                <input
                  disabled="true"
                  type="company"
                  className="form-control bg-dark "
                  id="inputCompany"
                  placeholder="Creative Code Inc."
                />
              </div>
              <div className="form-group col-md-3">
                <label for="UserName">Username</label>
                <input
                  type="user"
                  className="form-control bg-dark form-control"
                  id="inputUser"
                  placeholder="Name "
                />
              </div>
              <div className="form-group col-md-4">
                <label for="inputEmail">Email Address</label>
                <input
                  type="email"
                  className="form-control bg-dark"
                  id="inputEmail"
                  placeholder="name@email.com"
                />
              </div>
            </div>
            <div className="form-row">
              <div class="form-group col-md-6">
                <label for="inputFirstName">First Name</label>
                <input
                  type="firstName"
                  className="form-control bg-dark"
                  id="inputFirstName"
                  placeholder="Mike"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputLastName">Last Name</label>
                <input
                  type="lastName"
                  className="form-control bg-dark"
                  id="inputLastName"
                  placeholder="Smith"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress2">Address </label>
              <input
                type="text"
                class="form-control bg-dark"
                id="inputAddress"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="form-row ">
              <div className="form-group col-md-4 ">
                <label for="City">City</label>
                <input
                  type="city"
                  className="form-control bg-dark "
                  id="inputCity"
                  placeholder="city"
                />
              </div>
              <div className="form-group col-md-4">
                <label for="country">Country</label>
                <input
                  type="country"
                  className="form-control bg-dark"
                  id="inputCountry"
                  placeholder="country "
                />
              </div>
              <div className="form-group col-md-4">
                <label for="inputPostal">Postal Code</label>
                <input
                  type="zipe code"
                  className="form-control bg-dark "
                  id="inputZipCode"
                  placeholder="Zip Code"
                />
              </div>
            </div>
            <div className="mb-3">
              <label>About Me</label>
              <textarea className="form-control bg-dark "></textarea>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn bg-danger">
                  Save
                </button>
              </div>
            </div>
          </form>
        </Card>
    
    );
  }
}
export default EditProfile;
