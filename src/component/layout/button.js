import React from 'react';
import * as NBE from 'native-base';
import {TouchableOpacity} from 'react-native';

export const Button = props => {
  return (
    <TouchableOpacity {...props}>
      <NBE.Box
        bg={{
          linearGradient: {
            colors: ['primary.100', 'primary.50'],
            start: [0, 0],
            end: [1, 0],
          },
        }}
        shadow="2"
        alignItems={'center'}
        p="2"
        mt="8"
        borderRadius={'15'}>
        <NBE.Text color="#fff" fontSize={'md'} bold>
          {props.children}
        </NBE.Text>
      </NBE.Box>
    </TouchableOpacity>
  );
};
