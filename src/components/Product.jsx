import { Link } from "react-router-dom";
import {
  addToCart,
  decrementAmount,
  incrementAmount,
} from "../app/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Product({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  const isAdded = cart.find((i) => i.id == product.id);
  const handleBuy = (e) => {
    e.preventDefault();
    dispatch(
      addToCart({
        ...product,
        amount: 1,
      })
    );
  };
  return (
    <Link
      className=" container bg-white text-gray-800 rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
      to={`/product/${product.id}`}
    >
      <img
        className="w-full h-40 object-contain rounded-md mb-4"
        src={product.thumbnail}
        alt=""
      />
      <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
      <p className="text-gray-600   mb-3">$ {product.price}</p>
      {isAdded && (
        <div className="flex items-center mt-auto gap-2">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded"
            onClick={(e) => {
              e.preventDefault();
              dispatch(decrementAmount({ id: product.id }));
            }}
          >
            -
          </button>
          <span className="font-medium">{isAdded.amount}</span>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded"
            onClick={(e) => {
              e.preventDefault();
              dispatch(incrementAmount({ id: product.id }));
            }}
          >
            +
          </button>
        </div>
      )}
      {!isAdded && (
        <button
          className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={(e) => handleBuy(e)}
        >
          Buy
        </button>
      )}
    </Link>
  );
}

export default Product;
