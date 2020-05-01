import * as React from 'react';
import { Text } from 'react-native';

export default function MyText({ value, disabled, onPress }) {
  return (
    <Text
      disabled={disabled}
      onPress={onPress}
    >
      {value}
    </Text>
  );
}