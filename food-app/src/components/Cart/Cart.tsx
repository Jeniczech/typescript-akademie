import { useContext } from 'react';
import { CartContext } from '../../store/CartContext.tsx';
import { Modal } from '../UI/Modal/Modal.tsx';
import classes from './Cart.module.css';
import { currencyFormatter } from '../../utils/utils.ts';
import { Button } from '../UI/Button/Button.tsx';
import { UserContext } from '../../store/UserContext.tsx';
import { CartItem } from '../CartItem/CartItem.tsx';

export const Cart = () => {
    const ctx = useContext(CartContext);
    const userCtx = useContext(UserContext);

    const cartTotal = ctx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    const handleCloseCart = () => userCtx.hideCart();

    const handleGoToCheckout = () => userCtx.showCheckout();

    return (
        <Modal
            open={userCtx.progress === 'cart'}
            onClose={userCtx.progress === 'cart' ? handleCloseCart : null}
        >
            <h2 className={classes.cartHeading}>Košík</h2>
            <ul className={classes.cartList}>
                {ctx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        onIncrease={() => ctx.addItem(item)}
                        onDecrease={() => ctx.removeItem(item.id)}
                    />
                ))}
            </ul>
            <p className={classes.cartTotal}>
                {currencyFormatter.format(cartTotal)}
            </p>
            <p className={classes.modalActions}>
                <Button textOnly onClick={handleCloseCart}>
                    Zavřít
                </Button>
                {ctx.items.length > 0 && (
                    <Button onClick={handleGoToCheckout}>Objednat</Button>
                )}
            </p>
        </Modal>
    );
};
