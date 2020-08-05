import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userSignUp } from "../../actions/user.actions";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModalFooter,
  MDBIcon,
  MDBAlert,
  MDBNotification,
} from "mdbreact";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Checkbox from "@material-ui/core/Checkbox";
import clsx from "clsx";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Snackbar from "@material-ui/core/Snackbar";

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

const SignUp = (props) => {
  const classes = useStyles();

  const [email, setEmail] = React.useState(undefined);
  React.useEffect(() => {}, [setEmail]);

  const [password, setPassword] = React.useState(undefined);
  React.useEffect(() => {}, [password]);

  const [firstname, setFirstName] = React.useState(undefined);
  React.useEffect(() => {}, [setFirstName]);

  const [lastname, setLastName] = React.useState(undefined);
  React.useEffect(() => {}, [setLastName]);

  const [phonenum, setPhonenum] = React.useState("");
  React.useEffect(() => {}, [setPhonenum]);

  const handleEmailChange = (text) => setEmail(text.target.value);
  const handlePasswordChange = (text) => setPassword(text.target.value);
  const handleFirstNameChange = (text) => setFirstName(text.target.value);
  const handlelastNameChange = (text) => setLastName(text.target.value);

  const handleSignUp = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      phonenum: "",
    };
    props.onSignup(data);
  };
  return (
    <Container component="main" style={{ minHeight: "63vh" }}>
      <CssBaseline />
      <div className={classes.paper}>
        <MDBContainer className={classes.form}>
          <form className="needs-validation" onSubmit={handleSignUp}>
            <MDBRow>
              <Link to="/" style={{ color: "black" }}>
                {" "}
                <MDBCol>
                  <a style={{ cursor: "pointer" }}>
                    <h6 className="font-weight-bold">
                      {"   "}
                      <MDBIcon icon="arrow-left" /> {"   "}
                      Back To Shop{" "}
                    </h6>
                  </a>
                </MDBCol>
              </Link>
            </MDBRow>
            <MDBRow>
              <MDBCol className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4 pt-5 ">
                <p className="h4 text-center mb-4">
                  Create an account and discover the benefits
                </p>
                <p className="font-small grey-text d-flex justify-content-start text-center pb-4 pt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <br></br>
                {props.error ? (
                  <>
                    <Alert variant="filled" severity="error">
                      {props.error} !
                    </Alert>
                    <br></br>
                  </>
                ) : (
                  ""
                )}
                <input
                  type="text"
                  style={{ borderRadius: 25 }}
                  id="firstname"
                  name="firstname"
                  onChange={(text) => handleFirstNameChange(text)}
                  className="form-control"
                  placeholder="First Name"
                  required
                />
                <br />
                <input
                  type="text"
                  style={{ borderRadius: 25 }}
                  id="lastname"
                  name="lastname"
                  onChange={(text) => handlelastNameChange(text)}
                  className="form-control"
                  placeholder="Last Name"
                  required
                />

                <br />
                <input
                  type="email"
                  style={{ borderRadius: 25 }}
                  id="email"
                  name="email"
                  onChange={(text) => handleEmailChange(text)}
                  placeholder="Email"
                  className="form-control"
                  required
                />
                <br />
                <input
                  type="password"
                  style={{ borderRadius: 25 }}
                  id="password"
                  name="password"
                  onChange={(text) => handlePasswordChange(text)}
                  className="form-control"
                  placeholder="Password"
                  required
                />
                <br />

                <MDBRow>
                  <MDBCol>
                    <p className="font-small grey-text d-flex justify-content-start black-text">
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
                        required
                      />{" "}
                      I agree to the Google Terms of service and privacy policy{" "}
                    </p>
                  </MDBCol>
                </MDBRow>
                <div className="row d-flex aline-content-center pl-4">
                  <MDBBtn
                    type="submit"
                    color="amber"
                    rounded
                    className="btn-block"
                    style={{ borderRadius: 25 }}
                  >
                    Sign up
                  </MDBBtn>
                  <MDBModalFooter>
                    <p className="font-small grey-text">
                      Are you already a member ?
                      <Link to="/login"> Sign In</Link>
                    </p>
                  </MDBModalFooter>
                </div>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBContainer>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.userData.error || "",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignup: (user) => {
      dispatch(userSignUp(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
