import PropTypes from 'prop-types'
import s from './FooterLink.module.css'
import classNames from 'classnames/bind'
  

export const FooterLink = ({id, cn, imgSrc, url, title}) => {
  let cx = classNames.bind(s)
  let itemClass = "item" + cn
  let iconClass = "icon" + cn

  return <div key={id} className={cx({item: true, [itemClass]: true})}>
    <div className={cx({icon: true, [iconClass]: true})}>
      <img src={imgSrc} alt="" />
    </div>
    <a className={s.link} href={url}>{title}</a>
  </div>
}

FooterLink.propTypes = {
  id: PropTypes.number.isRequired,
  cn: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
