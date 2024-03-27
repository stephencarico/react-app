import { useState } from "react";

import Form from "./components/Form";
import Table from "./components/Table";

import { FormData } from "./hooks/schema";

function App() {
  const [expenses, setExpenses] = useState<FormData[]>([
    { description: "Eggs", amount: 10, category: "Groceries" },
    { description: "Electricity", amount: 100, category: "Utilities" },
  ]);

  const handleSubmit = (formData: FormData) => {
    setExpenses([...expenses, formData]);
  };

  const handleDeletion = (idx: number) => {
    console.log(idx);
    setExpenses(expenses.splice(idx, 1));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}></Form>
      <div className="py-4"></div>
      <Table deleteExpense={handleDeletion} expenses={expenses}></Table>
    </div>
  );
}

export default App;
