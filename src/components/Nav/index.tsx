import React from 'react'
import { scrollToView } from '../../utils/scroll'
import { TypeAnimation } from 'react-type-animation'
import { menus } from './constants'

export const Nav = () => {
  const ref = React.createRef<HTMLSpanElement>()

  const CURSOR_CLASS_NAME = 'hide-cursor'

  const showCursorAnimation = (show: boolean) => {
    if (!ref.current) {
      return
    }

    const el = ref.current
    if (show) {
      el.classList.remove(CURSOR_CLASS_NAME)
    } else {
      el.classList.add(CURSOR_CLASS_NAME)
    }
  }
  return (
    <nav className="fixed top-0 left-0 w-screen z-20 text-function flex justify-between px-9 py-6 text-lg lg:text-2xl border-b-4 border-default pointer-events-none">
      <a href="/" className="hover:underline pointer-events-auto clickable">
        <TypeAnimation sequence={['myPortofolio(']} speed={30} cursor={false} />
        <TypeAnimation
          sequence={[1000, 'ihsanFajarRamadhan']}
          speed={30}
          className="text-variable"
          cursor={false}
        />
        <TypeAnimation sequence={[2000, ')']} speed={30} />
      </a>
      <div className="flex justify-between gap-12">
        {menus.map((menu, index) => (
          <span
            key={menu.label}
            className="cursor-pointer hover:underline pointer-events-auto w-fit clickable"
            onClick={() => scrollToView(menu.target)}
          >
            <TypeAnimation
              ref={index === menus.length - 1 ? ref : null}
              sequence={[
                index === menus.length - 1
                  ? () => showCursorAnimation(false)
                  : '',
                index * 600,
                index === menus.length - 1
                  ? () => showCursorAnimation(true)
                  : '',
                menu.label,
              ]}
              speed={30}
              className={CURSOR_CLASS_NAME}
            />
          </span>
        ))}
      </div>
    </nav>
  )
}
