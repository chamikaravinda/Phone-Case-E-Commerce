import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter} from 'mdbreact';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import clsx from "clsx";
import {signUp} from "../actions";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: 3,
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },


}));

const SignUP = (config, props) => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <MDBContainer className={classes.form}>
                    <MDBRow>
                        <MDBCol>

                            <p className="h4 text-center mb-4">Create an account and discover the benefits</p>
                            <p className="font-small grey-text d-flex justify-content-start">
                                some text goes here.. some text goes here.. some text goes here.. some text goes
                                here..some text goes here.. some text goes here.. some text goes here..
                            </p>
                            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                First Name
                            </label>
                            <input type="email" style={{borderRadius: 25}} id="defaultFormLoginEmailEx"
                                   className="form-control"/>
                            <br/>
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                Last Name
                            </label>
                            <input type="password" style={{borderRadius: 25}} id="defaultFormLoginPasswordEx"
                                   className="form-control"/>
                            <br/>
                            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                Your email
                            </label>
                            <input type="email" style={{borderRadius: 25}} id="defaultFormLoginEmailEx"
                                   className="form-control"/>
                            <br/>
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                Your password
                            </label>
                            <input type="password" style={{borderRadius: 25}} id="defaultFormLoginPasswordEx"
                                   className="form-control"/>
                            <br/>

                            <MDBRow>
                                <MDBCol>
                                    <p className="font-small grey-text d-flex justify-content-start black-text">
                                        <Checkbox
                                            className={classes.root}
                                            disableRipple
                                            color="default"
                                            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)}/>}
                                            icon={<span className={classes.icon}/>}
                                            inputProps={{'aria-label': 'decorative checkbox'}}
                                            {...props}
                                        /> I agree to the Google Terms of service and privacy policy </p>
                                </MDBCol>
                            </MDBRow>

                            <div className="text-center mb-3">

                            </div>

                            <MDBBtn
                                type="button"
                                gradient="sunny-morning"
                                rounded
                                className="btn-block z-depth-1a"
                                style={{borderRadius: 25}}
                                // onClick={loginClick()}
                            >
                                Sign up
                            </MDBBtn>
                            <MDBModalFooter className="mx-5 pt-3 mb-1">
                                <p className="font-small grey-text d-flex justify-content-end">
                                    Are you already a member?
                                </p>
                            </MDBModalFooter>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </Container>
    );
};

export default SignUP;