import { PropTypes } from "prop-types"
import commonS from "components/commons/Texts.module.css"
import "../formElements.css"


export const FormInput = ({ id, title, type, placeholder, isRequired, cn = "", onFocus = null, onBlur = null }) => {
  const plug = (e) => { }

  return <div className="form__control">
    <label className={commonS._pNormal} htmlFor={id}>{title}</label>
    
    <input className={commonS._pNormal + " " + cn}
      type={type} id={id} placeholder={placeholder}
      required={isRequired}
      onFocus={onFocus || plug} onBlur={onBlur || plug} />
  </div>
}

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "tel"]).isRequired,
  placeholder: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  cn: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
}