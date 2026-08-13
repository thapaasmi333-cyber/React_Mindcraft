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
    </>
  )
}
