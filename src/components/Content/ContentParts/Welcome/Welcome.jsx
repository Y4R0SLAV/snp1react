import "./welcome.css"
import { BlockPNormal, BlockH1 } from "../../../commons/texts"

export const Welcome = () => {
  return <div className="welcome">
    <BlockH1 title="Идеальные путешествия существуют" cn="welcome__h welcome__item" />
    <BlockPNormal cn="welcome__p welcome__item">Идейные соображения высшего порядка, а также рамки и место обучения кадров</BlockPNormal>
    <div className="welcome__btn welcome__item">
      Найти тур
    </div>
  </div>
}