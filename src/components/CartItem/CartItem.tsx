import classes from './CartItem.module.css';
import { currencyFormatter } from '../../utils/utils.ts';

interface CartItemProps {
    name: string;
    quantity: number;
    price: number;
    onIncrease: () => void;
    onDecrease: () => void;
}
export const CartItem = ({
    name,
    quantity,
    price,
    onIncrease,
    onDecrease,
}: CartItemProps) => (
    <li className={classes.cartItem}>
        <p>
            {name} - {quantity} x {currencyFormatter.format(price)}
        </p>
        <p className={classes.cartItemActions}>
            <button onClick={onDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease}>+</button>
        </p>
    </li>
);
