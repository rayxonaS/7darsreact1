import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils";

export const loader = async ({ params }) => {
  const req = await axiosInstance(`/product/${params.id}`);
  return req.data;
};

function Product() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="container py-26 px-8">
      <div className="product-card">
        <img className="product-thubmnail" src={data.thumbnail} alt="" />
        <div className="product-info">
          <h2 className="product-title">{data.title}</h2>
          <p className="product-price">$ {data.price}</p>
          <p className="product-description">{data.description}</p>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
