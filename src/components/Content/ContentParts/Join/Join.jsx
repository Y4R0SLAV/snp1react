import footerPhoto from "assets/photos/footerphoto.jpg"
import { BlockH3, BlockSubtitle } from "components/commons/texts"
import "./join.css"

export const Join = () => {
  return <div className="join">
    <div className="join__content">
      <div className="join__img">
        <img src={footerPhoto} alt="" />
      </div>
      <div className="join__info">
        <BlockH3 cn="join__title" title="Пора в путешествие вместе с нами!" />
        <BlockSubtitle cn="join__subtitle">
          Напиши на почту и узнай подробности на <a className="join__email" href="mailto:yourtour@gmail.com">yourtour@gmail.com </a>
        </BlockSubtitle>
      </div>
    </div>
  </div>
}