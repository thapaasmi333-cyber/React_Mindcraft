import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          expiresInMins: 30, // optional, defaults to 60
        }),
        credentials: "include", // Include cookies (e.g., accessToken) in the request
      });
      setError("");
      const data = await res.json();
      if (!res.ok) throw new Error("server is running");
      console.log("logged in successfully");
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <form
          onSubmit={handleLogin}
          className="bg-gray-100 p-6 rounded-1g shadow-md w-80"
        >
          <h2 className="text-2x1 font-bold mb-5 text-center">Login</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-800 text-white p2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
