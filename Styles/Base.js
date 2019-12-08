import {StyleSheet} from 'react-native'

const spaceAvailable = {
  flex:1,
  alignItems:"center",
  justifyContent:"center"
}

const Styles = StyleSheet.create({
  MainScreen: {
    backgroundColor: '#fff',
    ...spaceAvailable
  },
  Header:{
    backgroundColor:"#00897b",
  },
  TextHeader:{
    color:"#FFFFFF",
    fontWeight:"bold",
    fontSize:20
  },
  Footer:{
    backgroundColor:"#00897b",
    alignItems:"center",
    justifyContent:"center",
  },
  TextFooter:{
    fontSize:12
  },
  Button:{
    backgroundColor:"#546e7a"
  }
});

export default Styles