import React, { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { connect } from "react-redux";
import { updateProfile, getProfile } from "../../actions/user.actions";

const Profile = (props) => {
  useEffect(() => {
    props.onGetProfile();
  }, []);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phonenum, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const data = {
      firstname: firstname,
      lastname: lastname,
      companyname: companyname,
      shippingAddress: shippingAddress,
      city: city,
      postalCode: postalCode,
      phonenum: phonenum,
      email: email,
    };
    props.onProfileUpdate(data);
  };
  return (
    <div
      style={{
        overflow: "hidden",
        paddingLeft: "7%",
        paddingRight: "7%",
        paddingTop: "4%",
        paddingBottom: "6%",
      }}
    >
      <br></br>
      <form onSubmit={handleSubmit}>
        <MDBRow>
          <MDBCol className="col-12 col-sm-4 col-md-3 col-lg-3">
            <h3 className="font-weight-bold">My Profile</h3>
          </MDBCol>
        </MDBRow>
        <br></br>
        <MDBRow>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Required"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Last Name</label>
            <input
              type="text"
              className="form-control "
              id="lastname"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Required"
              required
            />
          </div>
          <div className="form-group col-md-12 ">
            <label htmlFor="formGroupExampleInput">
              Company Name (If Billing/Delivery to office Address)
            </label>
            <input
              type="text"
              className="form-control "
              id="companyname"
              value={companyname}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Optional"
            />
          </div>
          <div className="form-group col-md-12 ">
            <label htmlFor="formGroupExampleInput">Shipping Address</label>
            <input
              type="text"
              className="form-control "
              id="companyname"
              value={companyname}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Required"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Required"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Postal Code</label>
            <input
              type="text"
              className="form-control "
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Required"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Phone No.</label>
            <input
              type="text"
              className="form-control"
              id="phonenum"
              value={phonenum}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Required"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Email Address</label>
            <input
              type="text"
              className="form-control "
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Required"
              required
            />
          </div>
        </MDBRow>
        <br></br>
        <MDBRow>
          <MDBBtn color="amber" style={{ borderRadius: 25 }} type="submit">
            Update
          </MDBBtn>
        </MDBRow>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.userData.profile || "",
    error: state.userData.error || "",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProfileUpdate: (user) => {
      dispatch(updateProfile(user));
    },
    onGetProfile: () => {
      dispatch(getProfile());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
