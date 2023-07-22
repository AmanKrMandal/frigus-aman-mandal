import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/reducers/counterReducer';

const CounterComponent = () => {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Counter: {counter}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default CounterComponent;
