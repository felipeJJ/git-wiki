import React from 'react'
import { ImputContainer } from './styles'

function Input({value, onChange}) {
  return (
    <ImputContainer>
        <input value={value} onChange = {onChange}/>
    </ImputContainer>
  )
}

export default Input;