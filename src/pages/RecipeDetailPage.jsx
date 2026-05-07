import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DOMPurify from "dompurify"
import config from "../services/config"

const apiKey = config.apiKey;
const api_url = config.api_url;

export default function RecipeDetailPage() {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch full recipe details
    const fetchRecipeDetails = async () => {
      setLoading(true);
      const response = await fetch(`${api_url}/recipes/${id}/information?apiKey=${apiKey}`);
      const data = await response.json();
      setRecipe(data);
      setLoading(false);
    };

    fetchRecipeDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      
      {/* Full recipe content from your screenshot */}
      <div className="recipe-info">
        <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
        <p>Price: ${recipe.pricePerServing}</p>
       {/* <p>Calories: {recipe.nutrition[0].amount}</p>   */}
        {/* ... more details ... */}
      </div>
    </div>
  );
}