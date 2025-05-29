
import { View } from 'react-native'
import Colors from '../../constants/Colors'
import { Card, Icon, ImageWrapper, UserInfoText, UserInfoWrapper, UserName } from './Styles'

const UserCard = () => {

  const iconName = ['person-outline','mail-outline','call-outline','location-outline','globe-outline']

  return (
    <Card>
        <ImageWrapper/>
        <UserName>
          goldencat511
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
              Evenly Geri
            </UserInfoText>
            <UserInfoText>
              evenly.wang@gmail.com
            </UserInfoText>
            <UserInfoText>
               (186)-188-3421
            </UserInfoText>
            <UserInfoText>
              Upper Hutt
            </UserInfoText>
            <UserInfoText>
              New Zealand
            </UserInfoText>
          </View>
        </UserInfoWrapper>
    </Card>
  )
}

export default UserCard