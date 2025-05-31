
import { View } from 'react-native'

import Colors from '../../constants/Colors'
import {
  Card,
  Icon,
  Thumbnail,
  UserInfoText,
  UserInfoWrapper,
  UserName
} from './Styles'


const UserCard = ({ item, index }) => {

  const iconName = ['person-outline','mail-outline','call-outline','location-outline','globe-outline']

  return (
    <Card>
          <Thumbnail
          source={{uri:item.picture.large}}
          resizeMode="cover"/>
        <UserName>
          {item.login.username}
        </UserName>
        <UserInfoWrapper>
            <View>
            {iconName.map(ionicon=>(
              <Icon
              key={ionicon}
              name={ionicon}
              size={18}
              color={Colors.iconColor}/>
            ))}
          </View>
          <View>
            <UserInfoText>
              {item.name.first} {item.name.last}
            </UserInfoText>
            <UserInfoText>
              {item.email}
            </UserInfoText>
            <UserInfoText>
               {item.phone}
            </UserInfoText>
            <UserInfoText>
              {item.location.city}
            </UserInfoText>
            <UserInfoText>
              {item.location.country}
            </UserInfoText>
          </View>
        </UserInfoWrapper>
    </Card>
  )
}

export default UserCard