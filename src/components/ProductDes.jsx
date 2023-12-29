import React from "react";
import { useParams, Link } from "react-router-dom";
import productData from "../db/productData";

const ProductDes = () => {
  const { productId } = useParams();
  const product = productData.find(
    (product) => String(product.id) === productId
  );

  // Check if the product is not found
  if (!product) {
    return <p>Product not found</p>;
  }

  const { img, title, description } = product;

  return (
    <>
      <section>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to="/Headphones">Back to Headphones</Link>
      </section>
    </>
  );
};

export default ProductDes;
