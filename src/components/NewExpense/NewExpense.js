import { useState } from "react";

import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {
  const [isFormShowing, setIsFormShowing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsFormShowing(false);
  };

  const showFormHandler = () => {
    setIsFormShowing(true);
  };

  const closeFormHandler = () => {
    setIsFormShowing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={showFormHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeFormHandler} />}
    </div>
  );
};

export default NewExpense;