import {PropTypes} from 'prop-types'
import commonS from 'components/commons/Texts.module.css'
import s from './FormSelect.module.css'
import formStyles from '../FormElements.module.css'
import classNames from 'classnames'

export const FormSelect = ({id, title, name, isRequired, defaultValue, options}) => {
  return (
    <div className={classNames(formStyles.control, s.directionForm)}>
      <label
        htmlFor={id}
        className={commonS._pNormal}
      >
        {title}
      </label>

      <select
        className={commonS._pNormal}
        name={name}
        id={id}
        required={isRequired}
      >
        <option
          value=''
          defaultValue
          hidden
        >
          {defaultValue}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.title}
          </option>
        ))}
      </select>
    </div>
  )
}

FormSelect.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  defaultValue: PropTypes.string.isRequired,

  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}
