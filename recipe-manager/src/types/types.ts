export enum MealType {
    Breakfast = 'breakfast',
    Lunch = 'lunch',
    Dinner = 'dinner',
    Dessert = 'dessert',
    All = 'all',
}

export type Order = 'asc' | 'desc';

type MealDifficulty = 'Easy' | 'Medium' | 'Hard';

export interface Recipe {
    id: number;
    name: string;
    image: string;
    caloriesPerServing: number;
    cookTimeMinutes: number;
    prepTimeMinutes: number;
    cuisine: string;
    difficulty: MealDifficulty;
    ingredients: string[];
    instructions: string[];
    mealType: MealType[];
    rating: number;
    reviewCount: number;
    servings: number;
    tags: string[];
    userId: number;
}