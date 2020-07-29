import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ShoppingCartItem from "../shoppingCartComponents/ShoppingCartItem";
import ItemCard from "./ItemCard";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import {
  MDBCol,
  MDBRow,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBBtn,
} from "mdbreact";

export default function AppleProducts() {
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div
          className="pb-5 pt-5 pl-5 pr-5"
          style={{ backgroundColor: "white" }}
        >
          <MDBRow className="pb-5 pt-5" between>
            <MDBCol className="col-12 col-sm-4 col-md-3 col-lg-3">
              <h3 className="font-weight-bold">Men's Top</h3>
            </MDBCol>
            <MDBCol className="col-12 col-sm-8 col-md-9  col-lg-4">
              <MDBRow end>
                {" "}
                <MDBBtn color="white">Hide Filters</MDBBtn>
                <MDBDropdown>
                  <MDBDropdownToggle
                    caret
                    color="white"
                    style={{ boxShadow: "none !important" }}
                  >
                    Sort By
                  </MDBDropdownToggle>
                  <MDBDropdownMenu basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem>Separated link</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <MDBRow className="pl-3">
            <MDBCol className="col-md-3">
              <MDBRow className="justify-content-center">
                {" "}
                <p style={{ fontWeight: "500", paddingTop: "10px" }}>
                  Collection
                </p>
                <MDBDropdown>
                  <MDBDropdownToggle
                    outline
                    color="grey"
                    size="sm"
                    style={{
                      boxShadow: "none !important",
                      borderRadius: "25px",
                    }}
                  >
                    Sort By
                  </MDBDropdownToggle>
                  <MDBDropdownMenu basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem>Separated link</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBRow>
            </MDBCol>
            <MDBCol className="col-md-3">
              <MDBRow className="justify-content-center">
                {" "}
                <p style={{ fontWeight: "500", paddingTop: "10px" }}>
                  Collection
                </p>
                <MDBDropdown>
                  <MDBDropdownToggle
                    outline
                    color="grey"
                    size="sm"
                    style={{
                      boxShadow: "none !important",
                      borderRadius: "25px",
                    }}
                  >
                    Sort By
                  </MDBDropdownToggle>
                  <MDBDropdownMenu basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem>Separated link</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBRow>
            </MDBCol>
            <MDBCol className="col-md-3">
              <MDBRow className="justify-content-center">
                {" "}
                <p style={{ fontWeight: "500", paddingTop: "10px" }}>
                  Collection
                </p>
                <MDBDropdown>
                  <MDBDropdownToggle
                    outline
                    color="grey"
                    size="sm"
                    style={{
                      boxShadow: "none !important",
                      borderRadius: "25px",
                    }}
                  >
                    Sort By
                  </MDBDropdownToggle>
                  <MDBDropdownMenu basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem>Separated link</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBRow>
            </MDBCol>
            <MDBCol className="col-md-3">
              <MDBRow className="justify-content-center">
                {" "}
                <p style={{ fontWeight: "500", paddingTop: "10px" }}>
                  Collection
                </p>
                <MDBDropdown>
                  <MDBDropdownToggle
                    outline
                    color="grey"
                    size="sm"
                    style={{
                      boxShadow: "none !important",
                      borderRadius: "25px",
                    }}
                  >
                    Sort By
                  </MDBDropdownToggle>
                  <MDBDropdownMenu basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem>Separated link</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="col-12 col-sm-12 col-md-4">
              {" "}
              <ItemCard />
            </MDBCol>
            <MDBCol className="col-12 col-sm-12 col-md-4">
              {" "}
              <ItemCard />
            </MDBCol>
            <MDBCol className="col-12 col-sm-12 col-md-4">
              {" "}
              <ItemCard />
            </MDBCol>
          </MDBRow>{" "}
          <MDBRow>
            <MDBCol className="col-12 col-sm-12 col-md-4">
              {" "}
              <ItemCard />
            </MDBCol>
            <MDBCol className="col-12 col-sm-12 col-md-4">
              {" "}
              <ItemCard />
            </MDBCol>
            <MDBCol className="col-12 col-sm-12 col-md-4">
              {" "}
              <ItemCard />
            </MDBCol>
          </MDBRow>{" "}
          <MDBRow>
            <MDBCol className="col-12 col-sm-12 col-md-4">
              {" "}
              <ItemCard />
            </MDBCol>
            <MDBCol className="col-12 col-sm-12 col-md-4">
              {" "}
              <ItemCard />
            </MDBCol>
            <MDBCol className="col-12 col-sm-12 col-md-4">
              {" "}
              <ItemCard />
            </MDBCol>
          </MDBRow>
        </div>
      </main>
    </React.Fragment>
  );
}
