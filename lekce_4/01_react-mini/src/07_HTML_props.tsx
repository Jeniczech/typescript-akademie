/* Component props */
import { ComponentProps } from "react";

export const Button = ({ className, ...rest }: {}) => {
    return (
        <button {...rest} className={`default-classname ${className}`}></button>
    );
};

export const Parent = () => {
    return <Button onClick={() => {}} type="button"></Button>;
};

// ŘEŠENÍ

interface ButtonPropsReseni {
    className: string;
}

export const ButtonReseni = ({ className, ...rest }: ComponentProps<'button'>) => {
    return (
        <button {...rest} className={`default-classname ${className}`}></button>
    );
};

export const ParentReseni = () => {
    return <ButtonReseni onClick={() => {}} type="button"></ButtonReseni>;
};