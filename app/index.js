import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import Options from './screens/Options';


EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $lightGray: '#E0E0E0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
  // outline: 1, debug layout positions
});

export default () => <Options />;
