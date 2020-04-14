import React, {Component, useCallback } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Button,
  TextInput,   
  Linking,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
import styles from '../assets/css1/css';


class Menuv1 extends React.Component { 
   static navigationOptions = ({navigate}) => {
    let headerTitle = '3000 từ vựng Tiếng Anh';
    let headerStyle = {backgroundColor: '#33CCFF', height: 60};
    let headerTitleStyle = {color: 'white'};
    let headerTintColor ='white';
    

    return {headerTitle, headerStyle, headerTitleStyle, headerTintColor, 
}
}
  


  render(){
    var {navigate} = this.props.navigation;
    return (
  <ScrollView style={styles.container2}>
   
    <View>
        <TextInput style={styles.view}
          title='Tìm kiếm:'
          placeholder="   Tìm kiếm..."
        />
        <View style={styles.item}>
          <Image style={styles.icon} source={require('../assets/icon1/star.png')}/>
          <Text style={styles.titles} onPress={() =>navigate("Practicev1",{})}>Học từ đã chọn</Text>
        </View>
        
         <View style={styles.item}>
          <Image style={styles.icon} source={require('../assets/icon1/list.png')}/>
          <Text style={styles.titles} onPress={() => navigate("Listv1",{})}>Danh sách từ</Text>
          </View>

         <View style={styles.item}>
          <Image style={styles.icon} source={require('../assets/icon1/add.png')}/>
          <Text style={styles.titles} onPress={() => navigate("Addv1",{})}>Thêm từ</Text>
        </View>
        
        <View style={styles.item}>
          <Image style={styles.icon} source={require('../assets/icon1/information.png')}/>
          <Text style={styles.titles} onPress={() => navigate("Tutorial",{})}>Hướng dẫn</Text>
        </View>

        <View style={styles.item}>
          <Image style={styles.icon} source={require('../assets/icon1/feedback.png')}/>
          <Text style={styles.titles} onPress={() =>Alert.alert('2')} >Góp ý</Text>
        </View>

        <View style={styles.item}>
          <Image style={styles.icon} source={require('../assets/icon1/setting.png')}/>
          <Text style={styles.titles} onPress={() =>Alert.alert('3')} >Cài đặt</Text>
        </View>

        <View style={styles.banner}>
          <Text style={styles.paragraph} >Ứng dụng học Tiếng Anh khác</Text>
        </View>

        <View style={styles.item}>
          <Image style={styles.icon} source={require('../assets/img/duolingo1.png')}/>
         
          <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.duolingo&hl=vi')}>
            <Text style = {styles.titles}>Duolingo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Image style={styles.icon} source={require('../assets/img/tflat.png')}/>
         
          <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.vn.dic.e.v.ui&hl=en_US')}>
            <Text style = {styles.titles}>Từ điển TFlat</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Image style={styles.icon} source={require('../assets/img/giao_tiep.png')}/>
         
          <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.ndm.tienganh&hl=vi')}>
            <Text style = {styles.titles}>Tiếng anh giao tiếp</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Image style={styles.icon} source={require('../assets/img/ngu_phap.png')}/>
         
          <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.bkit.congthuctienganh&hl=vi')}>
            <Text style = {styles.titles}>Công thức Tiếng Anh</Text>
          </TouchableOpacity>
        </View>

        
      </View>
    </ScrollView>
  );
  
  }

}

export default Menuv1;
