import React from 'react';
import TextField from '@mui/material/TextField';

const InputField = ({ label, value, onChange, type = 'text' }) => (
    <TextField
        label={label}
        variant="outlined"
        type={type}
        value={value}
        onChange={onChange}
        fullWidth
    />
);

export default InputField;
