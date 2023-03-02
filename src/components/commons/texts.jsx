import PropTypes from 'prop-types'
import s from "./Texts.module.css"
import classNames from 'classnames/bind'

let cx = classNames.bind(s)

export const BlockTitle = ({ title = "", cn = "", children }) => {
  return <h2 className={cx({_title: true, _h2: true, [cn]: true})}>
    {title || children}
  </h2>
}

export const BlockSubtitle = ({ title = "", cn = "", children }) => {
  return <div className={cx({_pNormal: true, _subtitle: true, [cn]: true})}>
    {title || children}
  </div>
}

export const BlockH1 = ({ title = "", cn = "", children }) => {
  return <h1 className={cx({_h1: true, [cn]: true})}>
    {title || children}
  </h1>
}

export const BlockH2 = ({ title = "", cn = "", children }) => {
  return <h2 className={cx({_h2: true, [cn]: true})}>
    {title || children}
  </h2>
}

export const BlockH3 = ({ title = "", cn = "", children }) => {
  return <h3 className={cx({_h3: true, [cn]: true})}>
    {title || children}
  </h3>
}

export const BlockPSmall = ({ title = "", cn = "", children }) => {
  return <h3 className={cx({_pSmall: true, [cn]: true})}>
    {title || children}
  </h3>
}

export const BlockPNormal = ({ title = "", cn = "", children }) => {
  return <div className={cx({_pNormal: true, [cn]: true})}>
    {title || children}
  </div>
}

export const BlockPBig = ({ title = "", cn = "", children }) => {
  return <div className={cx({_pBig: true, [cn]: true})}>
    {title || children}
  </div>
}


BlockTitle.propTypes
  = BlockSubtitle.propTypes
  = BlockH1.propTypes
  = BlockH2.propTypes
  = BlockH3.propTypes
  = BlockPSmall.propTypes
  = BlockPNormal.propTypes
  = BlockPBig.propTypes = {
    title: PropTypes.string,
    cn: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }
