import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'

import Input from '../../../components/Input'
import UserCard from '../../../components/UserCard'
import Colors from '../../../constants/Colors'
import {
  CardWrapper,
  Container,
  EmptyContainer,
  EmptyText,
  Footer,
  Icon,
  Wrapper
} from './Styles'
const MainScreen = () => {

  const [nameEmail, setNameEmail] = useState('')
  const [allUsers, setAllUsers] = useState([]) // Store ALL 50 users
  const [displayedUsers, setDisplayedUsers] = useState([]) // Store 10 Users
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState(null)

  const USERS_PER_BATCH = 10 // Show 10 users at a time

  useEffect(()=>{

    const handleFetchUsers = async () => {
        setLoading(true)
      try {

          const responce = await fetch('https://randomuser.me/api/?results=50&page=1')

          if(!responce.ok){
            throw new Error('Something Went Wrong')
          }

          const userData = await responce.json()
          setAllUsers(userData.results)
          setDisplayedUsers(userData.results.slice(0, USERS_PER_BATCH))

      } catch (error) {
          console.error(error.message)
          setError(error.message)
      } finally{
        setLoading(false)
      }
    }    

    handleFetchUsers()
  },[])

  const loadMoreUsers = () => {
    if(loadingMore) return 

    const currentUsers = displayedUsers.length
    const remainingUsers = allUsers.length - currentUsers

    if(remainingUsers <= 0) return

    setLoadingMore(true)

    setTimeout(()=>{
      const nextUsers = currentUsers + USERS_PER_BATCH
      const newBatch = allUsers.slice(currentUsers,nextUsers)
      if (newBatch.length > 0) {
        setDisplayedUsers(pre => [...pre, ...newBatch])
      }
      setLoadingMore(false)
    },1000)
  }

  const renderFooter = () => {
    if(!loadingMore) return null

    return(
        <Footer>
          <ActivityIndicator color={Colors.textTitle} size='small'/>
        </Footer>
    )
  }

  return (
    <Container>
          <Input
          placeholder='Search by name or email'
          onChangeText={text => setNameEmail(text) }
          value={nameEmail}/>

        {loading ? (
          <EmptyContainer>
            <Wrapper>
              <ActivityIndicator
              color={Colors.textTitle}
              size="large"/>
            </Wrapper>
          </EmptyContainer>
        ): displayedUsers && displayedUsers.length > 0 ? 
        (
          <CardWrapper>
            <FlatList
            data={displayedUsers}
            renderItem={({ item, index })=>(
              <UserCard
              key={index}
              item={item}
              index={index}/>
            )}
            keyExtractor={(_,index)=>index}
            // maxToRenderPerBatch={10}
            // updateCellsBatchingPeriod={50}
            // windowSize={5}
            // initialNumToRender={20}
            onEndReachedThreshold={0.5}
            onEndReached={loadMoreUsers}
            ListFooterComponent={renderFooter}
            removeClippedSubviews={false}
            />
          </CardWrapper>
          ) 
          :
          (
          <EmptyContainer>
            <Wrapper>
              <Icon name='documents'
                    size={60}
                    color={Colors.inputBorder}/>
              <EmptyText>No user found</EmptyText>
              </Wrapper>
          </EmptyContainer>)
          
          
            }
            
    </Container>
  )
}

export default MainScreen