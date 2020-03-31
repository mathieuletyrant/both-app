import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { NameScreen } from './screens/Name'
import { GenderScreen } from './screens/Gender'
import { DoYouHaveCodeScreen } from './screens/DoYouHaveCode'
import { CodeScreen } from './screens/Code'
import { BirthdayDateScreen } from './screens/BirthdayDate'

import { CreateContextProvider } from './Create.context'

export const Stack = createStackNavigator()

export const CreateNavigator = () => (
  <CreateContextProvider>
    <Stack.Navigator
      headerMode="none"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen component={NameScreen} name="Name" />
      <Stack.Screen component={GenderScreen} name="Gender" />
      <Stack.Screen component={DoYouHaveCodeScreen} name="DoYouHaveCode" />
      <Stack.Screen component={CodeScreen} name="Code" />
      <Stack.Screen component={BirthdayDateScreen} name="BirthdayDate" />
    </Stack.Navigator>
  </CreateContextProvider>
)
