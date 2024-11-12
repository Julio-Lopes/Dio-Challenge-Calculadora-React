import { InputContainer } from './styles';
import React from 'react'

const Input = ({value}) => {
  return (
    <InputContainer>
      <input disabled value={value}/>
    </InputContainer>
  )
}

export default Input;