import {useRef, useState} from 'react';

enum Operators {
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [prevResult, setPrevResult] = useState('0');
  const [result, setResult] = useState('0');

  const lastOperation = useRef<Operators>();

  const clear = () => {
    setResult('0');
    setPrevResult('0');
  };

  const concatNumbers = (numberLabel: string) => {
    // Not acepting more than one decimal point
    // eslint-disable-next-line curly
    if (result.includes('.') && numberLabel === '.') return;

    if (result.startsWith('0') || result.startsWith('-0')) {
      //Decimal point
      if (numberLabel === '.') {
        setResult(result + numberLabel);
      } else if (numberLabel === '0' && result.includes('.')) {
        //If there's a 0 after the decimal point
        setResult(result + numberLabel);
      } else if (numberLabel !== '0' && !result.includes('.')) {
        //If there's no point and it's different from 0
        setResult(numberLabel);
      } else if (numberLabel === '0' && !result.includes('.')) {
        setResult(result);
      } else {
        setResult(result + numberLabel);
      }
    } else {
      setResult(result + numberLabel);
    }
  };

  const positiveNegative = () => {
    if (result.includes('-')) {
      setResult(result.replace('-', ''));
    } else {
      setResult('-' + result);
    }
  };

  const deleteBtn = () => {
    //Mi solución
    if (result.length < 2 || (result.length <= 2 && result.startsWith('-'))) {
      setResult('0');
    } else {
      setResult(result.slice(0, -1));
    }

    //Solución del video
    // let negative = '';
    // let temp = result;
    // if (result.includes('-')){
    //   negative = '-';
    //   temp = result.substring(1);
    // }
    // if ( temp.length > 1 ){
    //   setResult( negative + temp.slice(0, -1));
    // } else {
    //   setResult('0');
    // }
  };

  const resultToPrevious = () => {
    if (result.endsWith('.')) {
      setPrevResult(result.slice(0, -1));
    } else {
      setPrevResult(result);
    }
    setResult('0');
  };

  const divideBtn = () => {
    resultToPrevious();
    lastOperation.current = Operators.divide;
  };

  const multiplyBtn = () => {
    resultToPrevious();
    lastOperation.current = Operators.multiply;
  };

  const substractBtn = () => {
    resultToPrevious();
    lastOperation.current = Operators.substract;
  };

  const addBtn = () => {
    resultToPrevious();
    lastOperation.current = Operators.add;
  };

  const calculate = () => {
    const first = Number(result);
    const second = Number(prevResult);

    switch (lastOperation.current) {
      case Operators.add:
        setResult(`${first + second}`);
        break;
      case Operators.substract:
        setResult(`${second - first}`);
        break;
      case Operators.multiply:
        setResult(`${first * second}`);
        break;
      case Operators.divide:
        setResult(`${second / first}`);
        break;
      default:
        break;
    }
    setPrevResult('0');
  };

  return {
    prevResult,
    result,
    clear,
    concatNumbers,
    positiveNegative,
    deleteBtn,
    divideBtn,
    multiplyBtn,
    substractBtn,
    addBtn,
    calculate,
  };
};
