interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (idx: number) => void;
}

const ExpenseList = ({ onDelete, expenses }: Props) => {
  if (!expenses.length) return;

  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

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
        {expenses.map(({ id, description, amount, category }) => {
          return (
            <tr key={id}>
              <td>{description}</td>
              <td>{`$${amount.toFixed(2)}`}</td>
              <td>{category}</td>
              <td>
                <button
                  onClick={() => onDelete(id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{`$${total.toFixed(2)}`}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
