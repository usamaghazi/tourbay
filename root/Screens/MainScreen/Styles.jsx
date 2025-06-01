import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
export const Container = styled.View({
    flex:1,
    paddingTop:10,
    paddingLeft:15,
    paddingRight:15,
    backgroundColor:Colors.background,
    // paddingBottom:5
})

export const CardWrapper = styled.View({
    flex:1,
    alignItems:'center',
    marginTop:5,
})

export const EmptyContainer = styled.View({
    flex:1,
    alignItems:'center',
    justifyContent:'center',
})

export const Wrapper = styled.View({
    alignItems:'center',
    marginBottom:70
})

export const Icon = styled(Ionicons)({
    marginBottom:5
})

export const EmptyText = styled.Text({
    fontSize:22,
    color:Colors.inputBorder,
    fontWeight:'bold',
})

export const Footer = styled.View({
    padding: 10,
    alignItems:'center',
    justifyContent:'center',
    
})