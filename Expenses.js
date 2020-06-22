import React from 'react';
import { View, Text, Button } from 'react-native';
import { addExpense, getExpenses } from './data/db';

const Expenses = () => {
  const onAddExpense = () => {
    addExpense(Date.now(), 240, 'Test Transaction')
      .then(console.log)
      .catch(console.log);
  };

  const onGetExpenses = () => {
    getExpenses().then(console.log).catch(console.log);
  };
  return (
    <View
      style={{ justifyContent: 'center', height: '100%', alignItems: 'center' }}
    >
      <Button title="Save Expense" onPress={onAddExpense} />
      <Button title="Get Expenses" onPress={onGetExpenses} />
    </View>
  );
};

export default Expenses;
