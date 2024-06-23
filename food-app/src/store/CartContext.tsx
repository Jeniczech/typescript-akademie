import React, { createContext, useReducer } from 'react';
import { Meal } from '../types.ts';

interface ApplicationState {
    items: Meal[];
}

interface ApplicationContext {
    items: Meal[];
    addItem: (item: Meal) => void;
    removeItem: (id: number) => void;
}

type Action =
    | { type: 'ADD_ITEM'; payload: Meal }
    | { type: 'REMOVE_ITEM'; payload: number };

const cartReducer: React.Reducer<ApplicationState, Action> = (
    state,
    action
): ApplicationState => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const exists = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (!exists) {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                };
            } else {
                const updatedItems = state.items.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );

                return {
                    ...state,
                    items: updatedItems,
                };
            }
        }

        case 'REMOVE_ITEM': {
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload
            );

            if (itemIndex === -1) {
                return state;
            }

            const existingItem = state.items[itemIndex];

            if (existingItem.quantity <= 1) {
                const updatedItems = state.items.filter(
                    (_, index) => index !== itemIndex
                );

                return {
                    ...state,
                    items: updatedItems,
                };
            } else {
                const updatedItems = state.items.map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );

                return {
                    ...state,
                    items: updatedItems,
                };
            }
        }

        default:
            return state;
    }
};

export const CartContext = createContext<ApplicationContext>(
    {} as ApplicationContext
);

export const CartContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    const addItem = (item: Meal) =>
        dispatchCartAction({ type: 'ADD_ITEM', payload: item });
    const removeItem = (id: number) =>
        dispatchCartAction({ type: 'REMOVE_ITEM', payload: id });

    const cartContext: ApplicationContext = {
        items: cart.items,
        addItem,
        removeItem,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};
