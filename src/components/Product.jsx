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
    <Link to={`/product/${product.id}`}>
      <h2>{product.title}</h2>
      {isAdded && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(decrementAmount(product.id));
            }}
          >
            -
          </button>
          <span>{isAdded.amount}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(incrementAmount(product.id));
            }}
          >
            +
          </button>
        </>
      )}
      {!isAdded && <button onClick={(e) => handleBuy(e)}>Buy</button>}
    </Link>
  );
}

export default Product;
