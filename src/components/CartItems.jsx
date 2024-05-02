import "../css/CartItems.css";
import { ImBin2 } from "react-icons/im";
import Menu from "./NavBar";
import SideNav from "./SideNav";
import Footer from "./Footer";
import axios from "axios";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CartItems = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);

  // const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true)
      try {
        const response = await axios.get(`/product/${productId}`);
        console.log("Fetched data:", response?.data);
        setProduct(response?.data?.product);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      finally {
        // setLoading(false)
      }
    };
    fetchData();
  }, [productId]);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <Menu />
      <SideNav />
      <div className="main-cont " style={{ marginTop: "1rem", marginBottom: "2rem" }}>
        <div className="container-kc">
          <div className="left-cont">
            <div className="card-kc">
              <div className="img-card-kc">
                <div className="left-img-kc">
                  <div className="img-kc-kc">
                    <img src={product?.images[0]?.url} />
                  </div>
                  <div className="text-card-kc">
                    <h5>{product?.name}</h5>
                    <p>{product?.description}</p>
                    <div className="d-flex gap-2">
                      <p style={{ fontSize: "1.25rem" }}>Availability:</p>
                      <ul
                        className="d-flex"
                        style={{ listStyle: "none", paddingLeft: "1rem" }}
                      >
                        <li
                          style={{
                            color: product?.isAvailable ? "#009320" : "#E70000",
                            fontWeight: "500",
                            fontSize: "1.13rem",
                          }}
                        >
                          <span
                            style={{
                              backgroundColor: product?.isAvailable
                                ? "#009320"
                                : "#E70000",
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              display: "inline-block",
                              marginRight: "5px",
                            }}
                          ></span>
                          {product?.isAvailable ? `In Stock (${product?.quantity})` : "Out of Stock"}
                        </li>
                      </ul>
                    </div>                  </div>
                </div>
                <div className="btn-kc">
                  <h4>&#8358;{product?.price}</h4>
                </div>
              </div>
              <div className="del-items">
                <div className="r"><ImBin2 />Remove item</div>
                <div className="add-btn-kc">
                  <button className="btn-kc-kc" onClick={handleDecrease}>-</button>
                  <span><b>{count}</b></span>
                  <button className="btn-kc-kcee" onClick={handleIncrease}>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-cont">
            <div className="kc-card">
              <div className="sum">
                <h4>Cart Summary</h4>
              </div>
              <div className="kcee"></div>
              <div className="total">
                <div className="tot">
                  <h5>Subtotal</h5>
                  <h4>&#8358;{product?.price}</h4>
                </div>
                <div className="delivery">
                  <p>Delivery Fees not included yet.</p>
                </div>
                <div></div>
              </div>
              <div className="btn-btn">
                <button>
                  <Link to='/checkout' style={{textDecoration: 'none', color: 'white'}}>
                  <h4>Checkout Now</h4>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartItems;
