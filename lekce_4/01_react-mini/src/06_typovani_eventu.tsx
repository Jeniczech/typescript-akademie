/* Typování eventů */

interface ButtonWithEventProps {
    className: string;
    children: React.ReactNode;
}

export const Button = ({ children, className, onClick }: ButtonWithEventProps) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

interface ButtonWithEventPropsReseni {
    className: string;
    children: React.ReactNode;
    onClick: React.MouseEventHandler;
}

// ŘEŠENÍ

export const ButtonReseni = ({ children, className, onClick }: ButtonWithEventPropsReseni) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export const Parent = () => {
    return (
        <ButtonReseni
            className="btn"
            onClick={() => {}}
        >
            Click
        </ButtonReseni>
    );
};