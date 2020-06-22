import { openDatabase } from 'expo-sqlite';
import { INITDBSQL, ADDEXPENSESQL, GETEXPENSESSQL } from './sql';

const db = openDatabase('expenses');

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        INITDBSQL,
        [],
        () => resolve(),
        (_, err) => reject(err),
      );
    });
  });
};

export const addExpense = (date, amount, description) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        ADDEXPENSESQL,
        [date, amount, description],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      );
    });
  });
};

export const getExpenses = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        GETEXPENSESSQL,
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      );
    });
  });
};
