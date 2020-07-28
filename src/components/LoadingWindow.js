import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(20),
        display: 'flex',
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
}));

export default function LoadingWindow() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only"></span>
                </div> <div className="spinner-grow text-primary" role="status">
                <span className="sr-only"></span>
            </div> <div className="spinner-grow text-primary" role="status">
                <span className="sr-only"></span>
            </div> <div className="spinner-grow text-primary" role="status">
                <span className="sr-only"></span>
            </div> <div className="spinner-grow text-primary" role="status">
                <span className="sr-only"></span>
            </div>
            </div>
        </Container>
    );
}