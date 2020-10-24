import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../ducks/auth.duck';
import {
    makeStyles,
    Container,
    Avatar,
    Typography
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { LoginForm } from '../../forms';

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

const LoginPage = props => {

    const dispatch = useDispatch();
    const {
        loginInProgress,
        loginError
    } = useSelector(state => state.auth);
    const classes = useStyles();

    const handleSubmit = values => {
        const { email, password } = values;
        const { history } = props;
        dispatch(login(email,password))
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
                    Sign in
                </Typography>
                <LoginForm
                    onSubmit={handleSubmit}
                    inProgress={loginInProgress}
                    onError={loginError}
                />
            </div>
        </Container>
    )
};

export default LoginPage;