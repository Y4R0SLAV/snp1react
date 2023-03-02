import s from "./Stories.module.css"
import { BlockTitle, BlockSubtitle } from "components/commons/texts"
import { ChooseStoriesItem, storiesType } from "components/commons/ChooseStoriesItem"
import globalStyles from "GlobalStyles.module.css"


export const Stories = () => {
  const links1 = [{ title: "instagram", url: "https://google.com", id: 1 }, 
                  { title: "facebook", url: "https://yandex.ru", id: 2 }, 
                  { title: "YouTube", url: "https://youtube.com", id: 3 }]

  const links2 = [{ title: "instagram", url: "https://google.com", id: 4 }, 
                  { title: "ВКонтакте", url: "https://vk.com", id: 5 }]
                  
  const links3 = [{ title: "instagram", url: "https://google.com", id: 6 }, 
                  { title: "facebook", url: "https://yandex.ru", id: 7 }, 
                  { title: "ВКонтакте", url: "https://youtube.com", id: 8 }]

  const ulItems = ["вкусная еда", "дешевый транспорт", "красивый город."] 

  return <div className={s.stories}>
    <div className={globalStyles._container}>
        <BlockTitle title="Истории путешествий" />
        <BlockSubtitle title="Идейные соображения высшего порядка, а также рамки и место обучения кадров" />

        <div className={s.items}>
          <ChooseStoriesItem id={1} title="Автостопом в Стамбул" links={links1} type={storiesType}>
            Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:
            <br /> <br />
            <ul className={s.ul}>
              {ulItems.map(item => {
                return <li key={item}><span className={s.span}> {item }</span> </li>
              })}
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
}