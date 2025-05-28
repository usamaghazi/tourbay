
import { useState } from 'react'

import Input from '../../../components/Input'
import UserCard from '../../../components/UserCard'
import { CardWrapper, Container } from './Styles'
const MainScreen = () => {

  const [nameEmail, setNameEmail] = useState('')

  return (
    <Container>
          <Input
          placeholder='Search by name or email'
          onChangeText={text => setNameEmail(text) }
          value={nameEmail}/>

        <CardWrapper>
          <UserCard/>
        </CardWrapper>
          
    </Container>
  )
}

export default MainScreen