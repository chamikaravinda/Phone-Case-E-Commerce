import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import RelatedProducts from "./RelatedProducts";
import ReviewAndDescription from "./ReviewAndDescription";
import Footer2 from "../includes/Footer2";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { getSingleProduct } from "../../actions/product.actions";
import LoadingWindow from "../LoadingWindow";

const SingleProduct = (props) => {
  let { id } = useParams();
  const [models, setModels] = useState([]);

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [model, setModel] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    props.onGetProduct(id);
    let tempmodels = [];
    let tempId = 0;
    props.product.models.forEach((element) => {
      element.id = ++tempId;
      tempmodels.push(element);
    });
    setModels(tempmodels);
  }, []);

  const handleSelectModel = (value) => {
    models.forEach((model) => {
      if (value == model.id) {
        setModel(model);
      }
    });
  };

  const handleAddToCart = () => {
    setError("");

    if (!color) {
      setError("Select a Color");
      return;
    }

    if (!model) {
      setError("Select a Model");
      return;
    }

    if (quantity < 1) {
      setError("Quntity should be larger than 0");
      return;
    }

    let finalPrice =
      (model.price - model.price * props.product.discount) * quantity;

    let data = {
      itemId: props.product.itemId,
      itemName: props.product.itemName,
      price: finalPrice,
      brand: model.brand,
      model: model.model,
      imgs: props.product.imgs,
      qty: quantity,
      discount: props.product.discount,
    };

    console.log(data);
  };

  if (props.product.itemId) {
    return (
      <div style={{ background: "white" }}>
        <div
          style={{
            overflow: "hidden",
            paddingLeft: "7%",
            paddingRight: "7%",
            paddingTop: "4%",
            paddingBottom: "6%",
          }}
        >
          <MDBRow>
            <MDBCol md="1"> </MDBCol>
            <MDBCol md="4">
              <img src={props.product.imgs[0]} className="img-fluid" alt="" />
            </MDBCol>
            <MDBCol md="1"></MDBCol>
            <MDBCol md="6">
              {props.product.discount ? (
                <MDBBtn
                  rounded
                  color="danger"
                  size="sm"
                  style={{ borderRadius: 25 }}
                >
                  SALE
                </MDBBtn>
              ) : (
                ""
              )}
              <h3 className="pt-2">{props.product.itemName}</h3>
              <MDBRow className="pl-3">
                {props.product.discount ? (
                  <>
                    <h5
                      className="pr-4"
                      style={{ color: "red", fontWeight: "500" }}
                    >
                      $
                      {props.product.priceStartAt -
                        props.product.priceStartAt * props.product.discount}
                    </h5>
                    <h5
                      style={{
                        color: "gray",
                        fontWeight: "500",
                      }}
                    >
                      <del>${props.product.priceStartAt}</del>
                    </h5>
                  </>
                ) : (
                  <h5
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    ${props.product.priceStartAt}
                  </h5>
                )}
              </MDBRow>
              <br></br>
              <p>Colors</p>
              <MDBRow className="pl-3">
                {props.product.colors.map((col) => {
                  let str = col;
                  let res = str.toLowerCase();
                  if (color === res) {
                    return (
                      <div
                        onClick={() => setColor(res)}
                        style={{
                          height: "25px",
                          width: "25px",
                          borderColor: "black",
                          borderWidth: "1px",
                          position: "relative",
                          borderStyle: "solid",
                          cursor: "pointer",
                          marginLeft: "13px",
                        }}
                      >
                        <div
                          style={{
                            height: "20px",
                            width: "20px",
                            backgroundColor: `${res}`,
                            cursor: "pointer",
                            margin: "2px",
                          }}
                        ></div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        onClick={() => setColor(res)}
                        style={{
                          height: "20px",
                          width: "20px",
                          backgroundColor: `${res}`,
                          cursor: "pointer",
                          margin: "2px",
                        }}
                      ></div>
                    );
                  }
                })}
              </MDBRow>
              <br></br>
              <p>Model</p>
              <div className="input-group mb-3 col-12 col-sm-10 col-md-10 col-lg-8 col-xl-6 ">
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  style={{ borderRadius: "25px", height: "45px" }}
                  onChange={(e) => handleSelectModel(e.target.value)}
                >
                  <option disabled selected>
                    Choose...
                  </option>
                  {models.map((model) => {
                    return (
                      <option value={model.id}>
                        {model.brand} {model.model}
                      </option>
                    );
                  })}
                </select>
              </div>
              <br></br>
              <p>Quantity</p>
              <MDBRow>
                <MDBCol className="pt-2 ">
                  {" "}
                  <div
                    className="def-number-input number-input ml-1 "
                    style={{ borderRadius: "25px", padding: "5px" }}
                  >
                    <button
                      onClick={() => setQuantity(quantity - 1)}
                      className="minus"
                    ></button>
                    <input
                      className="quantity"
                      name="quantity"
                      value={quantity}
                      onChange={() => console.log("change")}
                      type="number"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="plus"
                    ></button>
                  </div>
                </MDBCol>
                <MDBCol>
                  <MDBBtn
                    color="amber"
                    style={{ borderRadius: 25 }}
                    value="false"
                    onClick={handleAddToCart}
                  >
                    ADD TO CART
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
              <br></br>
              {error ? (
                <div>
                  <h6 style={{ color: "red" }}>{error}</h6>
                  <br></br>
                </div>
              ) : (
                ""
              )}
              {props.error ? (
                <div>
                  <h6 style={{ color: "red" }}>{props.error}</h6>
                  <br></br>
                </div>
              ) : (
                ""
              )}
            </MDBCol>
          </MDBRow>
        </div>
        <ReviewAndDescription />
        <RelatedProducts />
        <Footer2 />
      </div>
    );
  } else {
    return <LoadingWindow />;
  }
};

const mapStateToProps = (state) => {
  return {
    product: state.productData.product || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProduct: (id) => {
      dispatch(getSingleProduct(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
