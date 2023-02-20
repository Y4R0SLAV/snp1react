import "./pack.css"
import { PackForm } from "./PackForm"

export const Pack = () => {
  return <div className="pack">
    <div className="pack__container _container">
      <div className="pack__content">
        <div className="pack__title _title  _h2"> Собери свой тур </div>
        <div className="pack__subtitle _subtitle subtitle-fool _p-normal"> Идейные соображения высшего порядка, а также рамки и место обучения кадров </div>
        <PackForm />
      </div>
    </div>
  </div>
}