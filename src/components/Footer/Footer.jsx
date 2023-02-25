import "./footer.css"
import instImg from "../../assets/icons/insta.png"
import fbImg from "../../assets/icons/fb.png"
import vkImg from "../../assets/icons/vk.png"
import { BlockPNormal } from './../commons/texts'
import { FooterLink } from './FooterLink'

export const Footer = () => {
  const links = [{ id: 1, title: "instagram", imgSrc: instImg, cn: "inst", url: "https://www.instagram.com/placeboworld/" },
  { id: 2, title: "facebook", imgSrc: fbImg, cn: "fb", url: "https://m.facebook.com/thecure" },
  { id: 3, title: "vkontakte", imgSrc: vkImg, cn: "vk", url: "https://vk.com/durov" },]

  return <footer className="footer">
    <div className="_container">
      <div className="footer__content">
        <BlockPNormal cn="footer__text" title="Наши социальные сети"/>
        <BlockPNormal cn="footer__links" >
          {links.map(item => <FooterLink key={item.id} id = {item.id} cn={item.cn} imgSrc={item.imgSrc} url={item.url} title={item.title}/>)}
        </BlockPNormal>
      </div>
    </div>
  </footer>
}