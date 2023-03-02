import { PropTypes } from 'prop-types'
import commonS from 'components/commons/Texts.module.css'
import s from './FormRadioTwoVariants.module.css'
import formStyles from '../FormElements.module.css'
import classNames from 'classnames'

export const FormRadioTwoVariants = ({ name, title, first, second, isRequired }) => {
  return (
    <div className={classNames(formStyles.control, s.radioBlock)}>
      <label className={commonS._pNormal}> {title} </label>

      <div className={s.choices}>
        <label className={commonS._pNormal}>
          {' '}
          {first}{' '}
          <input
            type='radio'
            name={name}
            required={isRequired}
          />
          <span className={s.fakeradio}></span>
        </label>

        <label className={commonS._pNormal}>
          {' '}
          {second}{' '}
          <input
            type='radio'
            name={name}
          />
          <span className={s.fakeradio}></span>
        </label>
      </div>
    </div>
  )
}

FormRadioTwoVariants.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
}
