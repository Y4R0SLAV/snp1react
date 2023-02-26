import PropTypes from "prop-types"
import { BlockPBig, BlockH3, BlockPSmall } from "components/commons/texts"
import s from "./ReviewItem.module.css"

export const ReviewItem = ({ children, name, tourName, imgSrc }) => {
  return <div className={s.reviews__item }>
    <BlockPBig cn={s.review__text}> {children} </BlockPBig>

    <div className={s.review__person}>
      <div className={s.review__info}>
        <BlockH3 cn={s.review__name} title={name} />
        <BlockPSmall cn={s.review__to}>Тур: {tourName}</BlockPSmall>
      </div>
      <div className={s.review__photo}>
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