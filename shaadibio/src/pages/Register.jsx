import { useState } from "react";
import { registerUser } from "../utils/fakeAuth";
import { useNavigate } from "react-router-dom";

function Register(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const handleRegister = ()=>{

registerUser({email,password});
navigate("/login");

};

return(

<div className="flex justify-center items-center h-screen">

<div className="bg-white p-8 shadow w-96">

<h2 className="text-2xl font-bold mb-4">Register</h2>

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
className="bg-pink-500 text-white p-2 w-full"
onClick={handleRegister}
>
Register
</button>

</div>

</div>

);

}

export default Register;