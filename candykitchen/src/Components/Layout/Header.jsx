import React from "react";
import "./Header.css";
import HeaderButton from "./HeaderButton";
import Foodimage from '../../assests/stefan-vladimirov-Q_Moi2xjieU-unsplash (1).jpg'
const Header = (props) => {
  return (
    <React.Fragment>
      <div className="header">
        <h1>ReactMeals</h1>
        <HeaderButton setcart={props.setcart}/>
        </div>
        <div className="main-image">
         <img src={Foodimage} alt="Vegetable"/>
        </div>
      
    </React.Fragment>
  );
};

export default Header;

