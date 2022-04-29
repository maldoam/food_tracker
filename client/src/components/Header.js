import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({title, onFind, showFindFood}) => {
  return (
    <header className = "header">
      <h1>{title}</h1>
      <Button 
        color = {
          (showFindFood) ? 
          ("crimson") : 
          ("green")
        }
        text = {
          (showFindFood) ? 
          ("Close") :
          ("Find")
        } 
        onClick = {onFind} 
      />
    </header>
  );
}

Header.defaultProps = {
  title: "Food Tracker"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

const headingStyle = {
  color: "red",
  backgroundColor: "black"
};

export default Header;
