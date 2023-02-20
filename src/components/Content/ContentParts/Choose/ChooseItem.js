export const ChooseItem = ({ price, id, title }) => {
  return <div className={"choose__item item" + id}>
    <div className="item__info">
      <div className="item__title _h3">
        {title}
      </div>
      <div className="item__price _p-small">
        {price}
      </div>
    </div>

    <div className="item__details _p-big">
      Подробнее
    </div>
  </div>
}