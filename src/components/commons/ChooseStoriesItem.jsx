import { BlockH3, BlockPSmall, BlockPBig, BlockPNormal } from './texts'
import { PropTypes } from 'prop-types'
import "./chooseStoriesItem.css"

export const chooseType = "choose"
export const storiesType = "stories"

// type = chooseType || storiesType
export const ChooseStoriesItem = ({ id, title, children, links = [], type }) => {
  let cn = "choose__item item" + id

  if (type === storiesType) {
    cn = "stories__item story" + id
  }

  return <div className={cn}>
    <div className="item__info">
      <BlockH3 cn="item__title" title={title} />
      <BlockPSmall cn="item__price">
        {children}
      </BlockPSmall>
    </div>

    {
      type === storiesType 
      ? <div className="item__detNlinks">
          <BlockPBig cn="item__details" title="Подробнее" />
          <div className="item__links">
            {links.map(link => <BlockPNormal key={link.id}><a className="item__link" href={link.url}>{link.title}</a></BlockPNormal>)}
          </div>
        </div>
        : <BlockPBig cn="item__details" title="Подробнее" />
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