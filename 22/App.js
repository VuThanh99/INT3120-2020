import * as React from 'react';
import { SwitchNavigator,StackNavigator } from 'react-navigation';
import styles from './assets/css/css';
import Welcome from './components/Welcome';
import Menu2 from './components/Menu2';
import AddWord from './components/AddWord';
import ListWords2 from './components/ListWords2';
import Tutorial from './components/Tutorial';
import TickWords from './components/TickWords';
import SearchWords from './components/SearchWords';
import Welcomev1 from './components/Welcomev1.js';
import Menuv1 from './components/Menuv1.js';
import ListWordv1 from './components/ListWordv1.js';
import AddWordv1 from './components/AddWordv1.js';
import Practicev1 from './components/Practicev1.js';

/*export default SwitchNavigator(
  {
     Welcome:Welcome,
     Menu: Menu2,
     Add:AddWord,
     List:ListWords2,
     Tutorial:Tutorial,
     Tick:TickWords,
     Search:SearchWords,
  },
  {
    initialRouteName: 'Menu',
  }
);
*/
const Navigation = StackNavigator(
  {
     Welcome: {screen :Welcome},
     Menu: {screen: Menu2},
     List: {screen: ListWords2},
     Tutorial: {screen: Tutorial},
     Add: {screen: AddWord},
     Practice: {screen: Practice},
     Tick: {screen: TickWords},
     Search: {screen: SearchWords},
     Welcomev1: {screen :Welcomev1},
     Menuv1: {screen: Menuv1},
     Listv1: {screen: ListWordv1},
     Addv1: {screen: AddWordv1},
     Practicev1: {screen: Practicev1},
    
  },  
 
);
export default Navigation;