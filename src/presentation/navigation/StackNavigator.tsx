import {
  createStackNavigator,
  type StackCardStyleInterpolator,
} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {LoginScreen} from '../screens/auth/LoginScreen';
import {RegisterScreen} from '../screens/auth/RegisterScreen';
import {LoadingScreen} from '../screens/loading/LoadingScreen';
import {ProductScreen} from '../screens/product/ProductScreen';

export type RootStackParams = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Loading: undefined;
  Product: {productId: string};
};

const Stack = createStackNavigator<RootStackParams>();

const fadeAnimation: StackCardStyleInterpolator = ({current}) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  };
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{cardStyleInterpolator: fadeAnimation}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{cardStyleInterpolator: fadeAnimation}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{cardStyleInterpolator: fadeAnimation}}
      />
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{cardStyleInterpolator: fadeAnimation}}
      />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};
