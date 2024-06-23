import classes from './MealItem.module.css';
import { currencyFormatter } from '../../utils/utils.ts';
import { Button } from '../UI/Button/Button.tsx';
import { Meal } from '../../types.ts';
import { useContext } from 'react';
import { CartContext } from '../../store/CartContext.tsx';

export const MealItem = (meal: Meal) => {
    const ctx = useContext(CartContext);
    const handleAddItem = () => {
        ctx?.addItem(meal);
    };

    return (
        <li className={classes.mealItem}>
            <article>
                <img src={meal.image} alt={meal.name} />
                <div>
                    <h3 className={classes.heading}>{meal.name}</h3>
                    <p className={classes.price}>
                        {currencyFormatter.format(meal.price)}
                    </p>
                    <p className={classes.description}>{meal.description}</p>
                </div>
                <p className={classes.actions}>
                    <Button onClick={handleAddItem}>Koupit</Button>
                </p>
            </article>
        </li>
    );
};
