import styled from 'styled-components/native';
import Colors from '../../constants/Colors';

export const Card = styled.View({
    height:'55%',
    width:'90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: "0.1px",
    shadowRadius: 4,
    elevation: "3px",
    backgroundColor:Colors.background,
    paddingTop: 20,
    paddingBottom:20,
    margin: 5,
    borderRadius:5,
    alignItems:'center',
    // justifyContent:'center'
    
})