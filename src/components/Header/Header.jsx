import "./header.css"
import navLogo from "assets/icons/logo.svg"
import { useState } from "react"
import { BlockPNormal } from "components/commons/texts"


export const Header = () => {
  const [headerMoving, setHeaderMoving] = useState(false)

  let logoCN = "header__logo"

  window.addEventListener('scroll', (e) => {
    if (window.scrollY > 450) {
      setHeaderMoving(true)
    } else {
      setHeaderMoving(false)
    }
  })

  const buttons = [
    { id: 1, title: "Туры", href: "#" },
    { id: 2, title: "Создать тур", href: "#" },
    { id: 3, title: "Отзывы", href: "#" },
    { id: 4, title: "Истории", href: "#" }]

  return <header className={headerMoving ? "header__wrapper-fixed" : ""}>
      <div className="_container">
        <nav className="header__nav nav-header">

          <div className={headerMoving ? logoCN + " nav__logo-black" : logoCN}>
            <img className="nav__logo-img" src={navLogo} alt="" />
          </div>

          <div className="nav__btns">
            {buttons.map(item => <BlockPNormal key={item.id}> <a href={item.href} className="nav__btn" target="_blank"> {item.title} </a> </BlockPNormal>)}
          </div>

          <BlockPNormal> <a className="nav__number" href="tel:+79999999999"> +7 999 999 99 99</a> </BlockPNormal>
        </nav>
    </div>
  </header>
}