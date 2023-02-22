import { BlockH3, BlockPSmall, BlockPBig, BlockPNormal } from './texts'
import { PropTypes } from 'prop-types'
import s from "./ChooseStoriesItem.module.css"

export const chooseType = "choose"
export const storiesType = "stories"

// type = chooseType || storiesType
export const ChooseStoriesItem = ({ id, title, children, links = [], type }) => {
  let a = "item" + id
  let b = "story" + id

  let cn = s.chooseItem + " " + s[a]

  if (type === storiesType) {
    cn = s.storiesItem + " " +s[b]
  }

  return <div className={cn}>
    <div className={s.itemInfo}>
      <BlockH3 cn={s.itemTitle} title={title} />
      <BlockPNormal cn={s.itemPrice}>
        {children}
      </BlockPNormal>
    </div>

    {
      type === storiesType 
      ? <div className={s.itemDetNlinks}>
          <BlockPBig cn={s.itemDetails} title="Подробнее" />
          <div className={s.itemLinks}>
            {links.map(link => <BlockPNormal key={link.id}><a className={s.itemLink} href={link.url}>{link.title}</a></BlockPNormal>)}
          </div>
        </div>
        : <BlockPBig cn={s.itemDetails} title="Подробнее" />
    }
  </div>
}

ChooseStoriesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),

  type: PropTypes.oneOf([chooseType, storiesType]).isRequired,

  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
}