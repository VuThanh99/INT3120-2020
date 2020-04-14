import * as React from 'react';
import { Button, View,StyleSheet ,Alert,Image,Text} from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

import styles from '../assets/css1/css';
import Constants from 'expo-constants';
class Practicev1 extends React.Component{
  static navigationOptions = ({navigate}) => {
    let headerTitle = 'Học từ đã chọn';
    let headerStyle = {backgroundColor: '#33CCFF', height: 60};
    let headerTitleStyle = {color: 'white', fontSize: 25}
    let headerTintColor ='white';
    let headerBackTitle = '';
    let headerRight = (
      <Image style = {{ marginRight: 20,}}source={require('../assets/icon/menu.png')}/>
    );
    return {headerTitle, headerStyle, headerTitleStyle, headerTintColor, headerBackTitle, headerRight}
  }
  render(){
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={{marginTop: 70,}}>
        <Text style={styles.text3}>Chưa có từ vựng nào được chọn để học </Text>
        <Text style={styles.text3}>(Để thêm từ được chọn nhấn vào dấu sao bên phải trong mục từ vựng) </Text>
        </View>
        <View style={{marginTop: 40,}}>
        <View style={styles.button3}>
          <Button title='Thêm từ' color="#ffffff" onPress={()=>navigate("List",{})}/>
        </View>
        <View style={styles.button3}>
          <Button title='Thêm từ ngẫu nhiên' color="#ffffff"/>
        </View>
        </View>
        <View style={styles.button4}>
          <Button title='Bắt đầu luyện tập' color="#ffffff" />
        </View>
      </View>
   // </View>
    );
  }
}
export default Practicev1;