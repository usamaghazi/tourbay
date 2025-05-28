
import { InputText } from './Styles'
const Input = ({
    placeholder,
    onChangeText,
    value,
}) => {
  return (
    
        <InputText
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}/>
   
  )
}

export default Input