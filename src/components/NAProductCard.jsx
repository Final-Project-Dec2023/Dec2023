import React from 'react'
import "../css/ProductM.css";
import { Link } from 'react-router-dom';

const ProductCard = ({ products }) => {
    // margin: top left bottom right
    const { name, price, images, isAvailable, description, _id } = products
    let priceNaira = price.toLocaleString(undefined, {minimumFractionDigits: 2})
    return (
        <>
<Link className="link" to={`/detail/${products._id}`}>
      <div key={_id}>
        <div className="m-card-Container" key={_id}>
          <div className="m-image">
            <img src={images[0].url} alt={name} />
          </div>
          <div className="m-card-info">
            <div className="m-card-text">
              <h4>{name}</h4>
              <p>{description}</p>
              <h2>&#x20A6;{priceNaira}</h2>
            </div>
            <div className="m-card-btn">
              {isAvailable ? (
                <button>Add to cart</button>
              ) : (
                <button className="not-ava" disabled>
                  Sold Out
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
        </>
    );
    {/* // async function is used because it is waiting for a Promise
    //         // use async to await something that may not be ready  */}


}

export default ProductCard