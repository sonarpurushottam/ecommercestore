// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import productData from "../db/productData";

// const ProductDes = () => {
//   const { productId } = useParams();
//   const product = productData.find(
//     (product) => String(product.id) === productId
//   );

//   // Check if the product is not found
//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   const { img, title, description } = product;

//   return (
//     <>
//       <section>
//         <img src={img} alt={title} />
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <Link to="/Headphones">Back to Headphones</Link>
//       </section>
//     </>
//   );
// };

// export default ProductDes;
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../features/cartSlice";
import productData from "../db/productData";

const ProductDes = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = productData.find(
    (product) => String(product.id) === productId
  );

  // Check if the product is not found
  if (!product) {
    return <p>Product not found</p>;
  }

  const { img, title, price } = product;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    // You can add a notification or perform other actions here
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    // You can add a notification or perform other actions here
  };

  return (
    <>
      <section>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>Price: ${price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleAddToWishlist}>Add to Wishlist</button>
        <Link to="/Headphones">Back to Headphones</Link>
      </section>
    </>
  );
};

export default ProductDes;
