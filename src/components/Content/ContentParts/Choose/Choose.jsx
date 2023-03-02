import {useState} from 'react'
import {ChooseStoriesItem, chooseType} from 'components/commons/ChooseStoriesItem'
import {BlockH2, BlockPBig} from 'components/commons/texts'

import classNames from 'classnames/bind'
import s from './Choose.module.css'
import globalStyles from 'GlobalStyles.module.css'

export const Choose = () => {
  let cx = classNames.bind(s)
  const [currentButtonId, setCurrentButtonId] = useState(1)

  const chooseButtonHandler = (id) => {
    setCurrentButtonId(id)
  }

  const buttons = [
    {title: 'Популярные', id: 1},
    {title: 'Авторские', id: 2},
    {title: 'Походы', id: 3},
    {title: 'Сплавы', id: 4},
    {title: 'Велопрогулки', id: 5},
  ]

  const chooseItems = [
    {title: 'Путешествие в горы', price: 'от 80 000 руб', id: 1},
    {title: 'Путешествие в горы', price: 'от 80 000 руб', id: 2},
    {title: 'Путешествие в горы', price: 'от 80 000 руб', id: 3},
    {title: 'Путешествие в горы', price: 'от 80 000 руб', id: 4},
    {title: 'Путешествие в горы', price: 'от 80 000 руб', id: 5},
    {title: 'Путешествие в горы', price: 'от 80 000 руб', id: 6},
  ]

  return (
    <div className={s.choose}>
      <div className={globalStyles._container}>
        <div className={s.content}>
          <BlockH2 title='Выбери свой тур' />

          <BlockPBig cn={s.list}>
            {buttons.map((item) => {
              let className = cx({item: true, active: item.id === currentButtonId})
              return (
                <div
                  onClick={(e) => chooseButtonHandler(item.id)}
                  key={item.id}
                  className={className}
                >
                  {item.title}
                </div>
              )
            })}
          </BlockPBig>

          <div className={s.items}>
            {chooseItems.map((item) => (
              <ChooseStoriesItem
                key={item.id}
                type={chooseType}
                id={item.id}
                title={item.title}
              >
                {item.price}
              </ChooseStoriesItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
