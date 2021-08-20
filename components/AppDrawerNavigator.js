import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSidebar from './CustomSidebar'
import { TabNavigator } from './TabNavigator';
import Settings from '../screens/Settings'
import MyDonation from '../screens/MyDonation'
import Notifications from '../screens/Notifications'
import {Icon} from 'react-native-elements'
import LogoutScreen from '../screens/LogoutScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {screen : TabNavigator},
    Settings : {screen : Settings,
        navigationOptions : {
            drawerLabel : 'Settings'
        }
},
    LogoutScreen: {screen : LogoutScreen,
        navigationOptions: {
            drawerLabel : 'Logout'
        }}
   // MyDonation : {screen : MyDonation},
   // Notifications : {screen : Notifications}
},
{ contentComponent : CustomSidebar},
{ initialRouteName : "Home" }
)