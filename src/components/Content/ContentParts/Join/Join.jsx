import footerPhoto from "assets/photos/footerphoto.jpg"
import { BlockH3, BlockSubtitle } from "components/commons/texts"
import s from "./Join.module.css"

export const Join = () => {
  return <div className={s.join}>
    <div className={s.content}>

      <div className={s.img}>
        <img src={footerPhoto} alt="" />
      </div>

      <div className={s.info}>
        <BlockH3 cn={s.title} title="Пора в путешествие вместе с нами!" />
        <BlockSubtitle cn={s.subtitle}>
          Напиши на почту и узнай подробности на <a className={s.email} href="mailto:yourtour@gmail.com">yourtour@gmail.com </a>
        </BlockSubtitle>
      </div>

    </div>
  </div>
}