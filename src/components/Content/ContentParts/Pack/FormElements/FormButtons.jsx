import { PropTypes } from 'prop-types'
import commonS from "../../../../commons/Texts.module.css"

export const FormButtons = ({submitText, resetText}) => {
  return <div className="form-control control-buttons">
    <div className="form__buttons">
      <button type="submit" className={"form__button sub-button " +  commonS._pNormal}> {submitText} </button>
      <button type="reset" className={"form__button res-button " + commonS._pNormal}> {resetText} </button>
    </div>
  </div>
}

FormButtons.propTypes = {
  submitText: PropTypes.string.isRequired,
  resetText: PropTypes.string.isRequired
}