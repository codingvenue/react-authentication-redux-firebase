import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../../ducks/user.duck';
import { logout } from '../../ducks/auth.duck';
import {
    makeStyles,
    Container,
    Paper,
    Avatar,
    Typography,
    Button
} from '@material-ui/core';
import {
    ExitToApp
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    button: {
        marginTop: theme.spacing(4)
    }
}));

const ProfilePage = props => {

    const dispatch = useDispatch();
    const {
        currentUser
    } = useSelector(state => state.user);
    const classes = useStyles();

    React.useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);

    const handleLogout = () => {
        const { history } = props;
        dispatch(logout())
            .then(() => history.push('/login'))
            .catch(() => { });
    }

    const fullName = currentUser && currentUser.displayName;
    const firstLetterName = fullName ? fullName.charAt(0) : null;
    const email = currentUser && currentUser.email;

    return (
        <Container component="main" maxWidth="xs">

            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {firstLetterName}
                </Avatar>
                <Typography component="h1" variant="h5">
                    {fullName}
                </Typography>
                <Typography color="textSecondary">
                    {email}
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<ExitToApp />}
                    onClick={() => handleLogout()}>
                    Logout
                </Button>
            </Paper>
        </Container>
    )
};

export default ProfilePage;