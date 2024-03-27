import React from "react";

import { FormData } from "../hooks/schema";

interface Props {
  expenses: FormData[];
}

const Table = ({ expenses }: Props) => {
  return (
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
        {expenses.map(({ description, amount, category }) => {
          return (
            <tr>
              <td>{description}</td>
              <td>{amount}</td>
              <td>{category}</td>
              <td>
                <button className="btn btn-outline-danger">Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
