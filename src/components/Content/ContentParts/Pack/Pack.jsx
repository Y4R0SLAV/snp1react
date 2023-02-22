import "./pack.css"
import { PackForm } from "./PackForm"
import { BlockTitle, BlockSubtitle } from '../../../commons/texts'

export const Pack = () => {
  return <div className="pack">
    <div className="pack__container _container">
      <div className="pack__content">
        <BlockTitle cn="pack__title" title="Собери свой тур" />
        <BlockSubtitle cn="pack__subtitle subtitle-fool" title="Идейные соображения высшего порядка, а также рамки и место обучения кадров" />
        <PackForm />
      </div>
    </div>
  </div>
}