import footerPhoto from "../../../../assets/photos/footerphoto.jpg"
import "./join.css"
import { BlockH3, BlockSubtitle } from '../../../commons/texts'

export const Join = () => {
  return <div className="join">
    <div className="join__content">
      <div className="join__img">
        <img src={footerPhoto} alt="" />
      </div>
      <div className="join__info">
        <BlockH3 cn="join__title" title="Пора в путешествие вместе с нами!" />
        <BlockSubtitle className="join__subtitle _p-normal">
          Напиши на почту и узнай подробности на <a className="join__email _p-normal" href="mailto:yourtour@gmail.com">yourtour@gmail.com </a>
        </BlockSubtitle>
      </div>
    </div>
  </div>
}