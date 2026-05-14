import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../App.css'

const RecipeDetails = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [meal, setMeal] = useState(null)

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        )

        const data = await res.json()
        setMeal(data.meals[0])
    }

    if (!meal) return <h1>Loading...</h1>

    return (
        <div className='details'>

            {/* Back button */}
            <button
                className='back-btn'
                onClick={() => navigate('/')}
            >
                ← Back to Home
            </button>

            <div className='top'>
                <img src={meal.strMealThumb} />

                <div className='ingredients'>
                    {
                        Array.from({ length: 20 }, (_, i) => {

                            const ingredient = meal[`strIngredient${i + 1}`]
                            const measure = meal[`strMeasure${i + 1}`]

                            if (!ingredient) return null

                            return (
                                <div key={i}>
                                    <img
                                        src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}
                                    />

                                    <p>{measure}</p>
                                    <p>{ingredient}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <h1>Instructions</h1>
            <p>{meal.strInstructions}</p>

            <a href={meal.strYoutube} target='_blank'>
                <span>Watch on YouTube</span>
            </a>

        </div>
    )
}

export default RecipeDetails