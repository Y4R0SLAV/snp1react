import { PropTypes } from 'prop-types'
import commonS from 'components/commons/Texts.module.css'
import s from './FormTextarea.module.css'
import formStyles from '../FormElements.module.css'
import classNames from 'classnames'

export const FormTextarea = ({ id, name, title }) => {
  return (
    <div className={classNames(formStyles.control, s.commentBlock)}>
      <label
        className={commonS._pNormal}
        htmlFor={id}
      >
        {title}
      </label>
      <textarea
        className={commonS._pNormal}
        name={name}
        id={id}
        cols='30'
        rows='10'
      ></textarea>
    </div>
  )
}

FormTextarea.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
