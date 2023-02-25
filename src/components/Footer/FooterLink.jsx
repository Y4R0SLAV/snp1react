import PropTypes from 'prop-types'
import s from './FooterLink.module.css'

export const FooterLink = ({id, cn, imgSrc, url, title}) => {
  return <div key={id} className={s.footer__item + " " + s["item-" + cn]}>
  <div className={s.footer__icon + " " + s["icon-" + cn]}>
    <img src={imgSrc} alt="" />
  </div>
  <a className={s.footer__link + " " + s["link" + id]} href={url}>{title}</a>
</div>
}

FooterLink.propTypes = {
  id: PropTypes.number.isRequired,
  cn: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
