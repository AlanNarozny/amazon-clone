import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  /*=================================================
  Signs out the user*/
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
      </div>
      <div className="header__container extend">
        <div className="header__search">
          <input type="text" className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
      </div>
      <div className="header__container">
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello, {!user ? "Sign in" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Account & Lists"}
              </span>
            </div>
          </Link>

          <Link to={!user || "/orders"}>
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          {/* <Link to="/">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link> */}

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartIcon className="header__basket" />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
