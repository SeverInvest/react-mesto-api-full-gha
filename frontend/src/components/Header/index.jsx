import images from '../../images';
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import HeaderLink from "../HeaderLink"
import "./style.scss";

function Header({ onSignOut, email, loggedIn }) {

  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [hamburgerOn, setHamburgerOn] = useState(false);
  const [showHeaderUp, setShowHeaderUp] = useState(false);


  useEffect(() => {
    function _handleResize() {
      setCurrentWidth(window.innerWidth);
    }
    window.addEventListener('resize', _handleResize);
    return () => window.removeEventListener('resize', _handleResize);
  });


  useEffect(() => {
    if (currentWidth < 951 && hamburgerOn) {
      setShowHeaderUp(true);
    } else {
      setShowHeaderUp(false);
    }
  }, [currentWidth, hamburgerOn]);


  function handleMenuBtnClick() {
    hamburgerOn ? setHamburgerOn(false) : setHamburgerOn(true);
  }


  return (
    <>
      {loggedIn && showHeaderUp &&
        <div>
          <HeaderLink
            linkTo="../sign-in"
            textLink="Выйти"
            email={email}
            classContainer="header__container header__container_top"
            classEmail="header__link header__link_top header__email"
            classLink="header__link header__link_top header__link_exit"
            onSignOut={onSignOut}
          />
        </div>
      }

      < header className="header" >
        <img
          className="header__logo"
          src={images.logoWhite}
          alt="логотип сайта"
        />
        <Routes>
          <Route
            path="/sign-in"
            element={
              <HeaderLink
                linkTo="../sign-up"
                textLink="Регистрация"
                email={email}
                classLink="header__link"
              />
            }
          />

          <Route
            path="/sign-up"
            element={
              <HeaderLink
                linkTo="../sign-in"
                textLink="Войти"
                email={email}
                classLink="header__link"
              />
            }
          />

          <Route
            exact path="/"
            element={
              <>
                {currentWidth > 950 ?
                  <HeaderLink
                    linkTo="../sign-in"
                    textLink="Выйти"
                    email={email}
                    classContainer="header__container"
                    classEmail="header__link header__email"
                    classLink="header__link header__link_exit"
                    onSignOut={onSignOut}
                  />
                  :
                  <button
                    className={`header__nav-btn ${hamburgerOn && "header__nav-btn_close"}`}
                    type="button"
                    onClick={handleMenuBtnClick}
                  ></button>
                }
              </>
            }
          />
        </Routes>
      </header>
    </>
  );
}
export default Header;