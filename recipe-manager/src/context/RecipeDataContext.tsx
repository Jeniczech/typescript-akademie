import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Recipe } from '../types/types.ts';

interface RecipeDataContextType {
    recipes: Recipe[];
    isLoading: boolean;
    error?: string;
    refetch: () => void;
}

const RecipeDataContext = createContext<RecipeDataContextType | undefined>(undefined);

export const RecipeDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    const fetchRecipes = async () => {
        setIsLoading(true);
        setError(undefined);

        try {
            const res = await fetch('https://dummyjson.com/recipes');
            const json = await res.json();
            setRecipes(json.recipes);
        } catch (e) {
            setError('Nepodařilo se načíst recepty.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <RecipeDataContext.Provider value={{ recipes, isLoading, error, refetch: fetchRecipes }}>
            {children}
        </RecipeDataContext.Provider>
    );
};

export const useRecipeData = () => {
    const context = useContext(RecipeDataContext);
    if (!context) throw new Error('useRecipeData must be used within a RecipeDataProvider');
    return context;
};
