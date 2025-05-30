import RecipeList from './components/RecipeList.tsx';
import FilterBar from './components/FilterBar.tsx';
import RecipeForm from './components/RecipeForm.tsx';
import { RecipeFilterProvider } from './context/RecipeFilterContext.tsx';
import { RecipeDataProvider } from './context/RecipeDataContext.tsx';

const App = () => {
    return (
        <RecipeFilterProvider>
            <RecipeDataProvider>
                <main style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
                    <h1>🍽 Recipe Manager</h1>
                    <RecipeForm />
                    <FilterBar />
                    <RecipeList />
                </main>
            </RecipeDataProvider>
        </RecipeFilterProvider>
    );
};

export default App;
