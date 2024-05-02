import React, { useEffect, useState } from "react";
import ThinArrow from "../assets/images/Thin Arrow.png";
import { Link } from "react-router-dom";
import "../css/Newarrival.css";
import "../css/NAProductcard.css";
import ProductCard from "../components/NAProductCard";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";

const NewArrivalComponent = ({ title, link }) => {

  const [data, setData] = useState([]);

  // Mobile
  const limit = 8;
  const limitedData = data?.slice(0, limit);

  // Desktop
  const limit_desktop = 4;
  const limitedDataDesktop = data?.slice(0, limit_desktop);

  // axios
  const fetchData = async () => {
    try {
      const response = await axios.get(`/product/all?page=1&limit=${limit}`);
      setData(response?.data?.products);
      console.log(response?.data?.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

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
