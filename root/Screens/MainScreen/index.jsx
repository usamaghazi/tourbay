
import { useState } from 'react'
import Input from '../../../components/Input'
import { Container } from './Styles'
const MainScreen = () => {
  const [nameEmail, setNameEmail] = useState('')
  return (
    <Container>
          <Input
          placeholder='Search by name or email'
          onChangeText={text => setNameEmail(text) }
          value={nameEmail}/>
    </Container>
  )
}

export default MainScreen