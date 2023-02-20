import './header.css';
import navLogo from "../../assets/icons/logo.svg";

export const Header = () => {
  const buttons = ["Туры", "Создать тур", "Отзывы", "Истории"]

  return <header className="header">
    <div className="header__wrapper">
      <div className="header__container _container">
        <nav className="header__nav nav-header">

          <div className="nav__logo">
            <img className="nav__logo-img" src={navLogo} alt="" />
          </div>

          <div className="nav__btns">
            {buttons.map(item => <div key={item} className="nav__btn _p-normal"> {item} </div>)}
          </div>

          <div className="nav__number _p-normal">
            +7 999 999 99 99
          </div>
        </nav>
      </div>
    </div>
  </header>
}