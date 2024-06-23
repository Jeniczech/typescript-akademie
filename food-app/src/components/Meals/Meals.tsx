import classes from './Meals.module.css';
import { useFetch } from '../../hooks/useFetch.tsx';
import { MealItem } from '../MealItem/MealItem.tsx';
import { Meal } from '../../types.ts';

export const Meals = () => {
    const { data, loading, error } = useFetch<Meal[]>(
        'https://rg-food-app-default-rtdb.firebaseio.com/meals.json'
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                <h3>{error.name}</h3>
                <p>{error.message}</p>
            </div>
        );
    }

    if (!data) {
        return <div>No data...</div>;
    }

    return (
        <ul className={classes.meals}>
            {data.map((item) => (
                <MealItem
                    key={item.id}
                    description={item.description}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    id={item.id}
                    quantity={0}
                />
            ))}
        </ul>
    );
};
