import { PropTypes } from "prop-types"
import commonS from "components/commons/Texts.module.css"
import s from "./FormButtons.module.css"
import "../formElements.css"

export const FormButtons = ({submitText, resetText}) => {
  return <div className={"form-control" + s.controlButtons}>
    <div className={s.form__buttons}>
      <button type="submit" className={s.form__button + " " + s.subButton + " " +  commonS._pNormal}> {submitText} </button>
      <button type="reset" className={s.form__button + " " + s.resButton + " " + commonS._pNormal}> {resetText} </button>
    </div>
  </div>
}

FormButtons.propTypes = {
  submitText: PropTypes.string.isRequired,
  resetText: PropTypes.string.isRequired
}