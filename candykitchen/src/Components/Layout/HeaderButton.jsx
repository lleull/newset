import "./Header.css";
import React from "react";
import shopcarrt from "../../assests/shopping-bag.png";

const HeaderButton = (props) => {
  return (
    <>
      <button onClick={props.setcart}>
        <img className="shopcart" src={shopcarrt} alt="shop" />
        YourCart <p className="Num">{0}</p>
      </button>
    </>
  );
};

export default HeaderButton;
