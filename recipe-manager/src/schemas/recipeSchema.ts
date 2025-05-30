import { z } from 'zod';

import { MealType } from '../types/types.ts';

export const fieldNames = {
    title: 'title',
    description: 'description',
    ingredients: 'ingredients',
    steps: 'steps',
    category: 'category',
} as const;

export const recipeSchema = z.object({
    [fieldNames.title]: z.string().min(2),
    [fieldNames.description]: z.string().optional(),
    [fieldNames.category]: z.enum([MealType.Breakfast, MealType.Lunch, MealType.Dinner, MealType.Dessert]),
    [fieldNames.ingredients]: z.array(z.object({
        name: z.string().min(2),
        quantity: z.string(),
    })).min(1),
    [fieldNames.steps]: z.array(z.string().min(2)).min(1),
});

export type RecipeFormValues = z.infer<typeof recipeSchema>;