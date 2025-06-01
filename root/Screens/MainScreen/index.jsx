import { useRef, useState } from 'react'
import { ActivityIndicator, FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Input from '../../../components/Input'
import UserCard from '../../../components/UserCard'
import Colors from '../../../constants/Colors'
import useFetchUsers from '../../../hooks/useFetchUsers'
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

   const [showCursor, setShowCursor] = useState(false)
  const inputRef = useRef(null)

  const { displayedUsers, 
          loading,
          loadingMore,
          nameEmail,
          handleSetNameEmail, 
          loadMoreUsers } = useFetchUsers();

  const handleContainerPress = () => {
    if (inputRef.current) {
      inputRef.current.blur()
    }
    Keyboard.dismiss()
    setShowCursor(false)
  }

  const handleInputPress = () => {
    setShowCursor(true)
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
    <SafeAreaView style={{flex:1}}>
    <TouchableWithoutFeedback onPress={handleContainerPress}>
    <Container>
          <Input
          ref={inputRef}
          placeholder='Search by name or email'
          onChangeText={handleSetNameEmail }
          value={nameEmail}
          showCursor={showCursor}
          onInputPress={handleInputPress}/>

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
            keyExtractor={(_,index)=>index.toString()}
            // maxToRenderPerBatch={10}
            // updateCellsBatchingPeriod={50}
            // windowSize={5}
            // initialNumToRender={20}
            onEndReachedThreshold={0.5}
            onEndReached={loadMoreUsers}
            ListFooterComponent={renderFooter}
            removeClippedSubviews={false}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
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
    </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default MainScreen