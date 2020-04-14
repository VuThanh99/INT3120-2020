import * as React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';
import styles from '../assets/css1/css';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    icon: '../assets/icon/star.png',
    title: 'Gia đình',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Trường học',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Âm nhạc',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    title: 'Giao thông',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Công nghệ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Du lịch',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    icon: '../assets/icon/star.png',
    title: 'Dịch vụ',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Thời tiết',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Thể thao',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    title: 'Bộ phận cơ thể',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Sức khỏe',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Động vật',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Thực vật',
  },
];

function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      //onPress={() => onSelect(id)}
      style={styles.item}
    >
     
      <Text style={styles.titles}>{title}</Text>
    </TouchableOpacity>
  );
}

class ListWordv1 extends React.Component {
/*  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );*/
  static navigationOptions = ({navigate}) => {
    let headerTitle = 'Danh sách từ vựng';
    let headerStyle = {backgroundColor: '#33CCFF', height: 60};
    let headerTitleStyle = {color: 'white' , fontSize: 22};
    let headerTintColor ='white';
    let headerBackTitle = '';
    return {headerTitle, headerStyle, headerTitleStyle, headerTintColor, headerBackTitle}
  }
  render(){
    return (
      <ScrollView style={styles.container2}>
      
      <SafeAreaView>
        <TextInput style={styles.view}
          title='Tìm kiếm:'
          placeholder="   Tìm kiếm..."
          
        />
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.title}
            //  selected={!!selected.get(item.id)}
            //  onSelect={onSelect}
            />
          )}
        //  keyExtractor={item => item.id}
        //  extraData={selected}
        />
      </SafeAreaView>
      </ScrollView>
    );
  }
}
 export default ListWordv1;
