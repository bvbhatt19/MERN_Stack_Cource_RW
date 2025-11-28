import React, { useEffect, useState } from "react";
import {
  getClients,
  addClient,
  deleteClient,
} from "../../services/clientsService";

export default function ClientsList() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");

  const fetch = async () => setList(await getClients());
  useEffect(() => {
    fetch();
  }, []);

  const add = async () => {
    if (!name) return alert("Enter name");
    await addClient({ name });
    setName("");
    fetch();
  };
  const remove = async (id) => {
    if (!confirm("Delete?")) return;
    await deleteClient(id);
    fetch();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Clients</h2>
      <div className="mt-2 flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          placeholder="Name"
        />
        <button
          onClick={add}
          className="px-3 py-1 bg-green-600 text-white rounded"
        >
          Add
        </button>
      </div>

      <ul className="mt-4 bg-white rounded shadow">
        {list.map((e) => (
          <li key={e.id} className="p-2 border-b flex justify-between">
            <span>{e.name}</span>
            <div>
              <button
                onClick={() => remove(e.id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
