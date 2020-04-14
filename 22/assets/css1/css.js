import {StyleSheet} from 'react-native';

import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    
    backgroundColor:'#F2EBEB',
    height:'100%',
  },
  
  paragraph: {
    color: '#33CCFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,

  },
  
  banner:{
    paddingTop: 10,
    height:70,
    //backgroundColor:'#33CCFF',
  },
  
  item: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    marginVertical: 5,
   // padding: 4,
    borderRadius: 5,
    flexDirection: 'row',
    borderColor: '#867F7F',
    borderWidth: 1,
    fontSize: 20,
    height: 60,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    marginVertical: 5,
   // padding: 4,
    borderRadius: 5,
    flexDirection: 'row',
    
    borderWidth: 1,
    fontSize: 20,
    height: 60,
  },
 
  
  view:{
    flex: 1,
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    marginVertical: 5,
   // padding: 4,
    borderRadius: 5,
    flexDirection: 'row',
    borderWidth: 1,
    fontSize: 20,
    height: 60,
    borderColor: '#33CCFF',
    marginTop: 10,
  },
  titles:{
    fontSize: 20,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingTop: 17,
  },

  text:{
    fontSize: 18,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    paddingLeft: 9,
    paddingTop: 10,
    color: 'red',
  },

  text1:{
    fontSize: 23,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    margin: 10,
    color: '#33CCFF',
    textAlign:'center',
  },

  text2:{
    fontSize: 20,
    fontFamily: 'Times New Roman',
    marginLeft: 7,
    marginRight: 7,
    textAlign: 'justify',
  },

  text3:{
    fontSize: 20,
    fontFamily: 'Times New Roman',
    marginHorizontal: 7, 
    textAlign: 'center',
  },




  icon:{
    marginLeft:10,
    height:50,
    width:50,
    marginTop: 4,

  },
  container2: {
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor:'#F2EBEB',
   // height: '100%',
  },
  paragraph2: {
    marginHorizontal:'8%',
    paddingBottom: '15%',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  logo2: {
    height: 162,
    width: 311,
    borderRadius:10,
    marginTop: '15%',
    marginHorizontal: '8%',
  }, 

  button:{
    backgroundColor:'#33CCFF',
    borderRadius:'10%',
    marginTop: 15,
    marginHorizontal: 80,
    lineHeight: 10,
    paddingVertical: 8, 
     fontWeight: 'bold',
  },

   button2:{
    backgroundColor:'#33CCFF',
    borderRadius:'10%',
    //alignItems: 'center',
   // justifyContent:'center',
    marginHorizontal: 80,
    lineHeight: 10,
    paddingVertical: 8,
     
     
  },

  button3:{
    backgroundColor:'#33CCFF',
    borderRadius:'10%',
    marginHorizontal: '8%',
    lineHeight: 10,
    paddingVertical: 8, 
    marginTop: 30,
     
  },

  button4:{
    backgroundColor:'#33CCFF',
    borderRadius:'10%',
    marginHorizontal: '4%',
    lineHeight: 10,
    paddingVertical: 8,
    marginTop: 110, 
   
  },

 
});
export default styles;