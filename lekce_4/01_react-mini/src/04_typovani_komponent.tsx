/* Typování komponent */

export const MyComponent = (props: { className: string }) => {
    return {
        number: 123
    };
};

export const App = () => {
    return (
        <MyComponent className="header" />
    );
};

// ŘEŠENÍ

interface Props {
    className: string
}

export const MyComponentReseni: React.FC<Props> = (props: Props) => {
    return <div></div>
};

export const AppReseni = () => {
    return (
        <MyComponentReseni className="header" />
    )
};
