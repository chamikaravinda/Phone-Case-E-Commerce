import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModalFooter, MDBIcon, MDBAlert, MDBNotification} from "mdbreact";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Checkbox from "@material-ui/core/Checkbox";
import clsx from "clsx";
import {dispatchError} from "../../actions";
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

const SignUP = (config, props) => {

    const classes = useStyles();

    const [email, setEmail] = React.useState(undefined);
    React.useEffect(() => {
    }, [setEmail]);

    const [password, setPassword] = React.useState(undefined);
    React.useEffect(() => {
    }, [password]);

    const [firstname, setFirstName] = React.useState(undefined);
    React.useEffect(() => {
    }, [setFirstName]);

    const [lastname, setLastName] = React.useState(undefined);
    React.useEffect(() => {
    }, [setLastName]);

    const [phonenum, setPhonenum] = React.useState("");
    React.useEffect(() => {
    }, [setPhonenum]);


    const handleEmailChange = (text) => setEmail(text.target.value);
    const handlePasswordChange = (text) => setPassword(text.target.value);
    const handleFirstNameChange = (text) => setFirstName(text.target.value);
    const handlelastNameChange = (text) => setLastName(text.target.value);
    const handlePhoneNumChange = (text) => setPhonenum(text.target.value);


    const handleContinue = () => {
        config.pageNavigation("BACK_TO_SHOP");
    }
    const state = (email, password, firstname, lastname, phonenum)
    const [success,setSuccess] = React.useState(false)
    function alertSuccess() {
        setSuccess(true)
    };

    function handliSignUp() {
        const userData = {
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname,
            phonenum: '',
        }
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        };
        fetch('https://us-central1-phone-e-commerce-api.cloudfunctions.net/dev/api/signup/email', requestOptions).then(response => {
            return response.json().then(data => {
                if (response.status === 201) {
                    alertSuccess();

                } else {
                    config.dispatchError(data.message);
                }
            })
        })
    };


    function submitHandler(event) {
        event.preventDefault();
        event.target.className += " was-validated";
    };
    const [open,setOpen] = React.useState(true);

    const checkStatus = config.config.error;

    return (
        <Container component="main">
            <CssBaseline/>
            <div className={classes.paper}>
                {success ?
                    <MDBNotification
                        autohide={4000} // by default = ∞ ms
                        icon="check-circle"
                        iconClassName="green-text"
                        show
                        fade
                        bodyClassName="p-5 font-weight-bold black-text"
                        className="rgba-stylish-light"
                        title="Congratulations !!"
                        titleClassName="p-2 green-text"
                        message="Registration completed Successfully"
                        style={{
                            position: "fixed",
                            top: "30px",
                            right: "30px",
                            zIndex: 9999,

                        }}
                    /> : null
                }
                {checkStatus ?
                    <MDBNotification
                    autohide={4000} // by default = ∞ ms
                    icon="exclamation-circle"
                    iconClassName="red-text"
                    show
                    fade
                    bodyClassName="p-5 font-weight-bold black-text"
                    className="rgba-stylish-light"
                    title=" ERROR !"
                    titleClassName="p-2 red-text"
                    message={config.config.errorMessage}
                    style={{
                    position: "fixed",
                    top: "30px",
                    right: "30px",
                    zIndex: 9999,

                }}
                    />
                    : null}

                <MDBContainer className={classes.form}>
                    <form
                        className="needs-validation"
                        onSubmit={submitHandler}
                        noValidate
                    >
                        <MDBRow>
                            <MDBCol>
                                <a style={{cursor: "pointer"}}
                                   onClick={handleContinue}
                                >
                                    <h6 className="font-weight-bold">
                                        {"   "}
                                        <MDBIcon icon="arrow-left"/> {"   "}
                                        Back To Shop{" "}
                                    </h6>
                                </a>
                            </MDBCol>
                            <MDBCol>
                                <p className="h4 text-center mb-4">
                                    Create an account and discover the benefits
                                </p>
                                <p className="font-small grey-text d-flex justify-content-start text-center">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s
                                </p>
                                <input
                                    type="text"
                                    style={{borderRadius: 25}}
                                    id="firstname"
                                    name="firstname"
                                    onChange={(text) => handleFirstNameChange(text)}
                                    className="form-control"
                                    placeholder="First Name"
                                />
                                <br/>
                                <input
                                    type="text"
                                    style={{borderRadius: 25}}
                                    id="lastname"
                                    name="lastname"
                                    onChange={(text) => handlelastNameChange(text)}
                                    className="form-control"
                                    placeholder="Last Name"
                                />
                                <br/>
                                <input
                                    type="email"
                                    style={{borderRadius: 25}}
                                    id="email"
                                    name="email"
                                    onChange={(text) => handleEmailChange(text)}
                                    placeholder="Email"
                                    className="form-control"
                                    required
                                />
                                <br/>
                                <input
                                    type="password"
                                    style={{borderRadius: 25}}
                                    id="password"
                                    name="password"
                                    onChange={(text) => handlePasswordChange(text)}
                                    className="form-control"
                                    placeholder="Password"
                                />
                                <br/>

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
                                                icon={<span className={classes.icon}/>}
                                                inputProps={{"aria-label": "decorative checkbox"}}
                                                {...props}
                                            />{" "}
                                            I agree to the Google Terms of service and privacy policy{" "}
                                        </p>
                                    </MDBCol>
                                </MDBRow>

                                <div className="text-center mb-3"></div>

                                <MDBBtn
                                    type="button"
                                    color="amber"
                                    rounded
                                    className="btn-block z-depth-1a"
                                    style={{borderRadius: 25}}
                                    onClick={() => handliSignUp(state)}
                                >
                                    Sign up
                                </MDBBtn>
                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        Are you already a member?
                                    </p>
                                </MDBModalFooter>
                            </MDBCol>
                            <MDBCol>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </MDBContainer>
            </div>
        </Container>
    );
};

export default SignUP;
