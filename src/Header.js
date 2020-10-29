import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import BrandLogo from "./Photos/Capture.PNG";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={BrandLogo} />
      </Link>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, Guest!!</span>

          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <Link to="/orders">
          <div id="returnsorders" className="header__option">
            <span className="header__optionLineOne">Returns</span>

            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div id="favourites" className="header__option">
          <span className="header__optionLineOne">Your</span>

          <span className="header__optionLineTwo">Favourites</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
