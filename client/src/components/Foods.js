import React from 'react'
import ReactDOM from 'react-dom'
import Food from "./Food"

const Foods = ({foods}) => {
  return (
    <>
      {foods.map((food) => (
        <Food key = {food.id} food = {food}/>
      ))}
    </>
  );
}

export default Foods;
