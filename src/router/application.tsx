import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './bottomTab';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const Application = () => {
    return (
        <Navigator >
            <Screen name="dashboard" component={BottomTab} options={{
                headerShown: false,
            }} />
            {/* <Screen name="login" component={Login} options={{
                headerShown: false,
            }} />
            <Screen name="signup" component={Signup} options={{
                headerShown: false,
            }} /> */}

        </Navigator>
    );
}

export default Application;