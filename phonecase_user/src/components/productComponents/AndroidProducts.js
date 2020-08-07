import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAndroidProducts } from "../../actions/product.actions";
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

const AndroidProducts = (props) => {
  const [allItems, setAllItems] = useState([]);
  const [processItems, setProcessItems] = useState([]);

  useEffect(() => {
    props.onGetProduct();
    let data = props.products;
    setAllItems(data);
    setProcessItems(data);
  }, []);

  const setItemsLowToHigh = () => {
    let data = allItems;
    data = data.sort(
      (a, b) => parseFloat(a.priceStartAt) - parseFloat(b.priceStartAt)
    );
    setProcessItems(data);
  };

  const setItemsHighToLow = () => {
    let data = allItems;

    data = data.sort(
      (a, b) => parseFloat(b.priceStartAt) - parseFloat(a.priceStartAt)
    );
    setProcessItems(data);
  };

  const setNewToOld = () => {
    let data = allItems;
    data = data.sort((a, b) => b.date - a.date);

    setProcessItems(data);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div
          className="pb-5 pt-5 pl-5 pr-5"
          style={{ backgroundColor: "white", minHeight: "63vh" }}
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
                    <MDBDropdownItem>Price:Low To high</MDBDropdownItem>
                    <MDBDropdownItem>Price:High To Low</MDBDropdownItem>
                    <MDBDropdownItem>New To old</MDBDropdownItem>
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
            {processItems.map((product) => {
              return (
                <MDBCol className="col-12 col-sm-12 col-md-4">
                  {" "}
                  <ItemCard product={product} />
                </MDBCol>
              );
            })}
          </MDBRow>
        </div>
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productData.androidProducts || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProduct: () => {
      dispatch(getAndroidProducts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AndroidProducts);