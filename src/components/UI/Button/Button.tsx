import React, { ReactNode } from 'react';
import classes from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    textOnly?: boolean;
}

export const Button = ({ children, textOnly, ...props }: ButtonProps) => {
    const cssClasses = textOnly ? classes.textButton : classes.button;

    return (
        <button className={cssClasses} {...props}>
            {children}
        </button>
    );
};
