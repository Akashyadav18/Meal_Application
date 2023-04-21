import React,{ useContext, useEffect, useState} from 'react';

const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealsUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) =>{

    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [showModel, setShowModel] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState(null)
    const [favorites, setFavorites] = useState([])

    const fetchMeals = async (url) => {
        setLoading(true)
        try{
            const response = await fetch(url)
            const data = await response.json()
            if(data.meals){
                setMeals(data.meals) 
            }
            else{
                setMeals([])
            }
        }catch(err){
            console.log(err.response)
        }
        setLoading(false)
    }

    const fetchRandomMeals = () => {
        fetchMeals(randomMealsUrl)
    }

    useEffect(() => {
        fetchMeals(`${allMealsUrl}${searchTerm}`)
    }, [searchTerm])

    const selectMeal = (idMeal) =>{
        const meal = meals.find(meal =>(meal.idMeal === idMeal))
        setSelectedMeal(meal)
        setShowModel(true)
    }
    const closeModel = () =>{
        setShowModel(false)
    }

    const addToFavorites = (idMeal) => {
        const meal = meals.find(meal =>(meal.idMeal === idMeal))
        const updatedFavorites = [...favorites, meal]
        setFavorites(updatedFavorites)
    }

    const removeFromFavorites = (idMeal) => {
        const updatedFavorites = (favorites.filter(meal => meal.idMeal!== idMeal))
        setFavorites(updatedFavorites)
    }

    return (
        <AppContext.Provider value={{meals, loading, setSearchTerm, fetchRandomMeals, showModel, selectMeal,
                                     setSelectedMeal, closeModel, selectedMeal, addToFavorites, 
                                     removeFromFavorites, favorites }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}