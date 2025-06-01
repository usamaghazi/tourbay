import React from 'react'
import { InputText } from './Styles'
const Input = React.forwardRef(({
    placeholder,
    onChangeText,
    value,
    showCursor,
    onInputPress
}, ref) => {
  return (
    
        <InputText
        ref={ref}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        caretHidden={!showCursor}
        onPressIn={onInputPress}
        />
   
  )
})

export default Input