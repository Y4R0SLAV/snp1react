import "./choose.css"
import { ChooseItem } from "./ChooseItem"

export const Choose = () => {
  const buttons = [{ title: "Популярные", active: true },
  { title: "Авторские", active: false },
  { title: "Походы", active: false },
  { title: "Сплавы", active: false },
  { title: "Велопрогулки", active: false },]

  const chooseItems = [{ title: "Путешествие в горы", price: "от 80 000 руб", id: 1 },
  { title: "Путешествие в горы", price: "от 80 000 руб", id: 2 },
  { title: "Путешествие в горы", price: "от 80 000 руб", id: 3 },
  { title: "Путешествие в горы", price: "от 80 000 руб", id: 4 },
  { title: "Путешествие в горы", price: "от 80 000 руб", id: 5 },
  { title: "Путешествие в горы", price: "от 80 000 руб", id: 6 },]

  return <div className="choose">
    <div className="choose__container _container">
      <div className="choose_content">
        <div className="choose__title _title _h2">
          Выбери свой тур
        </div>

        <div className="choose__list list-choose">
          {buttons.map((item, index) => {
            let cn = "list__item _p-big"
            if (item.active) { cn += " active" }
            return <div key={index} className={cn}> {item.title} </div>
          })
          }
        </div>

        <div className="choose__items">
          {chooseItems.map(item => <ChooseItem key={item.id} id={item.id} title={item.title} price={item.price} />)}
        </div>
      </div>
    </div>

  </div>
}