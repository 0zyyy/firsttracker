import React, { useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
const dataAwal = [
  {
    id: 'e1',
    title: 'Gitar Akustik',
    amount: 450000,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'TV baru', amount: 1500000, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'PS4',
    amount: 5000000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Laptop Lenovo',
    amount: 6000000,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses,setExpenses] = useState(dataAwal);
  

  const addExpenseHandler = expense => {
    setExpenses(prevExpense => {
      return[expense, ...prevExpense]});
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
