import { PropTypes } from "prop-types"
import commonS from "components/commons/Texts.module.css"

export const FormRadioTwoVariants = ({ name, title, first, second, isRequired }) => {
  return <div className="form__control radio-block">
    <label className={commonS._pNormal}> {title} </label>

    <div className="form__choices">
      <label className={commonS._pNormal}> {first} <input type="radio"
        name={name} required={isRequired} />
        <span className="fakeradio"></span>
      </label>

      <label className={commonS._pNormal}> {second} <input type="radio"
        name={name} />
        <span className="fakeradio"></span>
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