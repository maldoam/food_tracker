import {useState} from "react";

const FindFood = ({onFind}) => {
  const [ingredient, setIngredient] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!ingredient) {
      alert("Please enter an ingredient");
      return;
    }

    onFind(ingredient);
    setIngredient("")
  }

  return (
    <form className = "find-form" onSubmit = {onSubmit}>
      <div className = "form-control">
        <label>Find Food</label>
        <input 
          type = "text" 
          placeholder = "Enter Ingredient" 
          value = {ingredient} 
          onChange = {(e) => setIngredient(e.target.value)}
        />
      </div>
      <input className = "btn btn-block" type = "submit" value = "Find Food" />
    </form>
  );
}

export default FindFood;
