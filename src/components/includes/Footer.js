import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBTypography,
  MDBIcon,
} from "mdbreact";

import logo from "../assets/images/logo.jpg";

const Footer = () => {
  return (
    <MDBFooter color={"white"} className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left pr-5 pl-5">
        <MDBRow className="ml-3 ml-lg-3">
          <MDBCol md="5">
            <MDBTypography tag="h4" variant="h4" className="orange-text">
              <img alt="Phone Case Co." src={logo} />
              The Case Co .
            </MDBTypography>
            <p className="black-text">
              We develop and design and give the best and the premium cases to
              our customers.
            </p>
            <MDBRow className="mt-6 mb-3 d-flex justify-content-right">
              <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                <MDBIcon
                  fab
                  icon="facebook-f"
                  size="lg"
                  className="grey-text"
                />
              </a>
              <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                <MDBIcon
                  fab
                  icon="linkedin-in"
                  size="lg"
                  className="grey-text"
                />
              </a>
              <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                <MDBIcon fab icon="instagram" size="lg" className="grey-text" />
              </a>
              <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                <MDBIcon fab className="fa-twitter grey-text fa-lg" />
              </a>
              <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                <MDBIcon fab icon="youtube" size="lg" className="grey-text" />
              </a>
            </MDBRow>
          </MDBCol>

          <div className="mt-2 mb-6 d-flex justify-content-right">
            <MDBCol md="5">
              <MDBTypography
                className="black-text h4 text-center py-2"
                variant="h6"
              >
                Shopping online
              </MDBTypography>
              <ul>
                <li className="list-unstyled">
                  <small>
                    <a className="black-text" tag="p" href="#!">
                      Shopping & delivery
                    </a>
                  </small>
                </li>
                <li className="list-unstyled">
                  <small>
                    <a className="black-text" href="#!">
                      Return
                    </a>
                  </small>
                </li>
                <li className="list-unstyled">
                  <small>
                    <a className="black-text" href="#!">
                      Terms of Use
                    </a>
                  </small>
                </li>
                <li className="list-unstyled">
                  <small>
                    <a className="black-text" href="#!">
                      Cookie Policy
                    </a>
                  </small>
                </li>
                <li className="list-unstyled">
                  <small>
                    <a className="black-text" href="#!">
                      About us
                    </a>
                  </small>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md={"4"}>
              <MDBTypography
                className="black-text h4 text-center py-2"
                variant="h6"
              >
                Information
              </MDBTypography>
              <ul>
                <li className="list-unstyled">
                  <small>
                    <a className="black-text" href="#!">
                      Newsletters
                    </a>
                  </small>
                </li>
                <li className="list-unstyled">
                  <small>
                    <a className="black-text" href="#!">
                      Site Feedback
                    </a>
                  </small>
                </li>
                <li className="list-unstyled">
                  <small>
                    <a className="black-text" href="#!">
                      E-Gift Vouchers
                    </a>
                  </small>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md={"5"}>
              <MDBTypography
                className="black-text h4 text-center py-2"
                variant="h6"
              >
                Contact
              </MDBTypography>
              <ul>
                <li className="list-unstyled h8">
                  <small>
                    <a className="black-text" href="#!">
                      team@thecaseco.lk
                    </a>
                  </small>
                </li>
                <li className="list-unstyled">
                  <small>
                    <p className="black-text">Hotline : +94 76 243 5678</p>
                  </small>
                </li>
              </ul>
            </MDBCol>
          </div>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBRow>
          <MDBCol>
            {" "}
            DESIGNED & DEVELOPED BY ICEO.CO - &copy; {new Date().getFullYear()}.
            ALL RIGHTS RESERVED
          </MDBCol>
          <MDBCol>
            {" "}
            &copy; {new Date().getFullYear()} The Case Co.ALL RIGHTS RESERVED
          </MDBCol>
        </MDBRow>
      </div>
    </MDBFooter>
  );
};

export default Footer;
