import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Image, StyleSheet } from 'react-native';
import Claims from '../screens/claims/claims';
import Home from '../screens/dashboard/Home';
import Colors from '../themes/Colors';
import Profile from '../screens/profile&settings/profile';
import Expense from '../screens/expenses/expenses';

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor={Colors.white}
            inactiveColor={Colors.white}
            barStyle={{ backgroundColor: Colors.baseColor }}
        >
            <Tab.Screen name="home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <Image source={require("../../assets/icons/bottomtab/home.png")} style={styles.icon} />
                ),
            }} />
            <Tab.Screen name="claim" component={Claims} options={{
                tabBarLabel: 'claims',
                tabBarIcon: ({ color }) => (
                    <Image source={require("../../assets/icons/bottomtab/claim.png")} style={styles.icon} />
                ),
            }} />
            <Tab.Screen name="expenses" component={Expense} options={{
                tabBarLabel: 'expenses',
                tabBarIcon: ({ color }) => (
                    <Image source={require("../../assets/icons/bottomtab/claim.png")} style={styles.icon} />
                ),
            }} />
            <Tab.Screen name="profile" component={Profile} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <Image source={require("../../assets/icons/bottomtab/profile.png")} style={styles.icon} />
                ),
            }} />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    }

})

export default BottomTab;