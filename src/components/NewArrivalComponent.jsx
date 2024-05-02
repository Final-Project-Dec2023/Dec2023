import React, { useState, useEffect } from "react";
import "../css/Countdown.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCardLoading from "./ProductCardLoadingM";
import "../css/AllfragranceComponent.css";
// import { FaArrowRightLong } from "react-icons/fa6";

const NewArrivalComponent = ({ title, link }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState();

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
        const response = await axios.get(`/product/all?page=1&limit=${limit}`);
        setProduct(response?.data?.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
      console.log(product);
    };
    fetchData();
  }, []);

  const newArrival = product;

  return (
    <>
      <div className="d-flex justify-content-between home-new-arrival mx-3">
        <div className="d-block d-md-block d-lg-none mt-1">
          <h5>{title}</h5>
        </div>
        <div className="d-none d-md-none d-lg-block">
          <h3>{title}</h3>
        </div>
        <div className="pt-1">
          <Link
            to={link}
            className="text-decoration-none mt-2 mt-lg-0"
            style={{ color: "#0098B8" }}
          >
            View All{" "}
            <span >
              <FaArrowRightLong/>
            </span>
          </Link>
        </div>
      </div>

      {/* Product Cards for Desktop */}
      <div>
        <div className="d-md-flex d-lg-flex d-none d-md-none d-lg-block justify-content-lg-center align-items-lg-center gap-3 ">
          {limitedDataDesktop.map((product) => {
            return (
              <div className="" key={product._id}>
                <ProductCard products={product} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Cards for Mobile and Tablet*/}
      <div>
        <div className="d-flex d-md-flex d-block d-md-block d-lg-none home-new-products gap-3">
          {limitedData.map((product) => {
            return (
              <div className="" key={product._id}>
                <ProductCard products={product}/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewArrivalComponent;
