import React, { useState, useEffect } from "react";
import "../css/Countdown.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCardLoading from "./ProductCardLoadingM";
import "../css/AllfragranceComponent.css";
import { useCart } from "../contexts/Cart";

const BestSeller = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState();
  const { addToCart } = useCart();

  // Detecting device screen width
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;

  // Setting the limit for related products
  const limit = isMobile ? 4 : 4 && isTablet ? 6 : 4;
  const limitLoading = isMobile ? 2 : 4 && isTablet ? 3 : 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/product/all?page=3&limit=${limit}`);
        if (data?.products) {
          setProduct(data.products);
          // console.log(data.products);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
      // console.log(product);
    };
    fetchData();
  }, []);

  // console.log(product);
  // const allFragrance = product;

  const handleAddToCart = (event) => {
    event.stopPropagation();
    addToCart(product);
  };

  return (
    <>
      <section className="home-all-fragrance">
        <div className="home-all-fragrance-header">
          <span>BestSeller</span>
          <span>
            <Link className="text-decoration-none" to="/new-arrivals">
              View all
              <FaArrowRightLong />
            </Link>
          </span>
        </div>
        <div className="best-seller-product">
          {loading
            ? Array.from({ length: limitLoading }).map((_, index) => (
                <ProductCardLoading key={index} />
              ))
            : product?.map((p) => {
                const { _id, images, name, description, price, isAvailable } =
                  p;
                let Price = price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                });
                return (
                  <>
                    <div key={_id}>
                      <Link className="link" to={`/detail/${product._id}`}>
                        <div className="m-card-Container" key={_id}>
                          <div className="m-image">
                            <img src={images[0]?.url} />
                          </div>
                          <div className="m-card-info">
                            <div className="m-card-text">
                              <Link
                                className="link"
                                to={`/detail/${product._id}`}
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <h4>{name}</h4>
                                <p>{description}</p>
                                <h2>&#x20A6;{Price}</h2>
                              </Link>
                            </div>
                            <div className="m-card-btn">
                              {isAvailable ? (
                                <button onClick={handleAddToCart}>
                                  Add to cart
                                </button>
                              ) : (
                                <button className="not-ava" disabled>
                                  Sold Out
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </>
                );
              })}
        </div>
      </section>
    </>
  );
};

export default BestSeller;
