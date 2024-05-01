import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const RecentlyViewedCards = ({productId}) => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/product/${productId}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
        <Link className="link" to={`/detail/${product._id}`}>
            <div key={product._id}>
              <div className="m-card-Container mt-lg-4" key={product._id} >
                <div className="m-image">
                  <img src={images[0].url} alt={product.name} />
                </div>
                <div className="m-card-info">
                  <div className="m-card-text">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <h2>&#x20A6;{Price}</h2>
                  </div>
                  <div className="m-card-btn pb-2">
                    {isAvailable ? (
                      <button className="">Add to cart</button>
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

    </div>
  )
}

export default RecentlyViewedCards