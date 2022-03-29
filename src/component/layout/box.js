import React from 'react';
import * as NBE from 'native-base';

export const Box = props => {
  return (
    <NBE.Box p="5" bg="#fff" borderRadius={'12'} shadow="4" {...props}>
      {props.children}
    </NBE.Box>
  );
};
