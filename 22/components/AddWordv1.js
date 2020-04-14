import * as React from 'react';
import {StyleSheet,TextInput,View,Alert,Button,ScrollView,Text,AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/css1/css';

class AddWord extends React.Component {
    static navigationOptions = ({navigate}) => {
    let headerTitle = 'Thêm từ mới';
    let headerStyle = {backgroundColor: '#33CCFF', height: 60};
    let headerTitleStyle = {color: 'white' , fontSize: 22};
    let headerTintColor ='white';
    return {headerTitle, headerStyle, headerTitleStyle, headerTintColor}
  }
  render() {
    return (
    <ScrollView style={styles.container2}>
      
    <View>
      <Text style={styles.text}>Nhập từ mới(*)</Text>
      <TextInput style={styles.item}
        title='Nhập Từ Mới:'
               
      />
      <Text style={styles.text}>Nghĩa rút gọn(*)</Text>
      <TextInput style={styles.item}
        title='Nghĩa rút gọn:'
              
      />
      <Text style={styles.text}>Nghĩa đầy đủ(*)</Text>
      <TextInput style={styles.item}
        title='Nghĩa đầy đủ:'
           
      />
      <Text style={styles.text}>Phiên âm(*)</Text>
      <TextInput style={styles.item}
        title='Phiên âm:'
               
      />
      <Text style={styles.text}>Từ loại(*)</Text>
      <TextInput style={styles.item}
        title='Từ loại:'
         
      />
      <View style={styles.button}>
         <Button title='Thêm từ' color="#ffffff" onPress={() =>Alert.alert('1')}/>
      </View>
  </View>
    </ScrollView>
  );
  }

}
export default AddWord;
