import "./stories.css"

const StoriesItem = ({ id, title, links, children }) => {
  return <div className={"stories__item story" + id}>
    <div className="item__info">
      <div className="item__title _h3">
        {title}
      </div>
      <div className="item__price _p-normal">
        {children}
      </div>
    </div>

    <div className="item__detNlinks">
      <div className="item__details _p-big">
        Подробнее
      </div>
      <div className="item__links">
        {links.map(link => <div key={link} className="item__link _p-normal">{link}</div>)}
      </div>
    </div>

  </div>
}

export const Stories = () => {
  return <div className="stories">
    <div className="stories__container _container">
      <div className="stories_content">
        <div className="_title  _h2">
          Истории путешествий
        </div>

        <div className="stories__subtitle _p-normal  _subtitle">
          Идейные соображения высшего порядка, а также рамки и место обучения кадров
        </div>

        <div className="stories__items">

          <StoriesItem id={1} title="Автостопом в Стамбул" links={["instagram", "facebook", "YouTube"]}>
            Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:
            <br /> <br />
            <ul className="item__ul">
              <li><span className="item__span">вкусная еда</span> </li>
              <li><span className="item__span">дешевый транспорт</span> </li>
              <li><span className="item__span">красивый город.</span></li>
            </ul>
          </StoriesItem>

          <StoriesItem id={2} title="Автостопом в Стамбул" links={["instagram", "ВКонтакте"]}>
            Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.
          </StoriesItem>

          <StoriesItem id={3} title="Автостопом в Стамбул" links={["instagram", "facebook", "ВКонтакте"]}>
            Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.
          </StoriesItem>

        </div>
      </div>
    </div>
  </div>
}