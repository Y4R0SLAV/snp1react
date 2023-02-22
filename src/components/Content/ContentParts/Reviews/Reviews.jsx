import "./reviews.css"
import mariaPhoto from "../../../../assets/photos/reviewphoto1.jpg"
import pavelPhoto from "../../../../assets/photos/reviewphoto2.jpg"
import { BlockPBig, BlockH3, BlockH2, BlockPSmall, BlockSubtitle, BlockTitle } from '../../../commons/texts'
import PropTypes from 'prop-types'

const ReviewItem = (props) => {
  const { children, name, tourName, imgSrc } = props
  return <div className="reviews__item rewiew">
    <BlockPBig cn="review__text"> {children} </BlockPBig>

    <div className="review__person">
      <div className="review__info">
        <BlockH3 cn="review__name" title={name} />
        <BlockPSmall cn="review__to">Тур: {tourName}</BlockPSmall>
      </div>
      <div className="review__photo">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  </div>
}

ReviewItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  name: PropTypes.string.isRequired,
  tourName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
}

export const Reviews = () => {
  return <div className="reviews">
    <div className="reviews__container _container">
      <div className="reviews__content">
        <BlockTitle title="Отзывы наших путешественников" />

        <BlockSubtitle cn="reviews__subtitle" title="Идейные соображения высшего порядка, а также рамки и место обучения кадров" />

        <div className="reviews__items">
          <ReviewItem name="Мария" tourName="Вдали от дома" imgSrc={mariaPhoto}> Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития. </ReviewItem>

          <ReviewItem name="Павел" tourName="Путешествие в горы" imgSrc={pavelPhoto}>  Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. <br/> <br/>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. </ReviewItem>
        </div>
      </div>
    </div>
  </div>
}