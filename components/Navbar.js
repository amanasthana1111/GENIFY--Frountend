import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-[#070B12] text-white">
      {/* Left: Logo with image */}
      <div className="flex items-center gap-3">
        <img
          src="https://imgs.search.brave.com/nJVNi_CfX5ZDxQi-qUXpDY1vqBXSlYLO4LIOUO3fODQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMucmZzdGF0LmNv/bS9yZW5kZXJmb3Jl/c3QvaW1hZ2VzL3Yy/L2xvZ28taG9tZXBh/Z2UvdHJpYW5nbGUt/aWxsLnBuZw"
          alt="Genwe Logo"
          className="w-10 h-10 object-contain"
        />
        <Link className="text-xl font-semibold tracking-wide" to={"/"}>
          Genify
        </Link>
      </div>

      {/* Middle: Navigation Links */}
      <ul className="flex gap-8 text-gray-300">
        <Link to={"/about"} className="hover:text-red-500 cursor-pointer">
          About
        </Link>
        <Link to={"/contact"} className="hover:text-red-500 cursor-pointer">
          Contact
        </Link>
        <Link
          to={"/inspirations"}
          className="hover:text-red-500 cursor-pointer"
        >
          Inspiration
        </Link>
      </ul>

      {/* Right: Build + User Badge */}
      <div className="flex items-center gap-4">
        <div className="text-gray-300  cursor-pointer text-green-400">
          Online...
        </div>

        <Link to={"profile"}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
            Ai
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
