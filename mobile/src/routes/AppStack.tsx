import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../screens/Landing';
import Teach from '../screens/Teach';
import StudyTabs from '../routes/StudyTabs';

const { Navigator, Screen } = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name='Landing' component={Landing} />
        <Screen name='Teach' component={Teach} />
        <Screen name='Study' component={StudyTabs} />
      </Navigator>
    </NavigationContainer>
  );
}
