import { useState } from "react";
import { loginUser } from "../utils/fakeAuth";
import { useNavigate } from "react-router-dom";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = () => {

const success = loginUser(email,password);

if(success){
navigate("/dashboard");
}else{
alert("Invalid credentials");
}

};

return(

<div className="flex justify-center items-center h-screen bg-gray-100">

<div className="bg-white p-8 shadow rounded w-96">

<h2 className="text-2xl font-bold mb-5">Login</h2>

<input
className="border p-2 w-full mb-3"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
className="border p-2 w-full mb-3"
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={handleLogin}
className="bg-pink-500 text-white p-2 w-full rounded"
>
Login
</button>

</div>

</div>

);

}

export default Login;