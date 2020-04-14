import * as React from 'react';
import { Button, View,StyleSheet ,Alert,Image,Text} from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

import styles from '../assets/css1/css';
import Constants from 'expo-constants';
class Welcomev1 extends React.Component{
  static navigationOptions = ({navigate}) => {
    let headerTitle = '3000 từ vựng Tiếng Anh';
    let headerStyle = {backgroundColor: '#33CCFF', height: 60};
    let headerTitleStyle = {color: 'white', fontSize: 25}
    return {headerTitle, headerStyle, headerTitleStyle}
  }
  render(){
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={styles.logo2} source={require('../assets/img/logo.png')} />
        <Text style={styles.paragraph2}>
          Học 3000 từ vựng Tiếng Anh thông dụng nhanh hơn, hiệu quả hơn
        </Text>  
        <View style={styles.button2}>
          <Button title="Bắt Đầu" color="#ffffff" onPress={() => navigate("Menuv1,{})}/>
        </View>
      </View>
   // </View>
    );
  }
}
export default Welcomev1;