import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getNewArrivals } from "../../actions/product.actions";
import ItemCard from "./ItemCard";
import LoadingWindow from "../LoadingWindow";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import { Link } from "react-router-dom";
import {
  MDBCol,
  MDBRow,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBBtn,
} from "mdbreact";

const NewArrivals = (props) => {
  const [allItems, setAllItems] = useState([]);
  const [processItems, setProcessItems] = useState([]);
  const [showFilters, setShowFilters] = useState(true);
  const [color, setColor] = useState("");

  useEffect(() => {
    props.onGetProduct();
    let data = props.products;
    setAllItems(data);
    setProcessItems(data);
  }, [allItems]);

  const showHideFilters = (isShow) => {
    if (!isShow) {
      setShowFilters(isShow);
      setProcessItems(allItems);
      setColor("");
    } else {
      setShowFilters(isShow);
      setColor("");
    }
  };

  const setItemsLowToHigh = () => {
    let data = processItems.slice(0);
    data.sort((a, b) => a.priceStartAt - b.priceStartAt);
    setProcessItems(data);
  };

  const setItemsHighToLow = () => {
    let data = processItems.slice(0);
    data = data.sort(
      (a, b) => parseFloat(b.priceStartAt) - parseFloat(a.priceStartAt)
    );
    setProcessItems(data);
  };

  const setNewToOld = () => {
    let data = processItems.slice(0);
    data = data.sort((a, b) => b.date - a.date);
    setProcessItems(data);
  };

  const handelFilterChangeColor = (evt) => {
    setColor(evt.target.value);

    if (evt.target.value !== "all") {
      let itemsFromColors = [];

      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].colors.includes(evt.target.value)) {
          itemsFromColors.push(allItems[i]);
        }
      }
      setProcessItems(itemsFromColors);
    } else {
      setProcessItems(allItems);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main style={{ backgroundColor: "white" }}>
        <div
          className="pb-5 pt-5  pl-xl-5  pr-xl-5"
          style={{
            overflow: "hidden",
            marginLeft: "7%",
            marginRight: "6%",
            paddingTop: "4%",
            paddingBottom: "6%",
            minHeight: "63vh",
          }}
        >
          <MDBRow className="pb-5 pt-5" between>
            <MDBCol className="col-12 col-sm-4 col-md-3 col-lg-3">
              <h3 className="font-weight-bold">New Arrivals</h3>
            </MDBCol>
            <MDBCol className="col-12 col-sm-8 col-md-9  col-lg-5">
              <MDBRow end>
                {" "}
                {showFilters ? (
                  <MDBBtn
                    color="white"
                    onClick={() => {
                      showHideFilters(false);
                    }}
                  >
                    Hide Filters
                  </MDBBtn>
                ) : (
                  <MDBBtn
                    color="white"
                    onClick={() => {
                      showHideFilters(true);
                    }}
                  >
                    Show Filters
                  </MDBBtn>
                )}
                <MDBDropdown>
                  <MDBDropdownToggle
                    caret
                    color="white"
                    style={{ boxShadow: "none !important" }}
                  >
                    Sort By
                  </MDBDropdownToggle>
                  <MDBDropdownMenu basic>
                    <MDBDropdownItem onClick={setItemsLowToHigh}>
                      Price : Low To high
                    </MDBDropdownItem>
                    <MDBDropdownItem onClick={setItemsHighToLow}>
                      Price : High To Low
                    </MDBDropdownItem>
                    <MDBDropdownItem onClick={setNewToOld}>
                      New To old
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          {showFilters ? (
            <>
              <MDBRow>
                <MDBCol className="col-sm-5 col-md-6 col-lg-4 col-xl-4">
                  <MDBRow>
                    {" "}
                    <MDBCol className="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
                      <p style={{ fontWeight: "500", paddingTop: "4px" }}>
                        Color
                      </p>
                    </MDBCol>
                    <MDBCol
                      className="col-12 col-sm-8 col-md-9 col-lg-8 col-xl-7"
                      style={{ paddingLeft: "-45px", maxWidth: "200px" }}
                    >
                      <select
                        className="custom-select custom-select-sm"
                        id="color"
                        name="color"
                        style={{ borderRadius: "25px", paddingLeft: "-45px" }}
                        onChange={(e) => handelFilterChangeColor(e)}
                        value={color}
                      >
                        <option disabled selected>
                          Choose...
                        </option>
                        <option value="all">All</option>
                        {props.colors.map((color) => {
                          return <option value={color}>{color}</option>;
                        })}
                      </select>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
              <br></br>
            </>
          ) : (
            ""
          )}
          {processItems.map.length < 1 ? (
            <LoadingWindow />
          ) : (
            <MDBRow>
              {processItems.map((product) => {
                return (
                  <MDBCol className="col-12 col-sm-12 col-md-4">
                    {" "}
                    <ItemCard product={product} />
                  </MDBCol>
                );
              })}
            </MDBRow>
          )}
        </div>
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productData.newArrivalProducts || [],
    colors: state.productData.colors || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProduct: () => {
      dispatch(getNewArrivals());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewArrivals);
