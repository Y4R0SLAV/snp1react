import "./stories.css"
import { BlockTitle, BlockSubtitle, BlockH3, BlockPNormal, BlockPBig } from './../../../commons/texts';

const StoriesItem = ({ id, title, links, children }) => {
  return <div className={"stories__item story" + id}>
    <div className="item__info">

      <BlockH3 cn="item__title" title={title} />

      <BlockPNormal cn="item__price" >
        {children}
      </BlockPNormal>
    </div>

    <div className="item__detNlinks">
      <BlockPBig cn="item__details">
        Подробнее
      </BlockPBig>
      <div className="item__links">
        {links.map(link => <BlockPNormal key={link.id}><a className="item__link" href={link.url}>{link.title}</a></BlockPNormal>)}
      </div>
    </div>

  </div>
}

export const Stories = () => {
  const links1 = [{ title: "instagram", url: "https://google.com", id: 1 }, { title: "facebook", url: "https://yandex.ru", id: 2 }, { title: "YouTube", url: "https://youtube.com", id: 3 }]
  const links2 = [{ title: "instagram", url: "https://google.com", id: 4 }, { title: "ВКонтакте", url: "https://vk.com", id: 5 }]
  const links3 = [{ title: "instagram", url: "https://google.com", id: 6 }, { title: "facebook", url: "https://yandex.ru", id: 7 }, { title: "ВКонтакте", url: "https://youtube.com", id: 8 }]

  return <div className="stories">
    <div className="stories__container _container">
      <div className="stories_content">
        <BlockTitle title="Истории путешествий" />
        <BlockSubtitle title="Идейные соображения высшего порядка, а также рамки и место обучения кадров" />

        <div className="stories__items">
          <StoriesItem id={1} title="Автостопом в Стамбул" links={links1}>
            Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:
            <br /> <br />
            <ul className="item__ul">
              <li><span className="item__span">вкусная еда</span> </li>
              <li><span className="item__span">дешевый транспорт</span> </li>
              <li><span className="item__span">красивый город.</span></li>
            </ul>
          </StoriesItem>

          <StoriesItem id={2} title="Автостопом в Стамбул" links={links2}>
            Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.
          </StoriesItem>

          <StoriesItem id={3} title="Автостопом в Стамбул" links={links3}>
            Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.
          </StoriesItem>

        </div>
      </div>
    </div>
  </div>
}