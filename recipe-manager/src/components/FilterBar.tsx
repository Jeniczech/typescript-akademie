import React from 'react';
import { useRecipeFilter } from '../context/RecipeFilterContext';
import { MealType, type Order } from '../types/types.ts';

const FilterBar: React.FC = () => {
    const {
        selectedCategory,
        setSelectedCategory,
        searchText,
        setSearchText,
        sortOrder,
        setSortOrder,
    } = useRecipeFilter();

    return (
        <div style={{ marginBottom: '1rem' }}>
            <label>
                Kategorie:
                <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value as MealType)}>
                    <option value={MealType.All}>Vše</option>
                    <option value={MealType.Breakfast}>Snídaně</option>
                    <option value={MealType.Lunch}>Oběd</option>
                    <option value={MealType.Dinner}>Večeře</option>
                    <option value={MealType.Dessert}>Dezert</option>
                </select>
            </label>
            <label style={{ marginLeft: '1rem' }}>
                Hledat:
                <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} />
            </label>
            <label style={{ marginLeft: '1rem' }}>
                Řazení:
                <select value={sortOrder} onChange={e => setSortOrder(e.target.value as Order)}>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </label>
        </div>
    );
};

export default FilterBar;