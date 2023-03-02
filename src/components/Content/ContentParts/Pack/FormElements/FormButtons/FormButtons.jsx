import {PropTypes} from 'prop-types'
import commonS from 'components/commons/Texts.module.css'
import s from './FormButtons.module.css'
import formStyles from '../FormElements.module.css'
import classNames from 'classnames'

export const FormButtons = ({submitText, resetText}) => {
  return (
    <div className={classNames(formStyles.control, s.controlButtons)}>
      <div className={s.form__buttons}>
        <button
          type='submit'
          className={classNames(s.form__button, s.subButton, commonS._pNormal)}
        >
          {submitText}
        </button>
        <button
          type='reset'
          className={classNames(s.form__button, s.resButton, commonS._pNormal)}
        >
          {resetText}
        </button>
      </div>
    </div>
  )
}

FormButtons.propTypes = {
  submitText: PropTypes.string.isRequired,
  resetText: PropTypes.string.isRequired,
}
