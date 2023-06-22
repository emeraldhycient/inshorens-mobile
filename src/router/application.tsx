import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './bottomTab';
import StartClaim from '../screens/claims/startClaim';
import PlanDetails from '../screens/dashboard/planDetails';
import AccountInfo from '../screens/profile&settings/accountInfo';
import TermsOfService from '../screens/profile&settings/termsOfService';

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
          
            <Screen name="accountInfo" component={AccountInfo} options={{
                headerShown: false,
            }} />
            <Screen name="termsOfService" component={TermsOfService} options={{
                headerShown: false,
            }} />
          
        </Navigator>
    );
}

export default Application;