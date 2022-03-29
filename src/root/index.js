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
        {/* <DefaulScreen.Screen name="tab-screen" options={{headerShown: false}}>
          {() => <TabScreen />}
        </DefaulScreen.Screen> */}
        <Tab.Screen
          name="Home"
          component={Page.HomeIndex}
          options={() => ({
            gestureEnabled: true,
            headerShown: false,
            gestureDirection: 'horizontal',
            detachPreviousScreen: true,
          })}
        />
        <DefaulScreen.Screen
          name="info-pajak"
          component={Page.IndexInfoPajak}
          options={() => ({
            gestureEnabled: true,
            headerShown: false,
            gestureDirection: 'horizontal',
            detachPreviousScreen: true,
          })}
        />
        <DefaulScreen.Screen
          name="data-pajak"
          component={Page.IndexDataPajak}
          options={() => ({
            gestureEnabled: true,
            headerShown: false,
            gestureDirection: 'horizontal',
            detachPreviousScreen: true,
          })}
        />

        <DefaulScreen.Screen
          name="pendaftaran-e-samsat"
          component={Page.IndexDaftarESamsat}
          options={() => ({
            gestureEnabled: true,
            headerShown: false,
            gestureDirection: 'horizontal',
            detachPreviousScreen: true,
          })}
        />

        <DefaulScreen.Screen
          name="data-e-samsat"
          component={Page.IndexDataESamsat}
          options={() => ({
            gestureEnabled: true,
            headerShown: false,
            gestureDirection: 'horizontal',
            detachPreviousScreen: true,
          })}
        />

        <DefaulScreen.Screen
          name="data-pembayaran"
          component={Page.IndexDataPembayaran}
          options={() => ({
            gestureEnabled: true,
            headerShown: false,
            gestureDirection: 'horizontal',
            detachPreviousScreen: true,
          })}
        />

        <DefaulScreen.Screen
          name="info-data-pembayaran"
          component={Page.IndexInfoDataBayar}
          options={() => ({
            gestureEnabled: true,
            headerShown: false,
            gestureDirection: 'horizontal',
            detachPreviousScreen: true,
          })}
        />

        <DefaulScreen.Screen
          name="daftar-layanan"
          component={Page.IndexDaftarLayanan}
          options={() => ({
            gestureEnabled: true,
            headerShown: false,
            gestureDirection: 'horizontal',
            detachPreviousScreen: true,
          })}
        />

        <DefaulScreen.Screen
          name="list-daftar-layanan"
          component={Page.IndexListDaftarLayanan}
          options={() => ({
            gestureEnabled: true,
            headerShown: false,
            gestureDirection: 'horizontal',
            detachPreviousScreen: true,
          })}
        />

        <DefaulScreen.Screen
          name="mekanisme-pelayanan"
          component={Page.IndexMekanismeLayanan}
          options={() => ({
            gestureEnabled: true,
            headerShown: false,
            gestureDirection: 'horizontal',
            detachPreviousScreen: true,
          })}
        />
      </DefaulScreen.Navigator>
    </NavigationContainer>
  );
};
