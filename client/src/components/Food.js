// import {FaTimes} from "react-icons/fa"
import React from 'react'
import ReactDOM from 'react-dom'

const Food = ({food}) => {
  return (
    <div className = "food">
      <h3>
        {food.product_name}
        {/* <FaTimes /> "X" button*/}
      </h3>
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
