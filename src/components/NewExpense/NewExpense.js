import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEdit,setIsEdit] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEdit(false);
  };
  const isEditingHandler = () => {
    setIsEdit(true);
  };
  const stopEdit = () => {
    setIsEdit(false);
  };
  return (
    <div className='new-expense'>
      {!isEdit && <button onClick={isEditingHandler}>Tambah data baru</button>}
      {isEdit && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEditing={stopEdit} />}
    </div>
  );
};

export default NewExpense;
