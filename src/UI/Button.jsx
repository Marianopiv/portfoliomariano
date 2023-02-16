import React from 'react'

const Button = ({action,text,className}) => {
  return (
    <div onClick={action} className={`btn-class  w-36 h-18 pb-8 text-xs text-white ${className?className:""}`}>{text}</div>
  )
}

export default Button