import { useNavigate } from 'react-router-dom'
import './RecipeCard.css'

const RecipeCard = ({ meal }) => {
    const navigate = useNavigate()

    return (
        <div className='card'>
            <img src={meal.strMealThumb} />
            <h3>{meal.strMeal}</h3>

            <button onClick={() => navigate(`/recipe/${meal.idMeal}`)}>
                View Recipe
            </button>

        </div>
    )
}

export default RecipeCard
