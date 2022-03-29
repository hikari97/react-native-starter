import React from 'react';
import * as NBE from 'native-base';

export const Container = props => {
  return (
    <NBE.Box p="25px">
      <NBE.Box mb="8">
        <NBE.Text fontSize={'22px'}>{props.title}</NBE.Text>
      </NBE.Box>
      {props.children}
    </NBE.Box>
  );
};

export * from './box';
export * from './button';
