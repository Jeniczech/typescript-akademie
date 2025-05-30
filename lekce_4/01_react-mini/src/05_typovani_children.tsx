/* Typování children */

export const Button = (props: {}) => {
    return <button>{props.children}</button>;
};

export const Parent = () => {
    return (
        <>
            {/* @ts-expect-error */}
            <Button></Button>
            <Button>Hello world!</Button>
        </>
    );
};

// ŘEŠENÍ

export const ButtonReseni = (props: { children: React.ReactNode }) => {
    return <button>{props.children}</button>;
};

export const ParentReseni = () => {
    return (
        <>
            <ButtonReseni>Hello world!</ButtonReseni>
            <ButtonReseni children={<div></div>} />
        </>
    );
};