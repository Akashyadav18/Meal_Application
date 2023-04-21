import React from 'react'
import { useGlobalContext } from '../Context'

const Model = () => {

  const { selectedMeal, closeModel } = useGlobalContext()

  return (
    <aside className='modal-overlay'>
      <div className='modal-container'>
        <button onClick={closeModel} className='closed-btn'>X</button>
        <img src={selectedMeal.strMealThumb} alt='img' className='img modal-img'/>
        <div className='modal-content'>
          <h4>{selectedMeal.strMeal}</h4>
          <div className='video-btn'>
            <a href={selectedMeal.strYoutube} target='_blank' className='video-btn'>Video</a>
          </div>
          <h5>Cooking Instruction</h5>
          <p>{selectedMeal.strInstructions}</p>
          <a href={selectedMeal.strSource} target='_blank'>Original Source</a>
        </div>
        <button onClick={closeModel} className='btn btn-hipster close-btn'>Close</button>
      </div>
    </aside>

  )
}

export default Model
