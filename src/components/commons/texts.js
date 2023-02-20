

export const BlockTitle = ({ title = "", cn = "", children }) => {
  return <div className={"_title  _h2 " + cn}>
    {title || children}
  </div>
}

export const BlockSubtitle = ({ title = "", cn = "", children }) => {
  return <div className={"stories__subtitle _p-normal  _subtitle " + cn}>
    {title || children}
  </div>
}

export const BlockH1 = ({ title = "", cn = "", children }) => {
  return <div className={"_h1 " + cn}>
    {title || children}
  </div>
}

export const BlockH2 = ({ title = "", cn = "", children }) => {
  return <div className={"_h2 " + cn}>
    {title || children}
  </div>
}

export const BlockH3 = ({ title = "", cn = "", children }) => {
  return <div className={"_h3 " + cn}>
    {title || children}
  </div>
}

export const BlockPSmall = ({ title = "", cn = "", children }) => {
  return <div className={"_p-small " + cn}>
    {title || children}
  </div>
}

export const BlockPNormal = ({ title = "", cn = "", children }) => {
  return <div className={"_p-normal " + cn}>
    {title || children}
  </div>
}

export const BlockPBig = ({ title = "", cn = "", children }) => {
  return <div className={"_p-big " + cn}>
    {title || children}
  </div>
}


