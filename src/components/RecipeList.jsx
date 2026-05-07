import RecipeCard from './RecipeCard';
import './RecipeList.css';

export default function RecipeList({ recipes, onRecipeClick }) {
  
  // Handle empty state
  if (!recipes || recipes.length === 0) {
    return (
      <div className="empty-state">
        <h2>No recipes found</h2>
        <p>Try searching for something else!</p>
      </div>
    );
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe} 
          onClick={onRecipeClick}
        />
      ))}
    </div>
  );
}