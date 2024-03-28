import { useState } from "react";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";

import { ExpenseFormData } from "./schema";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Eggs", amount: 10, category: "Groceries" },
    { id: 2, description: "Electricity", amount: 100, category: "Utilities" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const handleSubmit = (formData: ExpenseFormData) => {
    const expense = { id: expenses.length + 1, ...formData };
    setExpenses([...expenses, expense]);
  };

  const changeCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleDeletion = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={handleSubmit} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={changeCategory} />
      </div>
      <ExpenseList onDelete={handleDeletion} expenses={filteredExpenses} />
    </div>
  );
}

export default ExpenseTracker;
