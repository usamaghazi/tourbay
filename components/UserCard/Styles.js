import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Colors from '../../constants/Colors';

export const Card = styled.View({
    height:'57%',
    width:'90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: "0.1px",
    shadowRadius: 4,
    elevation: "3px",
    backgroundColor:Colors.background,
    paddingTop: 25,
    paddingBottom:20,
    margin: 5,
    borderRadius:5,
    // alignItems:'center',
})

export const ImageWrapper = styled.View({
    height: '33%',
    width:'33%',
    borderRadius:50,
    backgroundColor:Colors.inputBorder,
    alignSelf:'center'
})

export const UserName = styled.Text({
    marginTop:20,
    fontSize:21,
    fontWeight:'bold',
    color: Colors.textTitle,
    alignSelf:'center'
})

export const UserInfoWrapper = styled.View({
    flexDirection:'row',
    marginTop:20,
    paddingLeft:30,
    paddingRight:30
})

export const Icon = styled(Ionicons)({
    marginBottom:10
})

export const UserInfoText = styled.Text({
    fontSize:15,
    color:Colors.textInfo,
    fontWeight:'bold',
    marginBottom:8,
    marginLeft:7
})