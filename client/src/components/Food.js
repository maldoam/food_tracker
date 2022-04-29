const Food = ({food}) => {
  return (
    <div className = "food">
      <h3>{food.product_name}</h3>
      <ul>
        {
          food.ingredients_text.replace(/ *\([^)]*\) */g, "").split(",").map((ingredient) => (
            <li>{ingredient}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Food
