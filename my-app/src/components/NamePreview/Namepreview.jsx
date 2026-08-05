import { useState } from "react";

export default function NamePreview() {
  const [name, setName] = useState("");

  return (
    <>
      <div>
        <h1>NAME PREVIEW </h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Welcome"
        ></input>
        <h2> {`Welcome ${name}`} </h2>
      </div>
    </>
  );
}
