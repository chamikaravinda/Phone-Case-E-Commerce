import React from "react";
import { connect } from "react-redux";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import { history } from "../../index";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
}));

const ShippingInformation = (props) => {
  const classes = useStyles();

  const handleBack = () => {
    history.push("/");
  };

  return (
    <div>
      <br></br>
      <form>
        <MDBRow>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">First Name</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Required"
              name="firstname"
              value={props.shippingInformation.firstname}
              onChange={(e) => props.setInformation(e)}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Last Name</label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput"
              placeholder="Required"
              name="lastname"
              value={props.shippingInformation.lastname}
              onChange={(e) => props.setInformation(e)}
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
              id="formGroupExampleInput"
              placeholder="Optional"
              name="companyname"
              value={props.shippingInformation.companyname}
              onChange={(e) => props.setInformation(e)}
              required
            />
          </div>
          <div className="form-group col-md-12 ">
            <label htmlFor="formGroupExampleInput">Shipping Address</label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput"
              placeholder="Required"
              name="shippingaddress"
              value={props.shippingInformation.shippingaddress}
              onChange={(e) => props.setInformation(e)}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">City</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Required"
              name="city"
              value={props.shippingInformation.city}
              onChange={(e) => props.setInformation(e)}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Postal Code</label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput"
              placeholder="Required"
              name="postalcode"
              value={props.shippingInformation.postalcode}
              onChange={(e) => props.setInformation(e)}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Phone No.</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Required"
              name="phoneno"
              value={props.shippingInformation.phoneno}
              onChange={(e) => props.setInformation(e)}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Email Address</label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput"
              placeholder="Required"
              name="email"
              value={props.shippingInformation.email}
              onChange={(e) => props.setInformation(e)}
              required
            />
          </div>
          {!props.user.headers ? (
            <>
              <div className="form-group col-md-12">
                <MDBRow>
                  {" "}
                  <Checkbox
                    className={classes.root}
                    disableRipple
                    color="default"
                    checkedIcon={
                      <span
                        className={clsx(classes.icon, classes.checkedIcon)}
                      />
                    }
                    icon={<span className={classes.icon} />}
                    inputProps={{ "aria-label": "decorative checkbox" }}
                    name="createAccount"
                    checked={props.newAccount}
                    onChange={(e) => props.setNewAccount(!props.newAccount)}
                  />{" "}
                  <h5 className="font-weight-bold pt-2" for="creteAccount">
                    Create an Account
                  </h5>
                </MDBRow>
              </div>
              <div className="form-group col-md-12 ">
                <label htmlFor="formGroupExampleInput">Password</label>
                <input
                  type="password"
                  className="form-control "
                  id="formGroupExampleInput"
                  placeholder="Required"
                  name="password"
                  value={props.shippingInformation.password}
                  onChange={(e) => props.setInformation(e)}
                />
              </div>
            </>
          ) : (
            ""
          )}
          <div className="form-group col-md-12">
            <MDBRow>
              <Checkbox
                className={classes.root}
                disableRipple
                color="default"
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
                icon={<span className={classes.icon} />}
                inputProps={{ "aria-label": "decorative checkbox" }}
                name="createAccount"
                checked={props.diffAdrress}
                onChange={(e) => props.setDiffAdrres(!props.newAccount)}
              />{" "}
              <h5 className=" font-weight-bold pt-2" for="defaultUnchecked">
                SHIP TO A DIFFERENT ADDRESS?
              </h5>
            </MDBRow>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">First Name</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Required"
              name="diffFirstname"
              value={props.shippingInformation.diffFirstname}
              onChange={(e) => props.setInformation(e)}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Last Name</label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput"
              placeholder="Required"
              name="diffLastname"
              value={props.shippingInformation.diffLastname}
              onChange={(e) => props.setInformation(e)}
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
              id="formGroupExampleInput"
              placeholder="Optional"
              name="diffCompanyname"
              value={props.shippingInformation.diffCompanyname}
              onChange={(e) => props.setInformation(e)}
              required
            />
          </div>
          <div className="form-group col-md-12 ">
            <label htmlFor="formGroupExampleInput">Shipping Address</label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput"
              placeholder="Required"
              name="diffShippingaddress"
              value={props.shippingInformation.diffShippingaddress}
              onChange={(e) => props.setInformation(e)}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">City</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Required"
              name="diffCity"
              value={props.shippingInformation.diffCity}
              onChange={(e) => props.setInformation(e)}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Postal Code</label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput"
              placeholder="Required"
              name="diffPostalcode"
              value={props.shippingInformation.diffPostalcode}
              onChange={(e) => props.setInformation(e)}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Phone No.</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Required"
              name="diffPhoneno"
              value={props.shippingInformation.diffPhoneno}
              onChange={(e) => props.setInformation(e)}
              required
            />
          </div>
          <MDBCol className="col-md-12">
            <div onClick={() => handleBack()} style={{ cursor: "pointer" }}>
              <h6 className="font-weight-bold" style={{ paddingTop: " 6px" }}>
                {"   "}
                <MDBIcon icon="arrow-left" /> {"   "}
                Back
              </h6>
            </div>
          </MDBCol>
        </MDBRow>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.userData.profile,
    user: state.userData.user,
  };
};

export default connect(mapStateToProps, null)(ShippingInformation);
