import React from 'react';
import type { Recipe } from '../types/types.ts';

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <article style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem' }}>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} style={{ maxWidth: '100%' }} />
            <p><strong>Kategorie:</strong> {recipe.mealType.join(', ')}</p>
            <p><strong>Kuchyně:</strong> {recipe.cuisine}</p>
            <p><strong>Náročnost:</strong> {recipe.difficulty}</p>
            <p><strong>Čas:</strong> {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</p>
            <p><strong>Ingredience:</strong> {recipe.ingredients.join(', ')}</p>
            <p><strong>Hodnocení:</strong> {recipe.rating} ⭐ ({recipe.reviewCount} recenzí)</p>
        </article>
    );
};

export default RecipeCard;