import classes from './Header.module.css';
import headerLogo from '../../assets/logo.png';
import { Button } from '../UI/Button/Button.tsx';
import { useContext } from 'react';
import { CartContext } from '../../store/CartContext.tsx';
import { UserContext } from '../../store/UserContext.tsx';

export const Header = () => {
    const ctx = useContext(CartContext);
    const userCtx = useContext(UserContext);

    const totalCartItems = ctx.items.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const handleShowCart = () => userCtx.showCart();

    return (
        <header className={classes.header}>
            <div className={classes.headerTitle}>
                <img alt="Food" src={headerLogo} />
                <h1>RG Food</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>
                    Košík ({totalCartItems})
                </Button>
            </nav>
        </header>
    );
};
