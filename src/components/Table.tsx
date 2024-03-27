import React, { ChangeEvent, useEffect, useState } from "react";

import { FormData } from "../hooks/schema";

interface Props {
  expenses: FormData[];
}

const Table = ({ expenses }: Props) => {
  const [category, setCategory] = useState("");

  const filteredExpenses: FormData[] = category
    ? expenses.filter((expense) => expense.category === category)
    : expenses;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <select
        onChange={handleChange}
        className="form-select mb-3"
        aria-label="Category select field"
        defaultValue={""}
      >
        <option value="">All Categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map(({ description, amount, category }, index) => {
            return (
              <tr key={index}>
                <td>{description}</td>
                <td>{`$${amount.toFixed(2)}`}</td>
                <td>{category}</td>
                <td>
                  <button className="btn btn-outline-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
