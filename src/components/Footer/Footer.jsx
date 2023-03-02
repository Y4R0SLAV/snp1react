import s from "./Footer.module.css"
import instImg from "assets/icons/insta.png"
import fbImg from "assets/icons/fb.png"
import vkImg from "assets/icons/vk.png"
import { BlockPNormal } from "components/commons/texts"
import { FooterLink } from "./FooterLink"
import globalStyles from "GlobalStyles.module.css"


export const Footer = () => {
  const links = [{ id: 1, title: "instagram", imgSrc: instImg, cn: "Inst", url: "https://www.instagram.com/placeboworld/" },
  { id: 2, title: "facebook", imgSrc: fbImg, cn: "Fb", url: "https://m.facebook.com/thecure" },
  { id: 3, title: "vkontakte", imgSrc: vkImg, cn: "Vk", url: "https://vk.com/durov" },]

  return <footer>
    <div className={globalStyles._container}>
      <div className={s.content}>
        <BlockPNormal cn={s.text} title="Наши социальные сети"/>
        <BlockPNormal cn={s.links} >
          {links.map(item => <FooterLink key={item.id} id = {item.id} cn={item.cn} imgSrc={item.imgSrc} url={item.url} title={item.title}/>)}
        </BlockPNormal>
      </div>
    </div>
  </footer>
}