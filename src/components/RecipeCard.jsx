import './RecipeCard.css' ;

export default function RecipeCard({recipe , onClick}){
    return (
        <div className='recipe-card' onClick={() => onClick(recipe.id)} >
            {   }
            <div className='recipe-card-image'>
                <img src={recipe.image} alt={recipe.title} />
                {  }
                <button className='favorite-btn' onClick={(e) => {
                    e.stopPropagation();
                }}>
                              🤍

                </button>
                 </div>

                 { }
                 <div className='recipe-card-content'>
                    <h3 className='recipe-title'>{recipe.title}</h3>

                    <div className='recipe-meta'>
                        <span className='meta-item'>
                            {recipe.readyInMinutes} mins

                        </span>
                        <span className='meta-item'>
                            {recipe.servings} servings
                        </span>
                    </div>

                    { }
                    <div className='recipe-stats'> 
                    <span className='stat-badge'>{recipe.healthScore}% Healthy</span>
                 </div>
                 </div>
        </div>
    )
}