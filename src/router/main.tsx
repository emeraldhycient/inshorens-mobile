import { createStackNavigator } from '@react-navigation/stack';
import StartClaim from '../screens/claims/startClaim';
import PlanDetails from '../screens/dashboard/planDetails';

import Auth from './auth';
import BottomTab from './bottomTab';


const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const Main = () => {
    return (
        <Navigator initialRouteName='auth'>
            <Screen name="auth" component={Auth} options={{
                headerShown: false,
            }} />
            <Screen name="application" component={BottomTab} options={{
                headerShown: false,
            }} />
            <Screen name="startClaim" component={StartClaim} options={{
                headerShown: false,
            }} />
            <Screen name="planDetails" component={PlanDetails} options={{
                headerShown: false,
            }} />
        </Navigator>
    );
}

export default Main;