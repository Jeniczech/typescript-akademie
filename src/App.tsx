import { Header } from './components/Header/Header.tsx';
import { Meals } from './components/Meals/Meals.tsx';
import { CartContextProvider } from './store/CartContext.tsx';
import { UserProgressProvider } from './store/UserContext.tsx';
import { Cart } from './components/Cart/Cart.tsx';
import { Checkout } from './components/Checkout/Checkout.tsx';

export const App = () => (
    <UserProgressProvider>
        <CartContextProvider>
            <Header />
            <Meals />
            <Cart />
            <Checkout />
        </CartContextProvider>
    </UserProgressProvider>
);
