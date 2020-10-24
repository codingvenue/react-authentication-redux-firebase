import React from 'react';
import { Link } from 'react-router-dom';
import {
    makeStyles,
    Container,
    Paper
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(3)
    },
}));

const NotFoundPage = () => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper}>
                Not found. <Link to='/login'>Sign in</Link>
            </Paper>
        </Container>
    );
};

export default NotFoundPage;