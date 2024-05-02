import "../css/CartItems.css";
import { useEffect } from "react";
import { useCart } from "../contexts/Cart";
import { ImBin2 } from "react-icons/im";
import Menu from "./NavBar";
import SideNav from "./SideNav";
import Footer from "./Footer";
import axios from "axios";
import { Link } from "react-router-dom";

// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CartItems = () => {
  const { cart, cartSubTotal } = useCart();

  // useEffect(() => {
  //   console.log("Cart Items:", cart);
  // }, [cart]);

  return (
    <>
      <Menu />
      <SideNav />
      <div
        className=" container-fluid"
        style={{ marginTop: "1rem", marginBottom: "2rem" }}
      >
        <div className="row">
          <div className=" col-md-8">
            {cart.map((item) => (
              <div className="card-kc" key={item._id}>
                <div className="img-card-kc">
                  <div className="left-img-kc">
                    <div className="img-kc-kc">
                      <img src={item.images[0].url} alt={item.name} />
                    </div>
                    <div className="text-card-kc">
                      <h5>{item.name}</h5>
                      <p>{item.description}</p>
                      <p className="stock-kc">
                        {item.isAvailable ? "In stock" : "Out of stock"}
                      </p>
                    </div>
                  </div>
                  <div className="btn-kc">
                    <h4>&#8358;{item.price}</h4>
                  </div>
                </div>
                <div className="del-items">
                  <div className="r">
                    <ImBin2 />
                    Remove item
                  </div>
                  <div className="add-btn-kc">
                    <button className="btn-kc-kc">-</button>
                    <span>
                      <b>0</b>
                    </span>
                    <button className="btn-kc-kcee">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="kc-card">
              <div className="sum">
                <h4>Cart Summary</h4>
              </div>
              
              {/* <div className="kcee"></div> */}
              
              <div className="total">
                <div className="tot">
                  <h5>Subtotal</h5>
                  <h4>&#8358;{cartSubTotal()}</h4>
                </div>
                <div className="delivery">
                  <p>Delivery Fees not included yet.</p>
                </div>
                <div></div>
              </div>
              <div className="btn-btn">
                <button>
                  <h4>Checkout Now</h4>
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
