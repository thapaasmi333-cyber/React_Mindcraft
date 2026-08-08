import { useState } from "react";

export default function ShoppingList() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.trim() === "") return;

    const alreadyExits = list.some(
      (i) => i.name.toLowerCase() === item.trim().toLowerCase(),
    );
    if (alreadyExits) {
      alert("items already exits");
      return;
    }
    const newItem = {
      id: Date.now(),
      name: item.trim(),
    };
    setList([...list, newItem]);
    setItem("");
  };

  return (
    <div>
      <h1>🛒 Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add item..."
        />
        <button>Add</button>
      </form>
      <ul>
        {list.map((i) => (
          <li key={i.id}>
            {i.name}{" "}
            <button onClick={() => setList(list.filter((x) => x.id !== i.id))}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
