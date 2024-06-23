import React from 'react';
import classes from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
}

export const Input = ({ id, label, ...props }: InputProps) => {
    return (
        <p className={classes.input}>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...props} />
        </p>
    );
};
