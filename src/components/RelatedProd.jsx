// import React, {useEffect, useState} from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Arrow from "../assets/icons/Vector(arrow).png"
// import "../css/RelatedProd.css";
// import { data } from "../Db/ProductDb";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// const RelatedProd = ({  }) => {
  // const { name, description, images, price, isAvailable  } = productG;
  // let brand = productG.brand;
  // console.log(typeof productG._id);
  // const { productId } = useParams();
  // const [productG, setProductG] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`/product/related/${productId}`);
  //       console.log("Fetched data:", response.data);
  //       setProductG(response.data.relatedProducts);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [productId]);
  

  // return (
  //   <div className="rpB">
  //     <div className="rpg-container">
        {/* <h1>{productG.brand}</h1> */}
        // <div className="d-flex justify-content-between">
        // <h3>Related Products</h3>
        // <div className="d-flex d-lg-none justify-content-between align-items-center" style={{width: "5rem", border: "1px solid black"}}>
        // <s className=" " style={{fontSize:"1rem"}}>View all</s>
        // <img src={Arrow} alt="" style={{width:"1rem"}}/>
        // </div>
        // </div>
        {/* to={`/detail/${product._id}` */}

//         <div className="rpG  rounded px-lg-4 pt-lg-4 d-flex flex-row flex-lg-column justify-content-md-between gap-2">
//           {data
//             .filter((product) => product.category === `${productG?.category}`)
//             .slice(0, 2)
//             .map((item) => {
//               let price = (item?.priceCents / 100).toLocaleString(undefined, {
//                 minimumFractionDigits: 2,
//               });
            
//               return (
                
//                   <Card className="cardG mb-lg-4 px-2" key={item._id}>
//                     <Link to={`/detail/${item._id}`} style={{textDecoration: "none", color:"black"}}>
//                   <Card.Img variant="top" src={item?.image} className="imgGa" />
//                   <Card.Body className="row d-flex justify-content-between align-items-center">
//                     <div>
//                       <h1 className="hg" style={{ fontSize: "24px" }}>
//                         {item?.name}
//                       </h1>
//                       <p
//                         className="pg"
//                         style={{ fontSize: "18px", fontWeight: "400" }}
//                       >
//                         {item?.description}
//                       </p>
//                       <p
//                         className="ppg"
//                         style={{ fontSize: "26px", fontWeight: "700" }}
//                       >
//                         &#x20A6;{price}
//                       </p>
//                     </div>
//                     <Button variant="dark" className="btnG mx-lg-2  d-block">
//                       Add to Cart
//                     </Button>
//                   </Card.Body>
//                   </Link>
//                   </Card>
               
//               );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RelatedProd;


import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Arrow from "../assets/icons/Vector(arrow).png";
import "../css/RelatedProd.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";


const RelatedProd = () => {
  const { productId } = useParams();
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Detecting device screen width
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;

  // Setting the limit for related products
  const limit = isMobile ? 4 : 2 && isTablet ? 5 : 2;
  // const limit = isMobile ? (isTablet ? 5 : 4) : 2;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/product/related/${productId}`);
        console.log("Fetched data:", response.data);
        // setRelatedProducts(response.data.relatedProducts);
        const shuffledProducts = shuffle(response.data.relatedProducts);
        setRelatedProducts(shuffledProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [productId]);

   // Fisher-Yates shuffle algorithm
   const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle
    while (0 !== currentIndex) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // Swap it with the current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  return (
    <div className="rpB">
      <div className="rpg-container">
        <div className="d-flex justify-content-between">
          <h3>Related Products</h3>
          <div className="d-flex d-lg-none justify-content-between align-items-center" style={{ width: "5rem", border: "1px solid black" }}>
            <span className=" " style={{ fontSize: "1rem" }}>View all</span>
            <img src={Arrow} alt="" style={{ width: "1rem" }} />
          </div>
        </div>
        <div className="rpG  rounded px-lg-4 pt-lg-4 d-flex flex-row flex-lg-column justify-content-md-between gap-2">
          {relatedProducts
          .slice(0, limit )
          .map((product) => (
            <Card className="cardG mb-lg-4 px-2" key={product._id}>
              <Link to={`/detail/${product._id}`} style={{ textDecoration: "none", color: "black" }}>
                {/* <Card.Img variant="top" src={product?.images[1].url} className="imgGa" /> */}
                {product.images && product.images.length > 0 && (
                    <Card.Img variant="top" src={product.images[0]?.url} className="imgGa" />
                  )}
                <Card.Body className="row d-flex justify-content-between align-items-center">
                  <div>
                    <h1 className="hg" style={{ fontSize: "24px" }}>
                      {product?.name}
                    </h1>
                    <p className="pg" style={{ fontSize: "18px", fontWeight: "400" }}>
                      {product?.description}
                    </p>
                    <p className="ppg" style={{ fontSize: "26px", fontWeight: "700" }}>
                      &#x20A6;{product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <Button variant="dark" className="btnG mx-lg-2  d-block">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProd;
