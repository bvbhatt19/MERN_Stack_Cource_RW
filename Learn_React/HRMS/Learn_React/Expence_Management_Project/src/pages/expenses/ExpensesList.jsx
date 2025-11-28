import React, { useEffect, useState } from "react";
import {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} from "../../services/expensesService";
import ExpenseForm from "./ExpenseForm";

export default function ExpensesList() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetch = async () => {
    const res = await getExpenses();
    setItems(res);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this expense?")) return;
    await deleteExpense(id);
    fetch();
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Expenses</h2>
        <div>
          <button
            onClick={() => {
              setEditing(null);
              setShowForm(true);
            }}
            className="px-3 py-1 bg-green-600 text-white rounded"
          >
            Add
          </button>
        </div>
      </div>

      {showForm && (
        <ExpenseForm
          onDone={() => {
            setShowForm(false);
            fetch();
          }}
          initial={editing}
        />
      )}

      <div className="mt-4">
        <table className="w-full bg-white rounded">
          <thead>
            <tr>
              <th className="p-2">Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it) => (
              <tr key={it.id} className="border-t">
                <td className="p-2">
                  {it.date
                    ? new Date(it.date.seconds * 1000).toLocaleDateString()
                    : ""}
                </td>
                <td>{it.category}</td>
                <td>{it.amount}</td>
                <td>{it.description}</td>
                <td className="p-2">
                  <button
                    onClick={() => {
                      setEditing(it);
                      setShowForm(true);
                    }}
                    className="mr-2 px-2 py-1 border rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(it.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
