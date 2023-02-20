import "./reviews.css"
import mariaPhoto from "../../../../assets/photos/reviewphoto1.jpg"
import pavelPhoto from "../../../../assets/photos/reviewphoto2.jpg"

const ReviewItem = ({ text, name, tourName, imgSrc }) => {
  return <div className="reviews__item rewiew">
    <div className="review__text _p-big">
      {text}
    </div>
    <div className="review__person">
      <div className="review__info">
        <div className="review__name _h3">{name}</div>
        <div className="review__to _p-small">Тур: {tourName}</div>
      </div>
      <div className="review__photo">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  </div>
}

export const Reviews = () => {
  const reviews = [{ text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.", name: "Мария", tourName: "Вдали от дома", imgSrc: mariaPhoto, id: 1 },
  {
    text: "Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.", name: "Павел", tourName: "Путешествие в горы", imgSrc: pavelPhoto, id: 2
  },]

  return <div className="reviews">
    <div className="reviews__container _container">
      <div className="reviews__content">
        <div className="reviews__title _title  _h2">
          Отзывы наших путешественников
        </div>

        <div className="reviews__subtitle _p-normal _subtitle">
          Идейные соображения высшего порядка, а также рамки и место обучения кадров
        </div>

        <div className="reviews__items">
          {reviews.map(review => <ReviewItem key={review.id} text={review.text} name={review.name} tourName={review.tourName} imgSrc={review.imgSrc} />)}
        </div>
      </div>
    </div>
  </div>
}