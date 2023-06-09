import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/Welcome'
import Login from "../screens/Login"
import Signup from "../screens/Signup"
import Register from '../screens/Register'

const Stack = createStackNavigator()

const AuthStark = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}

export default AuthStark

