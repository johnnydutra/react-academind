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

  const hideFormHandler = () => {
    setIsFormShowing(false);
  };

  return (
    <div className="new-expense">
      {!isFormShowing && <button onClick={showFormHandler}>Add New Expense</button>}
      {isFormShowing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideFormHandler} />}
    </div>
  );
};

export default NewExpense;