import "./footer.css"
import instImg from "../../assets/icons/insta.png"
import fbImg from "../../assets/icons/fb.png"
import vkImg from "../../assets/icons/vk.png"

export const Footer = () => {
  const links = [{ id: 1, title: "instagram", imgSrc: instImg, cn: "inst" },
  { id: 2, title: "facebook", imgSrc: fbImg, cn: "fb" },
  { id: 3, title: "vkontakte", imgSrc: vkImg, cn: "vk" },]

  return <footer className="footer">
    <div className="footer__container _container">
      <div className="footer__content">
        <div className="footer__text _p-normal">
          Наши социальные сети
        </div>
        <div className="footer__links _p-normal">

          {links.map(item => {
            return <div key={item.id} className={"footer__item item-" + item.cn}>
              <div className={"footer__icon icon-" + item.cn}>
                <img src={item.imgSrc} alt="" />
              </div>
              <div className={"footer__link link" + item.id}>{item.title}</div>
            </div>
          })}

        </div>
      </div>
    </div>
  </footer>
}