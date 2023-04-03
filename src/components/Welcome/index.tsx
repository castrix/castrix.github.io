import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import myPhoto from '../../assets/myPhoto.PNG'
import photoOverlay from '../../assets/photoOverlay.svg'
import './index.css'
import { ReactSVG } from 'react-svg'
import { CV_URL } from '../Nav/constants'

export const Welcome = () => {
  const ref = React.createRef<HTMLSpanElement>()
  const photoRef = React.createRef<HTMLImageElement>()
  const nicknameRef = React.createRef<HTMLSpanElement>()

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

  const showPotrait = (show: boolean) => {
    const SHOW_CLASS = 'show'
    const NICK_CLASS = 'move'
    const el = photoRef.current
    const nick = nicknameRef.current
    if (!el || !nick) {
      return
    }
    if (show) {
      el.classList.add(SHOW_CLASS)
      nick.classList.add(NICK_CLASS)
    } else {
      el.classList.remove(SHOW_CLASS)
      nick.classList.remove(NICK_CLASS)
    }
  }
  return (
    <section
      id="welcome"
      className="relative bg-red h-screen flex items-center pointer-events-none"
    >
      <div className="flex flex-wrap w-1/2 gap-5 pl-9 text-xl">
        <TypeAnimation
          sequence={[
            `/* \n* Copyright (c) 2023 Ihsan Fajar Ramadhan. All Rights Reserved \n* This is licensed software from (castrix.github.io), for limitations \n* and restrictions contact your company contract manager.  \n*/ \n`,
          ]}
          speed={99}
          className="text-vue whitespace-pre-line w-full"
          cursor={false}
        />
        <div className="w-full flex">
          <TypeAnimation
            sequence={[2000 + 500, 'console']}
            speed={99}
            className="text-variable whitespace-pre-line"
            cursor={false}
          />
          <TypeAnimation
            sequence={[2200 + 500, '.log(']}
            speed={99}
            className="text-function whitespace-pre-line"
            cursor={false}
          />
          <TypeAnimation
            sequence={[2400 + 500, '“Welcome to:”']}
            speed={99}
            className="text-string whitespace-pre-line"
            cursor={false}
          />
          <TypeAnimation
            sequence={[2600 + 500, ')']}
            speed={99}
            className="text-function whitespace-pre-line"
            cursor={false}
          />
          <TypeAnimation
            sequence={[2700 + 500, '// Welcome to:']}
            speed={99}
            className="text-secondary whitespace-pre-line ml-3"
            cursor={false}
          />
        </div>
        <div className="w-full flex">
          <TypeAnimation
            sequence={[2900 + 500, 'myPortofolio(']}
            speed={99}
            className="text-function whitespace-pre-line"
            cursor={false}
          />
          <TypeAnimation
            sequence={[3100 + 500, 'ihsanFajarRamadhan']}
            speed={99}
            className="text-variable whitespace-pre-line"
            cursor={false}
          />
          <TypeAnimation
            sequence={[3300 + 500, ')']}
            speed={99}
            className="text-function whitespace-pre-line"
            cursor={false}
          />
          <TypeAnimation
            sequence={[3400 + 500, '// { name: “Ihsan Fajar Ramadhan”, ... }']}
            speed={99}
            className="text-secondary whitespace-pre-line ml-3"
            cursor={false}
          />
        </div>
        <TypeAnimation
          ref={ref}
          sequence={[
            () => showCursorAnimation(false),
            3600 + 500,
            () => showCursorAnimation(true),
            `// Hover my silhouette to render the picture`,
          ]}
          speed={99}
          className={`text-vue whitespace-pre-line w-full ${CURSOR_CLASS_NAME}`}
        />
        <a
          href={CV_URL}
          target="_blank"
          className="pointer-events-auto hover:underline text-vue clickable"
        >
          <TypeAnimation
            ref={ref}
            sequence={[
              () => showCursorAnimation(false),
              3800 + 500,
              () => showCursorAnimation(true),
              `// Click here to get the CV!`,
            ]}
            speed={99}
            className={`whitespace-pre-line w-full ${CURSOR_CLASS_NAME}`}
          />
        </a>
      </div>
      <div className='relative h-screen portrait'>
        <span
          className="opacity-10 text-black absolute top-0 font-extrabold nickname"
          style={{ fontSize: '400px' }}
          ref={nicknameRef}
        >
          SAN
        </span>
        <div className="relative overflow-hidden h-screen portrait">
          <img src={myPhoto} alt="Ihsan Fajar Ramadhan" ref={photoRef} />
          <svg
            className="absolute top-0"
            viewBox="0 0 402 704"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => showPotrait(true)}
            onMouseLeave={() => showPotrait(false)}
          >
            <path
              d="M174.674 11C197.874 -7.8 212.674 3.16666 217.174 11H226.674C238.674 16.8333 266.474 30.3 281.674 37.5C300.674 46.5 285.174 97 286.674 120.5C287.874 139.3 278.174 145 273.174 145.5L257.674 175.5V213C266.007 212.667 285.474 212.2 296.674 213C310.674 214 305.174 225.5 308.674 230C312.174 234.5 308.674 243 315.174 243C320.374 243 320.674 251 320.174 255C350.174 255 365.174 286.5 388.674 330C412.174 373.5 396.174 575.5 393.674 605.5C391.674 629.5 362.841 638.5 348.674 640C352.841 643.833 361.974 655 365.174 669C368.374 683 355.507 696.5 348.674 701.5C255.674 704.333 66.4741 705.5 53.6741 687.5C37.6741 665 72.6741 645.5 53.6741 646.5C34.6741 647.5 4.67412 553 1.17412 541.5C-2.32588 530 24.6741 346 30.1741 330C35.6741 314 56.1741 259 91.1741 255C126.174 251 114.674 244 134.674 219C150.674 199 168.007 201.667 174.674 205.5C174.674 173 139.674 121 134.674 97C129.674 73 145.674 34.5 174.674 11Z"
              fill="transparent"
              stroke="transparent"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
