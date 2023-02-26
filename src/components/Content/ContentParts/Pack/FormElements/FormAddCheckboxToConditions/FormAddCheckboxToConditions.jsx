import { PropTypes } from "prop-types"
import commonS from "components/commons/Texts.module.css"
import s from "./FormAddCheckboxToConditions.module.css"
import "../formElements.css"

export const FormAddCheckboxToConditions = ({ name, isRequired, children }) => {
  return <div className={"form-control " + s.checkboxBlock}>
    <label> <input type="checkbox" name={name} required={isRequired} /> <span className={s.fakebox}></span> </label>

    <p className={s.fakebox__text + " " + commonS._pSmall}>
      {children}
    </p>
  </div>
}

FormAddCheckboxToConditions.propTypes = {
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}