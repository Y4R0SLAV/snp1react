import "./reviews.css"
import mariaPhoto from "../../../../assets/photos/reviewphoto1.jpg"
import pavelPhoto from "../../../../assets/photos/reviewphoto2.jpg"
import { BlockSubtitle, BlockTitle } from '../../../commons/texts'
import { ReviewItem } from './ReviewItem'

export const Reviews = () => {
  return <div className="reviews">
    <div className="_container">
        <BlockTitle title="Отзывы наших путешественников" />

        <BlockSubtitle cn="reviews__subtitle" title="Идейные соображения высшего порядка, а также рамки и место обучения кадров" />

        <div className="reviews__items">
          <ReviewItem name="Мария" tourName="Вдали от дома" imgSrc={mariaPhoto}> Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития. </ReviewItem>

          <ReviewItem name="Павел" tourName="Путешествие в горы" imgSrc={pavelPhoto}>  Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. <br/> <br/>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. </ReviewItem>
      </div>
    </div>
  </div>
}