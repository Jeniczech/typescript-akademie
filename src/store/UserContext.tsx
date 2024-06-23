import { createContext, ReactNode, useState } from 'react';

interface UserContextProps {
    progress: 'cart' | 'checkout' | '';
    showCart: () => void;
    hideCart: () => void;
    showCheckout: () => void;
    hideCheckout: () => void;
}

export const UserContext = createContext<UserContextProps>(
    {} as UserContextProps
);

export const UserProgressProvider = ({ children }: { children: ReactNode }) => {
    const [userProgress, setUserProgress] =
        useState<UserContextProps['progress']>('');

    const showCart = () => setUserProgress('cart');
    const hideCart = () => setUserProgress('');
    const showCheckout = () => setUserProgress('checkout');
    const hideCheckout = () => setUserProgress('');

    const userProgressCtx: UserContextProps = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
    };

    return (
        <UserContext.Provider value={userProgressCtx}>
            {children}
        </UserContext.Provider>
    );
};
