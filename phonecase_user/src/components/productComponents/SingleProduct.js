import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import RelatedProducts from "./RelatedProducts";
import ReviewAndDescription from "./ReviewAndDescription";
import Footer2 from "../includes/Footer2";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { getSingleProduct } from "../../actions/product.actions";
import { addToShoppingCart } from "../../actions/shoppingCart.actions";

import LoadingWindow from "../LoadingWindow";

const SingleProduct = (props) => {
  let { id } = useParams();
  const [currentImage, setCurrentImage] = useState("");
  const [models, setModels] = useState([]);

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [model, setModel] = useState("");
  const [error, setError] = useState("");
  const [update, setUpdate] = useState("false");
  const [reviewData, setReviewData] = useState("");

  useEffect(() => {
    props.onGetProduct(id);
    setModels(props.product.models);
    setCurrentImage(props.product.imgs[0]);

    let tempReviewData = {
      specs: props.product.specs,
      desc: props.product.desc,
    };
    setReviewData(tempReviewData);
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
    let finalPrice;

    if (props.product.discount) {
      let discount =
        parseFloat(model.price) * parseFloat(props.product.discount);
      finalPrice =
        (parseFloat(model.price) - parseFloat(discount)) * parseInt(quantity);
    } else {
      finalPrice = parseFloat(model.price) * parseInt(quantity);
    }

    finalPrice = finalPrice.toFixed(2);

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

    props.onAddToCart(data);
    setUpdate("true");
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
          }}
        >
          <MDBRow>
            <MDBCol md="1">
              {" "}
              {props.product.imgs.map((image) => {
                return (
                  <MDBRow>
                    <img
                      src={image}
                      className="img-fluid"
                      alt=""
                      style={{ width: "60px", cursor: "pointer" }}
                      onClick={() => setCurrentImage(image)}
                    />
                  </MDBRow>
                );
              })}
            </MDBCol>
            <MDBCol md="4">
              <img src={currentImage} className="img-fluid" alt="" />
            </MDBCol>
            <MDBCol md="1" className="d-md-none d-lg-block"></MDBCol>
            <MDBCol md="6">
              {props.product.discount ? (
                <MDBBtn
                  rounded
                  color="danger"
                  size="sm"
                  style={{ borderRadius: "25px" }}
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
              <div
                style={{ marginLeft: "-2%" }}
                className="input-group mb-3 col-12 col-sm-10 col-md-10 col-lg-8 col-xl-6 "
              >
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
                <MDBCol className="col-7 col-sm-7 col-md-7">
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
        <ReviewAndDescription review={reviewData} />
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
    error: state.shoppingCartData.error || "",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProduct: (id) => {
      dispatch(getSingleProduct(id));
    },
    onAddToCart: (data) => {
      dispatch(addToShoppingCart(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
