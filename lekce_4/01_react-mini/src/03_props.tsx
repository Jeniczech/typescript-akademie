import React from "react";

export const Button = (props: unknown) => {
    return <button className={props.className}></button>;
};

export const Parent = () => {
    return (
        <>
            {/* @ts-expect-error */}
            <Button></Button>

            <Button className="my-class"></Button>
        </>
    );
};

// ŘEŠENÍ

interface ButtonPros {
    className: string;
}

export const ButtonReseni = (props: { className: string }) => {
    const { className }: ButtonPros = props;
    return <button className={props.className}></button>;
};

export const ParentReseni = () => {
    return (
        <>
            <ButtonReseni className="header"></ButtonReseni>
            <ButtonReseni className="my-class"></ButtonReseni>
        </>
    );
};