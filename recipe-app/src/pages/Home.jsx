import { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard.jsx'
import CategoryButtons from '../components/CategoryButtons.jsx'
import "../App.css"

const Home = () => {
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        getCategory('All')
    }, [])

    const getCategory = async (category) => {

        const categories = ['Chicken', 'Pasta', 'Seafood', 'Cake']

        if (category === 'All') {
            let all = []

            for (let cat of categories) {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
                const data = await res.json()
                all = [...all, ...(data.meals || [])]
            }
            setRecipes(all)
            return
        }

        if (category === 'Cake') {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=cake`)
            const data = await res.json()
            setRecipes(data.meals || [])
            return
        }

        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        const data = await res.json()
        setRecipes(data.meals)
    }



    return (
        <div>
            <div className='container'>
                <h1>Recipe Finder</h1>



                <CategoryButtons getCategory={getCategory} />

                <div className='grid'>
                    {
                        recipes?.map(meal => (
                            <RecipeCard meal={meal} key={meal.idMeal} />
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Home
