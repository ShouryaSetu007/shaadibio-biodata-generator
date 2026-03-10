import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="text-center py-24 bg-pink-50">

      <h1 className="text-5xl font-bold text-pink-600">
        Create Beautiful Marriage Biodata
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        Build elegant biodata for matrimonial profiles instantly.
      </p>

      <Link to="/create">
        <button className="mt-8 bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600">
          Start Creating
        </button>
      </Link>

    </div>
  );
}

export default Hero;