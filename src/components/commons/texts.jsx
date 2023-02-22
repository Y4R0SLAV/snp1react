import PropTypes from 'prop-types'
import s from "./Texts.module.css"

export const BlockTitle = ({ title = "", cn = "", children }) => {
  return <h2 className={s._title + " " + s._h2 + " " + cn}>
    {title || children}
  </h2>
}

export const BlockSubtitle = ({ title = "", cn = "", children }) => {
  return <div className={s._pNormal + " " + s._subtitle + " " + cn}>
    {title || children}
  </div>
}

export const BlockH1 = ({ title = "", cn = "", children }) => {
  return <h1 className={s._h1 + " " + cn}>
    {title || children}
  </h1>
}

export const BlockH2 = ({ title = "", cn = "", children }) => {
  return <h2 className={s._h2 + " " + cn}>
    {title || children}
  </h2>
}

export const BlockH3 = ({ title = "", cn = "", children }) => {
  return <h3 className={s._h3 + " " + cn}>
    {title || children}
  </h3>
}

export const BlockPSmall = ({ title = "", cn = "", children }) => {
  return <h3 className={s._pSmall + " " + cn}>
    {title || children}
  </h3>
}

export const BlockPNormal = ({ title = "", cn = "", children }) => {
  return <div className={s._pNormal + " " + cn}>
    {title || children}
  </div>
}

export const BlockPBig = ({ title = "", cn = "", children }) => {
  return <div className={s._pBig + " " + cn}>
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
