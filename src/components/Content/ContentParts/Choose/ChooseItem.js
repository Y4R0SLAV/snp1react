import { BlockH3, BlockPSmall, BlockPBig } from './../../../commons/texts';

export const ChooseItem = ({ price, id, title }) => {

  return <div className={"choose__item item" + id}>
    <div className="item__info">
      <BlockH3 cn="item__title" title={title} />
      <BlockPSmall cn="item__price">
        {price}
      </BlockPSmall>
    </div>

    <BlockPBig cn="item__details" title="Подробнее" />
  </div>
}