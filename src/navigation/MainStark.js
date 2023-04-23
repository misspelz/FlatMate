import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTab from './bottomTab'


const Stack = createStackNavigator()

const MainStark = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  )
}

export default MainStark