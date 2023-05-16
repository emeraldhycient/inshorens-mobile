import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/login';
import Signup from '../screens/auth/signup';
import GetStarted from '../screens/onboarding/getStarted';
import ResetPassword from '../screens/auth/resetPassword';


const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const Auth = () => {
    return (
        <Navigator initialRouteName='getstarted'>
            <Screen name="getstarted" component={GetStarted} options={{
                headerShown: false,
            }} />
            <Screen name="login" component={Login} options={{
                headerShown: false,
            }} />
            <Screen name="signup" component={Signup} options={{
                headerShown: false,
            }} />
            <Screen name="resetpassword" component={ResetPassword} options={{
                headerShown: false,
            }} />

        </Navigator>
    );
}

export default Auth;