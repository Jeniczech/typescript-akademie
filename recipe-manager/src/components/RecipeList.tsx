import { useRecipeData } from '../context/RecipeDataContext';
import { useRecipeFilter } from '../context/RecipeFilterContext';
import RecipeCard from './RecipeCard';
import { MealType } from '../types/types.ts';

const RecipeList = () => {
    const { recipes, isLoading, error } = useRecipeData();
    const { selectedCategory, searchText, sortOrder } = useRecipeFilter();

    const filtered = recipes
        .filter((recipe) => {
            const matchesCategory =
                selectedCategory === MealType.All ||
                recipe.mealType.map((type) => type.toLowerCase()).includes(selectedCategory);
            const matchesSearch = recipe.name.toLowerCase().includes(searchText.toLowerCase());
            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => {
            if (sortOrder === 'asc') return a.name.localeCompare(b.name);
            return b.name.localeCompare(a.name);
        });

    if (isLoading) return <p>Načítání receptů...</p>;
    if (error) return <p>Chyba: {error}</p>;
    if (filtered.length === 0) return <p>Žádné recepty neodpovídají filtru.</p>;

    return (
        <section style={{ display: 'grid', gap: '1rem' }}>
            {filtered.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </section>
    );
};

export default RecipeList;