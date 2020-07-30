import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModalFooter,
  MDBIcon,
} from "mdbreact";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import clsx from "clsx";
import gmail from "../assets/images/gmail.png";

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

const Login = (config, props) => {
  const classes = useStyles();
  const signUp = ()=>{
    config.signUp();
  }

  const handleContinue = () =>{
    config.pageNavigation("BACK_TO_SHOP");
  }

  return (
    <Container component="main" >
      <CssBaseline />
      <div className={classes.paper}>
        <MDBContainer className={classes.form}>
          <MDBRow>
            <MDBCol>
              <a style={{ cursor: "pointer" }}
                  onClick={handleContinue}
              >
                <h6 className="font-weight-bold">
                  {"   "}
                  <MDBIcon icon="arrow-left" /> {"   "}
                  Back To Shop{" "}
                </h6>
              </a>
            </MDBCol>

            <MDBCol>
              <p className="h4 text-center mb-4">Log in</p>
              <p className="font-small grey-text d-flex justify-content-center text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </p>
              <br></br>
              <input
                type="email"
                style={{ borderRadius: 25 }}
                id="defaultFormLoginEmailEx"
                className="form-control"
                placeholder=" E-mail"
              />
              <br />
              <input
                type="password"
                style={{ borderRadius: 25 }}
                id="defaultFormLoginPasswordEx"
                className="form-control"
                placeholder=" Password"
              />
              <MDBRow>
                <MDBCol>
                  <MDBRow>
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
                      {...props}
                    />
                    <p className="font-small grey-text d-flex justify-content-start mt-3">
                      {" "}
                      keep me signed in{" "}
                    </p>
                  </MDBRow>
                </MDBCol>
                <MDBCol>
                  <p className="font-small blue-text d-flex justify-content-end pb-3 mt-3">
                    Forgot
                    <a href="#!" className="blue-text ml-1">
                      Password?
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>

              <MDBRow between className="d-flex center">
                <MDBCol className="col-12 col-sm-12 col-md-6 pt-2 ">
                  {" "}
                  <MDBBtn
                    type="button"
                    color="indigo darken-3"
                    rounded
                    style={{ borderRadius: 25 }}
                    className="mr-md-3 z-depth-1a  btn-block"
                    social="fb"
                  >
                    <MDBIcon fab icon="facebook-f" className="pr-1" /> Facebook
                  </MDBBtn>
                </MDBCol>
                <MDBCol className="col-12 col-sm-12 col-md-6 pt-2 text-center">
                  {" "}
                  <MDBBtn
                    type="button"
                    color="danger"
                    rounded
                    outline
                    className="mr-md-3 z-depth-1a btn-block"
                    style={{ borderRadius: 25 }}
                  >
                    <img src={gmail} style={{ paddingRight: "25px" }} />
                    Gmail
                  </MDBBtn>
                </MDBCol>
                <MDBCol className="pt-2">
                  <MDBBtn
                    type="button"
                    color="amber"
                    rounded
                    className="btn-block"
                    style={{ borderRadius: 25 }}
                  >
                    Sign in
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">
                  Not a member yet?
                  <a href="#!" className="tell-text ml-1" onClick={signUp}>
                    Sign Up
                  </a>
                </p>
              </MDBModalFooter>
            </MDBCol>
            <MDBCol>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Container>
  );
};

export default Login;
