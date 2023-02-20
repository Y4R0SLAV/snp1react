import footerPhoto from "../../../../assets/photos/footerphoto.jpg"
import "./join.css"

export const Join = () => {
  return <div className="join">
    <div className="join__content">
      <div className="join__img">
        <img src={footerPhoto} alt="" />
      </div>
      <div className="join__info">
        <div className="join__title _h3">
          Пора в путешествие вместе с нами!
        </div>
        <div className="join__subtitle _p-normal">
          Напиши на почту и узнай подробности на <span className="join__email _p-normal">yourtour@gmail.com </span>
        </div>
      </div>
    </div>
  </div>
}