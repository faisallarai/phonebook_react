import React from 'react'

const Button = ({text, type, handleClick, id}) => <button id={id} onClick={handleClick} type={type}>{text}</button>

export default Button