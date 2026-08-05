import { useState } from "react";
export default function Fruits() {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Mango", price: 78 },
    { id: 2, name: "Apple", price: 23 },
    { id: 3, name: "Pear", price: 50 },
    { id: 4, name: "Papaya", price: 45 },
  ]);

  const handleDelete = (id) => {
    const updatedData = fruits.filter((fruit) => fruit.id !== id);
    setFruits(updatedData);
  };

  return (
    <>
      <div>
        <h1>Fruits :{fruits.length}</h1>
        {fruits.length === 0 && <h1>No fruits available</h1>}
        <ul>
          {fruits.map((f) => (
            <li key={f.id}>
              {f.name}{" "}
              <button onClick={() => handleDelete(f.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
