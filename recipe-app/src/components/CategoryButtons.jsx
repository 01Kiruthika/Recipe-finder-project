import React from 'react'
import { useState} from 'react'
import './RecipeCard.css'

const CategoryButtons = ({ getCategory }) => {

    const categories = ['All', 'Chicken', 'Pasta', 'Seafood', 'Cake']

    const [active, setActive] = useState('All')

    const handleClick = (cat) => {
        setActive(cat)
        getCategory(cat)
    }

    return (
        <div className='category-wrapper'>
            {categories.map(cat => (
                <button
                    key={cat}
                    className={active === cat ? 'active' : ''}
                    onClick={() => handleClick(cat)}
                >
                    <span>{cat}</span>
                </button>
            ))}
        </div>
    )
}

export default CategoryButtons
