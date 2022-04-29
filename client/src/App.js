import {useState} from "react";
import Header from "./components/Header"
import Foods from "./components/Foods"
import FindFood from "./components/FindFood"

function App() {
  const [showFindFood, setShowFindFood] = useState(false);
  const [foods, setFoods] = useState([
    {
      "id": 13,
      "ingredients_text": "Roasted peanuts (peanuts, peanut or canola oil, salt), sesame sticks (unbleached wheat flour, sesame seeds, sunflower oil, salt, beet powder, turmeric), chili crackers (rice, corn starch, soy sauce[water, soybeans, wheat, salt], brown rice syrup, paprika, onion powder, garlic powder), tamari roasted almonds (almonds, tamari shoyu [water, wheat, soybeans, salt]), salt",
      "product_name": "Zen Party Mix"
    },
    {
      "id": 21,
      "ingredients_text": "Yogurt raisins, tamari roasted almonds, organic tamari roasted soy nuts, dark chocolate stars, cranberries, dark chocolate chips, peanut butter chips, milk chocolate raisins, pineapple, papaya, peanut butter peanuts & raisins, roasted peanuts.",
      "product_name": "Energy Power Mix"
    },
    {
      "id": 22,
      "ingredients_text": "Chocolate stars (dehydrated cane juice, sweetened chocolate, cocoa butter, soy lecithin [an emulsifier], natural vanilla), roasted peanuts (peanuts, safflower, peanut, and/or canola oil, salt), dry roasted almonds (almonds, sea salt), dry roasted cashews (cashews, sea salt), dried cranberries (cranberries, evaporated cane juice, sunflower oil), dried cherries, walnuts, dried blueberries (blueberries, evaporated cane juice, sunflower oil).",
      "product_name": "Antioxidant Mix - Berries & Chocolate"
    },
    {
      "id": 25,
      "ingredients_text": "Peanut butter (dry roasted peanuts, palm oil, salt), honey, crispy brown rice (brown rice flour [rice flour, rice bran], honey, calcium carbonate), barley malt, soy lecithin (an emulsifier), sea salt, locust bean gum, carrageenan gum.",
      "product_name": "Peanut Butter Power Chews"
    },
    {
      "id": 83,
      "ingredients_text": "Spanish peanuts, expeller pressed high monounsaturated safflower and/or sunflower oil, salt",
      "product_name": "Spanish Peanuts"
    }
  ]);

  // Find Food
  const findFood = (ingredient) => {
    console.log(ingredient);
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
        ("No Foods to show")
      }
    </div>
  );
}

export default App;
