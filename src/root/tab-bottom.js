import React from 'react';
import * as NBE from 'native-base';
import {DataIcon} from './dataIcon';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const primaryColor = '#ff0';

export const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <NBE.Box flexDirection="row" bg="#fff">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const icon = DataIcon(route.name);

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}
            key={label}>
            <NBE.Box p="1" pt="2" alignItems="center">
              <Icon
                name={icon}
                color={isFocused ? primaryColor : '#888'}
                size={22}
              />
              <NBE.Text
                textAlign="center"
                color={isFocused ? primaryColor : '#888'}
                fontSize="12px">
                {label}
              </NBE.Text>
            </NBE.Box>
          </TouchableOpacity>
        );
      })}
    </NBE.Box>
  );
};
