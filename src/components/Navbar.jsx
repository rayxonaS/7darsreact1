import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { cart } = useSelector((store) => store.cart);
  return (
    <div className=" container flex gap-60">
      <div className="flex items-center space-x-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xwEZtCsextV_Vh5QCPt7GdN0jglJLZ6yqA&s"
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-2xl font-bold text-blue-400">MyStore</span>
      </div>
      <div className="container space-x-6 flex items-center">
        <Link className="hover:text-blue-300 transition text-2xl" to="/">
          Home
        </Link>
        <Link className="hover:text-blue-300 transition text-2xl" to="/about">
          About
        </Link>
        <Link className="hover:text-blue-300 transition text-2xl" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
