import { FormInput } from './FormElements/FormInput'
import { FormSelect } from './FormElements/FormSelect'
import { FormRadioTwoVariants } from './FormElements/FormRadioTwoVariants'
import { FormTextarea } from './FormElements/FormTextarea'
import { FormAddCheckboxToConditions } from './FormElements/FormAddCheckboxToConditions'
import { FormButtons } from './FormElements/FormButtons'

import "./packForm.css"
// здесь стили для каждого отдельного элемента формы, т.к. они почти все пересекаются

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

      <FormTextarea id="comment" name="comment" title="Комментарий" />

      <FormRadioTwoVariants first="Да" second="Нет" name="eighteen" isRequired={true} title="Вам есть 18 лет?" />

      <FormAddCheckboxToConditions name="inp" isRequired={true}>
        Нажимая кнопку, я принимаю условия <span className="form__license" >Лицензионного договора</span>
      </FormAddCheckboxToConditions>

      <FormButtons submitText="Найти тур" resetText="Сбросить"/>
    </form>
  </div >
}