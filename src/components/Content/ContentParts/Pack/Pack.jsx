import "./pack.css"
import { PackForm } from "./PackForm"
import { BlockTitle, BlockSubtitle } from "components/commons/texts"

export const Pack = () => {
  return <div className="pack">
    <div className="_container">
        <BlockTitle title="Собери свой тур" />
        <BlockSubtitle cn="subtitle-fool" title="Идейные соображения высшего порядка, а также рамки и место обучения кадров" />
        <PackForm />
    </div>
  </div>
}