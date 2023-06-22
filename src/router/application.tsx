import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './bottomTab';
import StartClaim from '../screens/claims/startClaim';
import PlanDetails from '../screens/dashboard/planDetails';
import AccountInfo from '../screens/profile&settings/accountInfo';
import TermsOfService from '../screens/profile&settings/termsOfService';
import Support from '../screens/profile&settings/support';
import ResetPassword from '../screens/auth/resetPassword';
import Kyc from '../screens/kyc/kyc';

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
            <Screen name="support" component={Support} options={{
                headerShown: false,
            }} />
            <Screen name="resetpassword" component={ResetPassword} options={{
                headerShown: false,
            }} />
            <Screen name="kyc" component={Kyc} options={{
                headerShown: false,
            }} />
          
        </Navigator>
    );
}

export default Application;