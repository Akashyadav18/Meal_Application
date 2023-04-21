import './App.css';
import Favorites from './components/Favorites';
import Meal from './components/Meal';
import Model from './components/Model';
import Search from './components/Search';

import { useGlobalContext } from './Context';

function App() {

  const {showModel, favorites} = useGlobalContext()

  return (
    <div className="App">
      <Search/>    
      {favorites.length > 0 && <Favorites/> }
      <Meal/>
       {showModel && <Model/> }
    </div>
  );
}

export default App;
