import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as Page from './../screen';
import {MyTabBar} from './tab-bottom';

const Tab = createBottomTabNavigator();
const DefaulScreen = createStackNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, unmountOnBlur: true}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Page.HomeIndex} />
    </Tab.Navigator>
  );
};

export const NavigateRoot = () => {
  return (
    <NavigationContainer>
      <DefaulScreen.Navigator>
        <DefaulScreen.Screen name="tab-screen" options={{headerShown: false}}>
          {() => <TabScreen />}
        </DefaulScreen.Screen>
      </DefaulScreen.Navigator>
    </NavigationContainer>
  );
};
