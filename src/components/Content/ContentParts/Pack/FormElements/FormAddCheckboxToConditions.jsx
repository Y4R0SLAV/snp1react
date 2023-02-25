import { PropTypes } from 'prop-types'
import commonS from "../../../../commons/Texts.module.css"

export const FormAddCheckboxToConditions = ({ name, isRequired, children }) => {
  return <div className="form-control checkbox-block">
    <label> <input type="checkbox" name={name} required={isRequired} /> <span className="fakebox"></span> </label>

    <p className={"fakebox__text " + commonS._pSmall}>
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