import React from 'react'
import { useGlobalContext } from '../Context'
import {BsHandThumbsUp} from 'react-icons/bs'

const Meal = () => {
  const {meals, loading, selectMeal,addToFavorites} = useGlobalContext()

  if(loading) {
    return <h3>Loading...</h3>
  }

  if(meals.length < 1) {
    return <h3>No Such Meals Found. Please Try Again</h3>
  }
  return(
    <section className='section-center'>
      {meals.map((meal) => {
        return <article className="single-meal" key={meal.idMeal}>
          <img src={meal.strMealThumb} alt="img"  className='img' onClick={() => selectMeal(meal.idMeal)}/>
        <footer>
          <h5>Name : {meal.strMeal}</h5>
          <button className='like-btn' onClick={() => addToFavorites(meal.idMeal)}><BsHandThumbsUp/></button>
        </footer>
        <div className='category'>
          <h5>Category : {meal.strCategory}</h5>
          <h5>Tags : {meal.strTags}</h5>
        </div>
        </article>
      })}
    </section>
  )
}

export default Meal
