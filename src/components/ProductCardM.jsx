// import React from "react";
// import "../css/ProductM.css";
// import { Link } from "react-router-dom";
// import { useCart } from "../contexts/Cart";


// const ProductCard = ({ product }) => {
//   const { _id, images, name, description, price, isAvailable } = product;

//   const { addToCart, cart } = useCart();






//   let Price = price.toLocaleString(undefined, {
//     minimumFractionDigits: 2,
//   });

//   return (
//     <Link className="link" to={`/detail/${product._id}`}>
//       <div key={_id}>
//         <div className="m-card-Container" key={_id}>
//           <div className="m-image">
//             <img src={images[0].url} alt={name} />
//           </div>
//           <div className="m-card-info">
//             <div className="m-card-text">
//               <h4>{name}</h4>
//               <p>{description}</p>
//               <h2>&#x20A6;{Price}</h2>
//             </div>
//             <div className="m-card-btn">
//               {isAvailable ? (
//                 <button onClick={()=>addToCart(product)}>Add to cart</button>
//               ) : (
//                 <button className="not-ava" disabled>
//                   Sold Out
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;


import React from "react";
import "../css/ProductM.css";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/Cart";

const ProductCard = ({ product }) => {
  const { _id, images, name, description, price, isAvailable } = product;
  const { addToCart, cart } = useCart();

  let Price = price.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });

  const handleAddToCart = (event) => {
    event.stopPropagation(); // Prevent event propagation
    addToCart(product); // Add the product to the cart
  };
// console.log(cart);

  return (
    // <Link className="link" to={`/detail/${product._id}`} >
      <div key={_id}>
        <div className="m-card-Container" key={_id}>
          <div className="m-image">
            <img src={images[0].url} alt={name} />
          </div>
          <div className="m-card-info">
            <div className="m-card-text">
              <h4>{name}</h4>
              <p>{description}</p>
              <h2>&#x20A6;{Price}</h2>
            </div>
            <div className="m-card-btn">
              {isAvailable ? (
                <button onClick={handleAddToCart}>Add to cart</button>
              ) : (
                <button className="not-ava" disabled>Sold Out</button>
              )}
            </div>
          </div>
        </div>
      </div>
    // </Link>
  );
};

export default ProductCard;
