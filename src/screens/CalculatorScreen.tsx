import { Text, View } from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';


export const CalculatorScreen = () => {

  const {
    result,
    prevResult,
    calculate,
    addBtn,
    substractBtn,
    multiplyBtn,
    divideBtn,
    deleteBtn,
    clear,
    positiveNegative,
    concatNumbers,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>

      {
        prevResult !== '0' &&
        <Text style={styles.smallResult}>{prevResult}</Text>
      }
      <Text
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {result}
      </Text>

      {/* Buttons */}
      {/* Button Row */}
      <View style={styles.row}>
        <CalculatorButton label="C" color="#9B9B9B" action={clear} />
        <CalculatorButton label="+/-" color="#9B9B9B" action={positiveNegative} />
        <CalculatorButton label="Del" color="#9B9B9B" action={deleteBtn} />
        <CalculatorButton label="/" color="#FF9427" action={divideBtn} />
      </View>
      {/* Button Row */}
      <View style={styles.row}>
        <CalculatorButton label="7" action={concatNumbers} />
        <CalculatorButton label="8" action={concatNumbers} />
        <CalculatorButton label="9" action={concatNumbers} />
        <CalculatorButton label="X" color="#FF9427" action={multiplyBtn} />
      </View>
      {/* Button Row */}
      <View style={styles.row}>
        <CalculatorButton label="4" action={concatNumbers} />
        <CalculatorButton label="5" action={concatNumbers} />
        <CalculatorButton label="6" action={concatNumbers} />
        <CalculatorButton label="-" color="#FF9427" action={substractBtn} />
      </View>

      {/* Button Row */}
      <View style={styles.row}>
        <CalculatorButton label="1" action={concatNumbers} />
        <CalculatorButton label="2" action={concatNumbers} />
        <CalculatorButton label="3" action={concatNumbers} />
        <CalculatorButton label="+" color="#FF9427" action={addBtn} />
      </View>

      {/* Button Row */}
      <View style={styles.row}>
        <CalculatorButton label="0" wide action={concatNumbers} />
        <CalculatorButton label="." action={concatNumbers} />
        <CalculatorButton label="=" color="#FF9427" action={calculate}/>
      </View>


    </View>
  );
};


