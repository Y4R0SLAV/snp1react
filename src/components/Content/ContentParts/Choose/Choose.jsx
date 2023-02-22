import { useState } from "react"
import { ChooseStoriesItem, chooseType } from "../../../commons/ChooseStoriesItem"
import { BlockH2 } from '../../../commons/texts'


import "./choose.css"

export const Choose = () => {
  const [currentButtonId, setCurrentButtonId] = useState(1)

  const chooseButtonHandler = (id) => {
    setCurrentButtonId(id)
  }

  const buttons = [{ title: "Популярные", id: 1 },
  { title: "Авторские", id: 2 },
  { title: "Походы", id: 3 },
  { title: "Сплавы", id: 4 },
  { title: "Велопрогулки", id: 5 },]

  const chooseItems = [{ title: "Путешествие в горы", price: "от 80 000 руб", id: 1 },
  { title: "Путешествие в горы", price: "от 80 000 руб", id: 2 },
  { title: "Путешествие в горы", price: "от 80 000 руб", id: 3 },
  { title: "Путешествие в горы", price: "от 80 000 руб", id: 4 },
  { title: "Путешествие в горы", price: "от 80 000 руб", id: 5 },
  { title: "Путешествие в горы", price: "от 80 000 руб", id: 6 },]

  return <div className="choose">
    <div className="choose__container _container">
      <div className="choose_content">

        <BlockH2 cn="choose__title" title="Выбери свой тур" />

        <div className="choose__list list-choose">
          {buttons.map(item => {
            let cn = "list__item _p-big"
            if (item.id === currentButtonId) { cn += " active" }

            return <div onClick={e => chooseButtonHandler(item.id)} key={item.id} className={cn}> {item.title} </div>
          })
          }
        </div>

        <div className="choose__items">
          {chooseItems.map(item => <ChooseStoriesItem type={chooseType} key={item.id} id={item.id} title={item.title}> {item.price} </ChooseStoriesItem>)}
        </div>
      </div>
    </div>

  </div>
}