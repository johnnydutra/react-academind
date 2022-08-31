import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "e1", title: "Olympikus Corre Vento", amount: 299.99, date: new Date(2022, 7, 2)},
    { id: "e2", title: "New Balance RC Elite V2", amount: 1399.99, date: new Date(2022, 6, 19)},
    { id: "e3", title: "Fila Kenya Racer 5", amount: 399.99, date: new Date(2022, 3, 23)},
    { id: "e4", title: "Saucony Fastwitch 9", amount: 349.99, date: new Date(2021, 11, 11)}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title} 
        amount={expenses[3].amount} 
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
