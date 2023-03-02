import { BlockH3, BlockPBig, BlockPNormal } from './texts'
import { PropTypes } from 'prop-types'
import s from "./ChooseStoriesItem.module.css"
import classNames from 'classnames/bind'

export const chooseType = "choose"
export const storiesType = "stories"

// type = chooseType || storiesType
export const ChooseStoriesItem = ({ id, title, children, links = [], type }) => {
  let cx = classNames.bind(s)

  let chooseClass = "item" + id
  let storyClass = "story" + id

  let classname = cx({
    storiesItem: type === storiesType,
    [storyClass]: type === storiesType,

    chooseItem: type === chooseType, 
    [chooseClass]: type === chooseType
  })

  return <div className={classname}>
    <div className={s.info}>
      <BlockH3 cn={s.title} title={title} />
      <BlockPNormal cn={s.price}>
        {children}
      </BlockPNormal>
    </div>

    {
      type === storiesType 
      ? <div className={s.detNlinks}>
          <BlockPBig cn={s.details} title="Подробнее" />
          <div className={s.links}>
            {links.map(link => <BlockPNormal key={link.id}><a className={s.link} href={link.url}>{link.title}</a></BlockPNormal>)}
          </div>
        </div>
      : <BlockPBig cn={s.details} title="Подробнее" />
    }
  </div>
}

ChooseStoriesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf([chooseType, storiesType]).isRequired,

  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}