import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-pink-500 text-white shadow">

      <h1 className="text-2xl font-bold">ShaadiBio 💍</h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/create">Create Biodata</Link>
      </div>

    </div>
  );
}

export default Navbar;