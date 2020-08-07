import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import Avatar from "@material-ui/core/Avatar";
import StarRatingComponent from "react-star-rating-component";

export default function ReviewAndDescription() {
  const [isDescription, setIsDescription] = useState(null);

  const isDescriptionDisplay = Boolean(isDescription);

  return (
    <MDBContainer className="pt-5 pl-5 pr-5">
      <MDBRow className="justify-content-center">
        {isDescriptionDisplay ? (
          <div>
            <MDBBtn
              outline
              color="amber"
              style={{ borderRadius: 25 }}
              value="true"
              onClick={() => setIsDescription(true)}
              className="m-5"
            >
              DESCRIPTION
            </MDBBtn>{" "}
            <a
              style={{ color: "gray" }}
              onClick={() => setIsDescription(false)}
            >
              {" "}
              REVIEWS (2)
            </a>
          </div>
        ) : (
          <div>
            <a style={{ color: "gray" }} onClick={() => setIsDescription(true)}>
              {" "}
              DESCRIPTION (2)
            </a>
            <MDBBtn
              outline
              color="amber"
              style={{ borderRadius: 25 }}
              value="false"
              onClick={() => setIsDescription(false)}
              className="m-5"
            >
              REVIEWS (2)
            </MDBBtn>
          </div>
        )}
      </MDBRow>
      <MDBRow>
        {isDescriptionDisplay ? (
          <MDBRow className="justify-content-center text-center">
            <MDBCol className="md-6 ">
              <MDBIcon
                far
                icon="file-alt"
                size="4x"
                style={{ color: "gray" }}
                className="p-3"
              />
              <h5 className="font-weight-bold p-2">
                Details and product description
              </h5>
              <p>
                High Quality Premium Material with a Premium look. There can be
                other other other o High Quality Premium Material with a Premium
                look. There can be other other other
              </p>
            </MDBCol>
            <MDBCol className="md-6 ">
              <MDBIcon
                icon="pencil-ruler"
                size="4x"
                style={{ color: "gray" }}
                className="p-3"
              />
              <h5 className="font-weight-bold p-2">Material(s) and care</h5>
              <p>Body: 98% Plastic - 2% PVc</p>
            </MDBCol>
          </MDBRow>
        ) : (
          <MDBRow>
            <MDBCol md="5">
              <MDBRow>
                <MDBCol className="justify-content-center text-center" xl="6">
                  <h1 className="font-weight-bold" style={{ fontSize: "70px" }}>
                    4.5
                  </h1>
                  <p style={{ color: "gray" }}>81 all opinios</p>
                </MDBCol>
                <MDBCol xl="6">
                  <MDBRow className="justify-content-start pb-1">
                    <MDBCol size="3">
                      <MDBIcon icon="star" style={{ color: "#ffc107" }} />
                      {" 5 "}
                    </MDBCol>
                    <MDBCol size="9">
                      <div
                        className="progress"
                        style={{ height: "4px", marginTop: "6px" }}
                      >
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-start pb-1">
                    <MDBCol size="3">
                      <MDBIcon icon="star" style={{ color: "#ffc107" }} />
                      {" 4 "}
                    </MDBCol>
                    <MDBCol size="9">
                      <div
                        className="progress"
                        style={{ height: "4px", marginTop: "6px" }}
                      >
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-start pb-1">
                    <MDBCol size="3">
                      <MDBIcon icon="star" style={{ color: "#ffc107" }} />
                      {" 3 "}
                    </MDBCol>
                    <MDBCol size="9">
                      <div
                        className="progress"
                        style={{ height: "4px", marginTop: "6px" }}
                      >
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "35%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-start pb-1">
                    <MDBCol size="3">
                      <MDBIcon icon="star" style={{ color: "#ffc107" }} />
                      {" 2 "}
                    </MDBCol>
                    <MDBCol size="9">
                      <div
                        className="progress"
                        style={{ height: "4px", marginTop: "6px" }}
                      >
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-start pb-1">
                    <MDBCol size="3">
                      <MDBIcon icon="star" style={{ color: "#ffc107" }} />
                      {" 1 "}
                    </MDBCol>
                    <MDBCol size="9">
                      <div
                        className="progress"
                        style={{ height: "4px", marginTop: "6px" }}
                      >
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "15%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
              <MDBRow className="justify-content-center">
                <MDBBtn
                  color="amber"
                  style={{ borderRadius: 25 }}
                  value="false"
                  onClick={() => setIsDescription(false)}
                  className="m-5"
                >
                  ADD OPINION
                </MDBBtn>
              </MDBRow>
            </MDBCol>
            <MDBCol md="1" className="d-none d-md-block"></MDBCol>
            <MDBCol md="6">
              <MDBRow className="justify-content-start">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <MDBCol className="md-11 text-start">
                  <h6 className="font-weight-bold p-2">John Doe</h6>
                  <StarRatingComponent
                    name="rate1"
                    editing={false}
                    starCount={5}
                    value={4.5}
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="justify-content-start">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <MDBCol className="md-11 text-start">
                  <h6 className="font-weight-bold p-2">Eveline Gosok</h6>
                  <StarRatingComponent
                    name="rate1"
                    editing={false}
                    starCount={5}
                    value={4.5}
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="justify-content-end">
                <MDBBtn
                  outline
                  color="blue-grey"
                  style={{ borderRadius: 25 }}
                  value="false"
                  onClick={() => setIsDescription(false)}
                  className="m-5"
                  size="sm"
                >
                  SHOW MORE (2)
                </MDBBtn>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        )}
      </MDBRow>
    </MDBContainer>
  );
}
