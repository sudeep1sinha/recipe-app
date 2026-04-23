import { use, useState } from "react"
import DOMPurify from "dompurify"
import config from "../services/config"

const apiKey = config.apiKey;
const api_url = config.api_url;

export default function SearchBar(){


    const [recipe , setRecipe] = useState([])
    const [query , setQuery] = useState("")
    const [loading , setLoading] = useState(false)

    async function fetchRecipes(){
        setLoading(true)
        const response = await fetch(`${api_url}?query=${query}&addRecipeInformation=true&apiKey=${apiKey}`)
        const data = await response.json()
        if(data){
            setRecipe(data.results)
            setLoading(false)
        }
        console.log(data)
    }

    function handleSubmit(){
        fetchRecipes()

    }
    return (
        <div>
            <div>
                <div>
                    <input
                    type="text"
                    placeholder="enter recipe name"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={handleSubmit} >Search</button>
                </div>
                {loading && (<div>loading... </div>)}

                {recipe.map((meal) => (
                    <div key={meal.id}>
                        <p>Name:{meal.title}</p>
                        <img src={meal.image} alt={meal.title} />
                        <p
  dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(meal.summary)
  }}
></p>
                    </div>
                )) }
            </div>

        </div>
    )
    
    
}