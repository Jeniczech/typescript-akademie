import { Modal } from '../UI/Modal/Modal.tsx';
import { useContext } from 'react';
import { CartContext } from '../../store/CartContext.tsx';
import { currencyFormatter } from '../../utils/utils.ts';
import { Input } from '../UI/Input/Input.tsx';
import { Button } from '../UI/Button/Button.tsx';
import { UserContext } from '../../store/UserContext.tsx';
import classes from './Checkout.module.css';

export const Checkout = () => {
    const ctx = useContext(CartContext);
    const userCtx = useContext(UserContext);

    const cartTotal = ctx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    const handleClose = () => userCtx.hideCheckout();

    return (
        <Modal open={userCtx.progress === 'checkout'} onClose={handleClose}>
            <form>
                <h2>Objednávka</h2>
                <p>Celková částka: {currencyFormatter.format(cartTotal)}</p>
                <Input id="full-name" label="Celé jméno" type="text" />
                <Input id="email" label="Email" type="email" />
                <Input id="street" label="Ulice" type="text" />
                <div className={classes.inputRow}>
                    <Input id="postal-code" label="PSČ" type="text" />
                    <Input id="city" label="Město" type="text" />
                </div>
                <p className={classes.inputRow}>
                    <Button onClick={handleClose} type="button" textOnly>
                        Zavřít
                    </Button>
                    <Button>Odeslat</Button>
                </p>
            </form>
        </Modal>
    );
};
