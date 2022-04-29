import {useState, useEffect} from "react";
import Header from "./components/Header"
import Foods from "./components/Foods"
import FindFood from "./components/FindFood"

function App() {
  const [showFindFood, setShowFindFood] = useState(false);
  const [foods, setFoods] = useState([]);


  const fetchFoods = async (ingredient) => {
    const res = await fetch(`http://3.91.176.125/api/food/${ingredient}`);
    const data = await res.json();

    return data;
  }

  // Find Food
  const findFood = async (ingredient) => {
    const foodsRequested = await fetchFoods(ingredient);
    console.log("foodsRequested: ", foodsRequested["foods"]);
    setFoods(foodsRequested["foods"]);
  }

  return (
    <div className = "container">
      <Header 
        onFind = {() => setShowFindFood(!showFindFood)} 
        showFindFood = {showFindFood}
      />
      {
        (showFindFood) ? 
        (<FindFood onFind = {findFood}/>) :
        ("")
      }
      {
        (foods.length > 0) ? 
        (<Foods foods = {foods}/>) : 
        ("No Items to show")
      }
    </div>
  );
}

export default App;
