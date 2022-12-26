/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';

interface Props {
  label: string;
  color?: string;
  wide?: boolean;
  action: (character: string)=> void;
}

export const CalculatorButton = ({ label, color = '#2D2D2D', wide = false, action }: Props) => {
  return (
    <TouchableOpacity
     onPress={()=> action(label)}
    >
      <View style={{
        ...styles.button,
        backgroundColor: color,
        width: wide ? 180 : 80,
      }}>
        <Text style={{
          ...styles.buttonText,
          color: (color === '#9B9B9B') ? 'black' : 'white',
        }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
