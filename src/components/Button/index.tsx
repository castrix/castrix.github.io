import React from 'react'

interface Props {
  color: 'blue' | 'yellow' | 'green'
  children: React.ReactNode
  onClick?: () => void
}

export const IFButton: React.FC<Props> = (props) => {
  const colors = {
    blue: 'bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-500',
    yellow: 'bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500',
    green: 'bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500',
  }
  return (
    <button onClick={props.onClick} className={`outline-none text-white font-bold py-2 px-4 border-b-4 rounded focus:border-none ${colors[props.color]}`}>
      {props.children}
    </button>
  )
}
