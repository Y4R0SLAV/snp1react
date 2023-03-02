import s from './Header.module.css'
import navLogo from 'assets/icons/logo.svg'
import { useState, useEffect } from 'react'
import { BlockPNormal } from 'components/commons/texts'
import classNames from 'classnames/bind'
import globalStyles from 'GlobalStyles.module.css'

export const Header = () => {
  const [headerMoving, setHeaderMoving] = useState(false)
  let cx = classNames.bind(s)

  useEffect(() => {
    const onScroll = (e) => {
      if (window.scrollY > 450) {
        setHeaderMoving(true)
      } else {
        setHeaderMoving(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const buttons = [
    { id: 1, title: 'Туры', href: '#' },
    { id: 2, title: 'Создать тур', href: '#' },
    { id: 3, title: 'Отзывы', href: '#' },
    { id: 4, title: 'Истории', href: '#' },
  ]

  return (
    <header className={cx({ wrapperFixed: headerMoving })}>
      <div className={globalStyles._container}>
        <nav className={s.nav}>
          <div className={cx({ logo: true, logoBlack: headerMoving })}>
            <img
              src={navLogo}
              alt=''
            />
          </div>

          <div className={s.btns}>
            {buttons.map((item) => (
              <BlockPNormal key={item.id}>
                {' '}
                <a
                  href={item.href}
                  rel='noreferrer'
                  className={s.btn}
                  target='_blank'
                >
                  {' '}
                  {item.title}{' '}
                </a>{' '}
              </BlockPNormal>
            ))}
          </div>

          <BlockPNormal>
            {' '}
            <a
              className={s.number}
              href='tel:+79999999999'
            >
              {' '}
              +7 999 999 99 99
            </a>{' '}
          </BlockPNormal>
        </nav>
      </div>
    </header>
  )
}
