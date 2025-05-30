import React, { useState } from 'react';
import { recipeSchema, type RecipeFormValues, fieldNames } from '../schemas/recipeSchema';
import { z } from 'zod';
import { MealType } from '../types/types.ts';

const defaultValues: RecipeFormValues = {
    title: '',
    description: '',
    category: MealType.Breakfast,
    ingredients: [],
    steps: [],
};

const RecipeForm: React.FC = () => {
    const [formData, setFormData] = useState<RecipeFormValues>(defaultValues);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const handleChange = (key: keyof RecipeFormValues, value: unknown) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const parsed = recipeSchema.parse(formData);
            console.log('Valid recipe:', parsed);
            alert('Recept odeslán! (viz konzole)');
            setFieldErrors({});
        } catch (err) {
            if (err instanceof z.ZodError) {
                const errors: Record<string, string> = {};

                err.errors.forEach(e => {
                    const key = e.path[0].toString()
                    errors[key] = e.message;
                });
                setFieldErrors(errors);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
            <h2>📝 Nový recept</h2>

            <div>
                <label>Název:</label>
                <input
                    value={formData.title}
                    onChange={e => handleChange(fieldNames.title, e.target.value)}
                />
                {fieldErrors.title && <p style={{ color: 'red' }}>{fieldErrors.title}</p>}
            </div>

            <div>
                <label>Popis:</label>
                <input
                    value={formData.description}
                    onChange={e => handleChange(fieldNames.description, e.target.value)}
                />
                {fieldErrors.description && <p style={{ color: 'red' }}>{fieldErrors.description}</p>}
            </div>

            <div>
                <label>Kategorie:</label>
                <select
                    value={formData.category}
                    onChange={e => handleChange(fieldNames.category, e.target.value)}
                >
                    <option value={MealType.Breakfast}>Snídaně</option>
                    <option value={MealType.Lunch}>Oběd</option>
                    <option value={MealType.Dinner}>Večeře</option>
                    <option value={MealType.Dessert}>Dezert</option>
                </select>
                {fieldErrors.category && <p style={{ color: 'red' }}>{fieldErrors.category}</p>}
            </div>

            <div>
                <label>Ingredience (oddělené čárkou):</label>
                <input
                    onChange={e =>
                        handleChange(
                            fieldNames.ingredients,
                            e.target.value
                                .split(',')
                                .map(i => i.trim())
                                .filter(Boolean)
                                .map(name => ({ name, quantity: '1 ks' }))
                        )
                    }
                />
                {fieldErrors.ingredients && <p style={{ color: 'red' }}>{fieldErrors.ingredients}</p>}
            </div>

            <div>
                <label>Kroky (oddělené čárkou):</label>
                <input
                    onChange={e =>
                        handleChange(
                            fieldNames.steps,
                            e.target.value
                                .split(',')
                                .map(s => s.trim())
                                .filter(Boolean)
                        )
                    }
                />
                {fieldErrors.steps && <p style={{ color: 'red' }}>{fieldErrors.steps}</p>}
            </div>

            <button type="submit">Uložit recept</button>
        </form>
    );
};

export default RecipeForm;