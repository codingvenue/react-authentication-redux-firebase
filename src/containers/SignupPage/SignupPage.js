import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../ducks/auth.duck';
import {
    makeStyles,
    Container,
    Avatar,
    Typography
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { SignupForm } from '../../forms';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

const SignupPage = props => {

    const dispatch = useDispatch();
    const {
        signupInProgress,
        signupError
    } = useSelector(state => state.auth);
    const classes = useStyles();

    const handleSubmit = values => {
        const { history } = props;
        dispatch(signup(values))
            .then(() => history.push('/profile'))
            .catch(() => {/*Already handled */ })
    }

    return (
        <Container component="main" maxWidth="xs">

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <SignupForm
                    onSubmit={handleSubmit}
                    inProgress={signupInProgress}
                    onError={signupError}
                />
            </div>
        </Container>
    )
};

export default SignupPage;