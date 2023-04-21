import React, {useState} from 'react'
import { useGlobalContext } from '../Context'

const Search = () => {

  const {setSearchTerm,fetchRandomMeals} = useGlobalContext()
  const [search, setSearch] = useState('')

  function handleChange(e){
    setSearch(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    if(search){
      setSearchTerm(search)
      setSearch('')
    }
  }

  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='search' onChange={handleChange} value={search} className='form-input'/>
        <button type='submit' className='btn'>Search</button>
        <button type='button' className='btn btn-hipster' onClick={fetchRandomMeals}>Suprise me!</button>
      </form>
    </header>
  )
}

export default Search

