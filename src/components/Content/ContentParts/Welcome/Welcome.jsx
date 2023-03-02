import s from './Welcome.module.css'
import { BlockPNormal, BlockH1 } from 'components/commons/texts'
import classNames from 'classnames/bind'

export const Welcome = () => {
  let cx = classNames.bind(s)

  return (
    <div className={s.welcome}>
      <BlockH1
        title='Идеальные путешествия существуют'
        cn={cx({ h: true, item: true })}
      />

      <BlockPNormal cn={cx({ p: true, item: true })}>
        Идейные соображения высшего порядка, а также рамки и место обучения кадров
      </BlockPNormal>

      <div className={cx({ btn: true, item: true })}>Найти тур</div>
    </div>
  )
}
