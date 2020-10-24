import React from 'react';
import { Field } from 'react-final-form';
import {
    TextField,
} from '@material-ui/core';

function FieldTextInputComponent(props) {

    const {
        input,
        ...rest
    } = props;

    return (
        <TextField
            fullWidth
            {...input}
            {...rest}
        />
    );
};

function FieldTextInput(props) {
    return <Field component={FieldTextInputComponent} {...props} />
}

export default FieldTextInput;