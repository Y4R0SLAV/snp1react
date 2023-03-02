import { Welcome } from './ContentParts/Welcome/Welcome'
import { Choose } from './ContentParts/Choose/Choose'
import { Pack } from './ContentParts/Pack/Pack'
import { Reviews } from './ContentParts/Reviews/Reviews'
import { Photos } from './ContentParts/Photos/Photos'
import { Join } from './ContentParts/Join/Join'
import { Stories } from './ContentParts/Stories/Stories'

import s from "./Content.module.css"

export const Content = () => {
  return <div className={s.wrapper}>
    <Welcome />
    <Choose />
    <Pack />
    <Reviews />
    <Photos />
    <Stories />
    <Join />
  </div>
}