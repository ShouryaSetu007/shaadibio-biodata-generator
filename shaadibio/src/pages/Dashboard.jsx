import { Link } from "react-router-dom";

function Dashboard(){

return(

<div className="p-10">

<h1 className="text-3xl font-bold mb-6">
Welcome to ShaadiBio
</h1>

<Link to="/create">
<button className="bg-pink-500 text-white px-6 py-3 rounded">
Create New Biodata
</button>
</Link>

</div>

);

}

export default Dashboard;