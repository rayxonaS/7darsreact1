import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils";
import axios from "axios";
import ProductList from "../components/ProductList";

export const loader = async () => {
  const req = await axiosInstance("/product");
  return req;
};

function Home() {
  const {
    data: { products },
  } = useLoaderData();

  return (
    <div>
      <ProductList />
    </div>
  );
}

export default Home;
