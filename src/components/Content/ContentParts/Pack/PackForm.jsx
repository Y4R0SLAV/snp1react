import { PropTypes } from 'prop-types'
import s from "../../../commons/Texts.module.css"

const FormInput = ({ id, title, type, placeholder, isRequired, cn = "", onFocus = null, onBlur = null }) => {
  const plug = (e) => { }

  return <div className="form__control">
    <label className={s._pNormal} htmlFor={id}>{title}</label>
    <input className={s._pNormal + " " + cn}
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

const FormSelect = ({ id, title, name, isRequired, defaultValue, options }) => {
  return <div className="form__control direction-form">
    <label htmlFor={id} className={s._pNormal}>{title}</label> 
    <select
      className={s._pNormal}
      name={name}
      id={id}
      required={isRequired} >
      <option value="" defaultValue hidden > {defaultValue} </option>
      {options.map(option => <option key={option.value} value={option.value}>{option.title}</option>)}
    </select>
  </div>
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
    }).isRequired
  ).isRequired,
}

const FormTextArea = ({ id, name, title }) => {
  return <div className="form__control comment-block">
    <label className={s._pNormal} htmlFor={id}> {title} </label>
    <textarea className={s._pNormal} name={name} id={id} cols="30" rows="10"></textarea>
  </div>
}

FormTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

const FormRadioTwoVariants = ({ name, title, first, second, isRequired }) => {
  return <div className="form__control radio-block">
    <label className={s._pNormal}> {title} </label>

    <div className="form__choices">
      <label className={s._pNormal}> {first} <input type="radio"
        name={name} required={isRequired} />
        <span className="fakeradio"></span>
      </label>

      <label className={s._pNormal}> {second} <input type="radio"
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

const FormAddCheckboxToConditions = ({ name, isRequired, children }) => {
  return <div className="form-control checkbox-block">
    <label> <input type="checkbox" name={name} required={isRequired} /> <span className="fakebox"></span> </label>

    <p className={"fakebox__text " + s._pSmall}>
      {children}
    </p>
  </div>
}

FormRadioTwoVariants.propTypes = {
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  children: PropTypes.element
}


const FormButtons = () => {
  return <div className="form-control control-buttons">
    <div className="form__buttons">
      <button type="submit" className={"form__button sub-button " +  s._pNormal}> Найти тур </button>
      <button type="reset" className={"form__button res-button " + s._pNormal}> Сбросить</button>
    </div>
  </div>
}

export const PackForm = () => {
  return <div className="form">
    <form action="">
      <FormInput id="username" title="Имя" type="text" placeholder="Введите Ваше имя" isRequired={true} cn="" />
      <FormSelect id="direction" title="Направление"
        name="role" isRequired={true} defaultValue="Куда хотите ехать?"
        options={[{ value: "Kazakhstan", title: "Казахстан" }, { value: "Costa-Rica", title: "Коста-Рика" }]} />

      <FormInput id="email" title="Email" type="email" placeholder="example@mail.com" isRequired={true} cn="" />
      <FormInput id="number" title="Телефон" type="tel" placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _" isRequired={true} cn="form__number" />

      <FormInput id="date-from" title="Дата от" type="text"
        placeholder="ДД.ММ.ГГГГ" isRequired={true}
        onFocus={(e) => e.currentTarget.type = "date"}
        onBlur={(e) => e.currentTarget.type = "text"} />

      <FormInput id="date-to" title="Дата до" type="text"
        placeholder="ДД.ММ.ГГГГ" isRequired={true}
        onFocus={(e) => e.currentTarget.type = "date"}
        onBlur={(e) => e.currentTarget.type = "text"} />

      <FormTextArea id="comment" name="comment" title="Комментарий" />

      <FormRadioTwoVariants first="Да" second="Нет" name="eighteen" isRequired={true} title="Вам есть 18 лет?" />

      <FormAddCheckboxToConditions name="inp" isRequired={true}>
        Нажимая кнопку, я принимаю условия <span className="form__license" >Лицензионного договора</span>
      </FormAddCheckboxToConditions>

      <FormButtons />
    </form>
  </div >
}