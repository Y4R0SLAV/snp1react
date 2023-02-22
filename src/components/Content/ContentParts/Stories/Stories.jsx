import "./stories.css"
import { BlockTitle, BlockSubtitle } from '../../../commons/texts'
import { ChooseStoriesItem, storiesType } from "../../../commons/ChooseStoriesItem"


export const Stories = () => {
  const links1 = [{ title: "instagram", url: "https://google.com", id: 1 }, 
                  { title: "facebook", url: "https://yandex.ru", id: 2 }, 
                  { title: "YouTube", url: "https://youtube.com", id: 3 }]

  const links2 = [{ title: "instagram", url: "https://google.com", id: 4 }, 
                  { title: "ВКонтакте", url: "https://vk.com", id: 5 }]
                  
  const links3 = [{ title: "instagram", url: "https://google.com", id: 6 }, 
                  { title: "facebook", url: "https://yandex.ru", id: 7 }, 
                  { title: "ВКонтакте", url: "https://youtube.com", id: 8 }]

  return <div className="stories">
    <div className="stories__container _container">
      <div className="stories_content">
        <BlockTitle title="Истории путешествий" />
        <BlockSubtitle title="Идейные соображения высшего порядка, а также рамки и место обучения кадров" />

        <div className="stories__items">
          <ChooseStoriesItem id={1} title="Автостопом в Стамбул" links={links1} type={storiesType}>
            Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:
            <br /> <br />
            <ul className="item__ul">
              <li><span className="item__span">вкусная еда</span> </li>
              <li><span className="item__span">дешевый транспорт</span> </li>
              <li><span className="item__span">красивый город.</span></li>
            </ul>
          </ChooseStoriesItem>

          <ChooseStoriesItem id={2} title="Автостопом в Стамбул" links={links2} type={storiesType}>
            Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.
          </ChooseStoriesItem>

          <ChooseStoriesItem id={3} title="Автостопом в Стамбул" links={links3} type={storiesType}>
            Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.
          </ChooseStoriesItem>

        </div>
      </div>
    </div>
  </div>
}