import React, { useEffect } from "react";
import "../CSS/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import $ from "jquery";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  /*=================================================================
  Some JQuery for the Side Menu interactivity*/
  useEffect(() => {
    let menuBackground = $("#menu__canvasBackground");
    let menuCanvas = $("#menu__canvas");
    let menu_closeIcon = $("#menu__closeIcon");

    /*======================================================
    Initializes Menu Icon functionality -> Opens Side Menu
    ======================================================*/
    $("#menuIcon").on("click", function () {
      menuBackground.removeClass("transparent");
      menuBackground.addClass("opaque");

      menuCanvas.removeClass("translate-left");
      menuCanvas.addClass("translate-zero");

      menu_closeIcon.removeClass("transparent");
      menu_closeIcon.addClass("opaque");
    });
  });
  /*=================================================
  Signs out the user*/
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  /*=================================================
  Calculates total items in basket*/
  const getTotalItems = () => {
    return basket.reduce(
      (total, currentItem) => (total += currentItem.count),
      0
    );
  };

  /*=================================================
  Displays the username*/
  const showUser = () => {
    if (user) {
      let index = user.email.indexOf("@");
      return user.email.substring(0, index);
    } else return "Guest";
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img
              className="header__logo__img"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
          </Link>
        </div>
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
                {getTotalItems()}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
