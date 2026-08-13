import { useState } from "react";

export default function login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const login = await new Promise((resolve)=>{
        setTimeout(()=>{
            if (username === "admin" && password === "6767"){
                resolve(true)
            }else {
                resolve(false)
            }
        },1000)
    })
    if (login){
        navigate("/")
    }else{
        alert("invalid username or password")
    }
  };

  return(
    <>
    <div className="flex justify-center mt-10">
        <form
        onSubmit={handleLogin}
        className="bg-gray-100 p-6 rounded-1g shadow-md w-80">

            <h2 className="text-2x1 font-bold mb-5 text-center">Login</h2>

            <input 
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            className="w-full p-2 mb-4 border rounded"/>

            <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"/>

            <button
            type="submit"
            className="w-full bg-blue-800 text-white p2 rounded hover:bg-blue-700">
                Login
            </button>  
        
        </form>
    </div>
    </>
  )
}
