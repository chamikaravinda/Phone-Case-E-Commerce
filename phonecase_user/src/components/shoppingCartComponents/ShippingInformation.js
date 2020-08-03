import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

export default function ShippingInformation() {
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
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Last Name</label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput"
              placeholder="Required"
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
            />
          </div>
          <div className="form-group col-md-12 ">
            <label htmlFor="formGroupExampleInput">Shipping Address</label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput"
              placeholder="Required"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">City</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Required"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Postal Code</label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput"
              placeholder="Required"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Phone No.</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Required"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Email Address</label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput"
              placeholder="Required"
            />
          </div>
          <div className="form-group col-md-12">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="defaultUnchecked"
              />
              <h5
                className="custom-control-label font-weight-bold"
                for="defaultUnchecked"
              >
                Create an Account
              </h5>
            </div>
          </div>
          <div className="form-group col-md-12 ">
            <label htmlFor="formGroupExampleInput">Password</label>
            <input
              type="password"
              className="form-control "
              id="formGroupExampleInput"
              placeholder="Required"
            />
          </div>
          <div className="form-group col-md-12">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="defaultUnchecked"
              />
              <h5
                className="custom-control-label font-weight-bold"
                for="defaultUnchecked"
              >
                SHIP TO A DIFFERENT ADDRESS?
              </h5>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">First Name</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Required"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Last Name</label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput"
              placeholder="Required"
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
            />
          </div>
          <div className="form-group col-md-12 ">
            <label htmlFor="formGroupExampleInput">Shipping Address</label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput"
              placeholder="Required"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">City</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Required"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Postal Code</label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput"
              placeholder="Required"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupExampleInput">Phone No.</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Required"
            />
          </div>
          <MDBCol className="col-md-12">
            <h6 className="font-weight-bold" style={{ paddingTop: " 6px" }}>
              {"   "}
              <MDBIcon icon="arrow-left" /> {"   "}
              Back
            </h6>
          </MDBCol>
        </MDBRow>
      </form>
    </div>
  );
}
