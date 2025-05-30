// Pošleme kód, ať zkusí vyřešit TS chyby
export const Component = () => {
    return (
        <div
            aria-posinset={}
            onChange={}
        />
    );
};

export const ComponentReseni = () => {
    return (
        <div
            aria-posinset={0}
            onChange={(e) =>{}}
            // ukážeme autocomplete
        />
    );
};