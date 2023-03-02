import s from "./Pack.module.css"
import { PackForm } from "./PackForm"
import { BlockTitle, BlockSubtitle } from "components/commons/texts"
import globalStyles from "GlobalStyles.module.css"

export const Pack = () => {
  return <div className={s.pack}>
    <div className={globalStyles._container}>
        <BlockTitle title="Собери свой тур" />
        <BlockSubtitle cn={s.subtitleFool} title="Идейные соображения высшего порядка, а также рамки и место обучения кадров" />
        <PackForm />
    </div>
  </div>
}