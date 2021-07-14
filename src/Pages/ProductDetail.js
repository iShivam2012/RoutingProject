import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return (
    <main>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
    </main>
  );
};
export default ProductDetail;
