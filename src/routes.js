import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header'
import FeatherIcon from 'react-native-vector-icons/Feather';
import Preload from './pages/Preload';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewPost from './components/NewPost';


const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: { backgroundColor: '#222' },
        }}
        initialRouteName="Preload"
      >
        <Stack.Screen
          name="Preload"
          component={Preload}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTitle: () => <Header />,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTransparent: true,
            headerTitle: () => <Header />,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerBackImage: () => (
             <></>
            ),
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerTransparent: true,
            headerTitle: () => <Header />,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerBackImage: () => (
             <></>
            ),
          }}
        />
        <Stack.Screen
          name="NewPost"
          component={NewPost}
          options={{
            headerTransparent: false,
            headerTitle: () => <Header />,
            headerBackTitleVisible: true,
            headerTitleAlign: 'center',
            headerBackImage: () => (
              <FeatherIcon name="chevron-left" size={24} color="#f3f9ff" />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}