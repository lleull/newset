import React from 'react'
import './input.css'
const Input = (props) => {
  return (
    <div className='inputT'>
        <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      
    </div>
  )
}

export default Input
