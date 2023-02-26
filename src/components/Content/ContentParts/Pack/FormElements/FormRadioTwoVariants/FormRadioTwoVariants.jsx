import { PropTypes } from "prop-types"
import commonS from "components/commons/Texts.module.css"
import s from "./FormRadioTwoVariants.module.css"
import "../formElements.css"

export const FormRadioTwoVariants = ({ name, title, first, second, isRequired }) => {
  return <div className={"form__control " + s.radioBlock}>
    <label className={commonS._pNormal}> {title} </label>

    <div className={s.form__choices}>
      <label className={commonS._pNormal}> {first} <input type="radio"
        name={name} required={isRequired} />
        <span className={s.fakeradio}></span>
      </label>

      <label className={commonS._pNormal}> {second} <input type="radio"
        name={name} />
        <span className={s.fakeradio}></span>
      </label>
    </div>
  </div>
}

FormRadioTwoVariants.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
}