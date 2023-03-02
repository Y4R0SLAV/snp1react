import PropTypes from "prop-types"
import { BlockPBig, BlockH3, BlockPSmall } from "components/commons/texts"
import s from "./ReviewItem.module.css"

export const ReviewItem = ({ children, name, tourName, imgSrc }) => {
  return <div className={s.item }>
    <BlockPBig cn={s.text}> {children} </BlockPBig>

    <div className={s.person}>
      <div className={s.info}>
        <BlockH3 cn={s.name} title={name} />
        <BlockPSmall cn={s.to}>Тур: {tourName}</BlockPSmall>
      </div>
      <div className={s.photo}>
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