import React, { createContext, useContext, useState } from 'react';

import { MealType, type Order } from '../types/types.ts';

interface RecipeFilterContextType {
    selectedCategory: MealType;
    setSelectedCategory: (category: MealType) => void;
    searchText: string;
    setSearchText: (text: string) => void;
    sortOrder: Order;
    setSortOrder: (order: Order) => void;
}

const RecipeFilterContext = createContext<RecipeFilterContextType | undefined>(undefined);

export const RecipeFilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState<MealType>(MealType.All);
    const [searchText, setSearchText] = useState('');
    const [sortOrder, setSortOrder] = useState<Order>('asc');

    return (
        <RecipeFilterContext.Provider
            value={{ selectedCategory, setSelectedCategory, searchText, setSearchText, sortOrder, setSortOrder }}
        >
            {children}
        </RecipeFilterContext.Provider>
    );
};

export const useRecipeFilter = () => {
    const context = useContext(RecipeFilterContext);
    if (!context) throw new Error('useRecipeFilter must be used within a RecipeFilterProvider');
    return context;
};