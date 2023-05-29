import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './bottomTab';
import StartClaim from '../screens/claims/startClaim';
import PlanDetails from '../screens/dashboard/planDetails';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const Application = () => {
    return (
        <Navigator >
            <Screen name="dashboard" component={BottomTab} options={{
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

export default Application;