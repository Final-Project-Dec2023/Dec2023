import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Arrow from "../assets/icons/Vector(arrow).png"
import "../css/RelatedProd.css";
import { data } from "../Db/ProductDb";
import { Link } from "react-router-dom";

const RelatedProd = ({ productG }) => {
  
  // let brand = productG.brand;
  // console.log(typeof productG._id);

  return (
    <div className="rpB">
      <div className="rpg-container">
        {/* <h1>{productG.brand}</h1> */}
        <div className="d-flex justify-content-between">
        <h3>Related Products</h3>
        <div className="d-flex d-lg-none justify-content-between align-items-center" style={{width: "5rem", border: "1px solid black"}}>
        <s className=" " style={{fontSize:"1rem"}}>View all</s>
        <img src={Arrow} alt="" style={{width:"1rem"}}/>
        </div>
        </div>
        {/* to={`/detail/${product._id}` */}

        <div className="rpG  rounded px-lg-4 pt-lg-4 d-flex flex-row flex-lg-column justify-content-md-between gap-2">
          {data
            .filter((product) => product.brand === `${productG.brand}`)
            .slice(0, 2)
            .map((item) => {
              let price = (item?.priceCents / 100).toLocaleString(undefined, {
                minimumFractionDigits: 2,
              });
            
              return (
                
                  <Card className="cardG mb-lg-4 px-2" key={item._id}>
                    <Link to={`/detail/${item._id}`} style={{textDecoration: "none", color:"black"}}>
                  <Card.Img variant="top" src={item?.image} className="imgGa" />
                  <Card.Body className="row d-flex justify-content-between align-items-center">
                    <div>
                      <h1 className="hg" style={{ fontSize: "24px" }}>
                        {item?.name}
                      </h1>
                      <p
                        className="pg"
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        {item?.description}
                      </p>
                      <p
                        className="ppg"
                        style={{ fontSize: "26px", fontWeight: "700" }}
                      >
                        &#x20A6;{price}
                      </p>
                    </div>
                    <Button variant="dark" className="btnG mx-lg-2  d-block">
                      Add to Cart
                    </Button>
                  </Card.Body>
                  </Link>
                  </Card>
               
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RelatedProd;
