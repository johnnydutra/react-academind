import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Olympikus Corre Vento", amount: 299.99, date: new Date(2022, 7, 2)},
  { id: "e2", title: "New Balance RC Elite V2", amount: 1399.99, date: new Date(2022, 6, 19)},
  { id: "e3", title: "Fila Kenya Racer 5", amount: 399.99, date: new Date(2022, 3, 23)},
  { id: "e4", title: "Saucony Fastwitch 9", amount: 349.99, date: new Date(2021, 11, 11)}
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(previousExpenses =>{
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
