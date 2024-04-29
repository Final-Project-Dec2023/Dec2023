// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import "../css/DetailCards.css";
// import Star from "../assets/images/Vector star.png";
// import StarHalf from "../assets/icons/icons8-star-half-48.png"
// import Plus from "../assets/images/ic_sharp-plus.png";
// import Minus from "../assets/images/ic_sharp-minus.png";
// import { Link } from "react-router-dom";

// const DetailCard = ({ product }) => {
// const {name, description, images, price, quantity, isavailable, avgRating} = product

//   const [selectedImage, setSelectedImage] = useState(image._id);

//   const handleImageClick = (imageUrl) => {
//     setSelectedImage(imageUrl);
//   };

//   const [count, setCount] = useState(1);

//   const handleIncrease = () => {
//     // count + 1;
//     setCount(count + 1);
//   };
//   const handleDecrease = () => {
//     // count - 1;
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   // Calculate star rating
//   // const starRating = Array.from({ length: product.rating }, (_, index) => (
//   //   <img key={index} src={Star} alt="Star" />
//   // ));

//    // Calculate star rating
//    const fullStars = Math.floor(product.rating);
//   //  let halfStar = false;
//   //             if (product.rating >= 0.1 && product.rating <= 0.9) {
//   //               halfStar = true;
//   //             }
//     const halfStar = product.rating - fullStars >= 0.1;
//    const starRating = Array.from({ length: fullStars }, (_, index) => (
//      <img key={index} src={Star} alt="Star" />
//    ));
//    if (halfStar) starRating.push(<img key="half" src={StarHalf} alt="Half Star" />);

//   return (
//     <>
//       <div className="productDetail ">
//         <div className="productCont">
//           <div className="productImg">
//             <div className="selectImg">
//               {/* loope through images and show the selected image */}
//               {images && images.map((image)=>{
                
//               })}
              
             
//             </div>
//             <div className="clickedImg">
//               <img
//                 src={selectedImage}
//                 className={
//                   selectedImage === product?.imageUrl.one ? "selected" : ""
//                 }
//               />
//             </div>
//           </div>
//           <div className="productInfo p-3">
//             <h1 className="hG">{product?.name}</h1>
//             <p style={{ fontSize: "1.13rem", fontWeight: "400" }}>
//               {product?.description} <span>{product?.size}Oz</span>{" "}
//             </p>

//             <div style={{ display: "flex", alignItems: "center" }} className="">
//               <div
//                 className="imgG d-flex gap-1"
//                 style={{ width: "5rem" }}
//               >
//                 {/* <img src={Star} />
//                 <img src={Star} />
//                 <img src={Star} />
//                 <img src={Star} />
//                 <img src={Star} /> */}

//                 {starRating}
//               </div>

//               <span
//                 style={{
//                   fontSize: "1.13rem",
//                   fontWeight: "300",
//                   marginLeft: "1.25rem",
//                 }}
//               >
//                 {product?.rating} (<span style={{ fontSize: "1.13rem" }}>40 Reviews</span>)
//               </span>
//             </div>
//             <p className="my-2" style={{ fontSize: "1.25rem" }}>
//               Price:{" "}
//               <span
//                 className=""
//                 style={{ fontSize: "1.63rem", fontWeight: "500" }}
//               >
//                 &#x20A6;{price}
//               </span>
//             </p>
//             <p className="mb-2" style={{ fontSize: "1.25rem" }}>
//               Size: <span style={{ fontSize: "1rem" }}>2.3 Oz</span>
//             </p>
//             <div>
//               {" "}
//               <button
//                 className="bg-dark text-light"
//                 style={{
//                   width: "3.69rem",
//                   height: "2.44rem",
//                   fontSize: "0.88rem",
//                   fontWeight: "500",
//                   borderRadius: "4px",
//                 }}
//               >
//                 2.3 Oz
//               </button>{" "}
//               <button
//                 className="bg-light text-dark border border-dark"
//                 style={{
//                   width: "3.69rem",
//                   height: "2.44rem",
//                   fontSize: "0.88rem",
//                   fontWeight: "500",
//                   borderRadius: "4px",
//                 }}
//               >
//                 6.3 Oz
//               </button>{" "}
//             </div>

//             <div className="d-flex my-2  align-items-center">
//               <span className="pe-4" style={{ fontSize: "1.25rem" }}>
//                 Quantity:
//               </span>
//               <button
//                 className="btn1  bg-transparent rounded-0 rounded-start"
//                 onClick={handleDecrease}
//               >
//                 <img src={Minus} alt="" />
//               </button>
//               <Button className="btnGg rounded-0 bg-transparent text-dark fw-bold ">
//                 {count}
//               </Button>
//               <button
//                 className="btn1  bg-transparent rounded-0 rounded-end"
//                 onClick={handleIncrease}
//               >
//                 <img src={Plus} alt="" />
//               </button>
//             </div>

//             <div className="d-flex gap-2">
//               <p style={{ fontSize: "1.25rem" }}>Availability:</p>
//               <ul
//                 className="d-flex"
//                 style={{ listStyle: "none", paddingLeft: "1rem" }}
//               >
//                 <li
//                   style={{
//                     color: product.isavailability ? "#009320" : "#E70000",
//                     fontWeight: "500",
//                     fontSize: "1.13rem",
//                   }}
//                 >
//                   <span
//                     style={{
//                       backgroundColor: product.isavailability
//                         ? "#009320"
//                         : "#E70000",
//                       width: "10px",
//                       height: "10px",
//                       borderRadius: "50%",
//                       display: "inline-block",
//                       marginRight: "5px",
//                     }}
//                   ></span>
//                   {product.isavailability ? "In Stock" : "Out of Stock"}
//                 </li>
//               </ul>
//             </div>

//             <div className="d-flex flex-column">
//               {product.isavailability ? <Button variant="dark" className="buttonG mb-3" style={{backgroundColor:"black", fontSize: "20px"}}>Buy Now</Button> : <Button variant="dark" className="buttonG mb-3" style={{backgroundColor: "gray", fontSize: "20px"}} disabled>Sold Out</Button>}
              
//               <Link to={`/cart/${product._id}`} style={{textDecoration: "none"}} className="">
//               <Button variant="light" className="buttonG  border border-dark" >
//                Add to Cart
//               </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DetailCard;



import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "../css/DetailCards.css";
import Star from "../assets/images/Vector star.png";
import StarHalf from "../assets/icons/icons8-star-half-48.png"
import Plus from "../assets/images/ic_sharp-plus.png";
import Minus from "../assets/images/ic_sharp-minus.png";
import { Link } from "react-router-dom";

const DetailCard = ({ product }) => {
  const { name, description, images, price, quantity, isAvailable, avgRating, size } = product;

  const [selectedImage, setSelectedImage] = useState(images[0]?.url);

  useEffect(() => {
    // Set the selected image to the first image in the array when component mounts
  
      setSelectedImage(images[0]?.url);
 
  }, [images]);
  const [count, setCount] = useState(1);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Calculate star rating
  // const fullStars = Math.floor(avgRating);
  // const halfStar = avgRating - fullStars >= 0.1;
  // const starRating = Array.from({ length: fullStars }, (_, index) => (
  //   <img key={index} src={Star} alt="Star" />
  // ));
  // if (halfStar) starRating.push(<img key="half" src={StarHalf} alt="Half Star" />);
  // console.log(selectedImage);

  let starRating;
  if (avgRating ) {
    const fullStars = Math.floor(avgRating);
    const halfStar = avgRating - fullStars >= 0.1;
    starRating = Array.from({ length: fullStars }, (_, index) => (
      <img key={index} src={Star} alt="Star" />
    ));
    if (halfStar) starRating.push(<img key="half" src={StarHalf} alt="Half Star" />);
  } else {
    starRating = <span style={{fontSize: "1.1rem"}}>No rating</span>;
  }

  return (
    <>
      <div className="productDetail ">
        <div className="productCont"> 
          <div className="productImg">
            <div className="selectImg">
              {/* Loop through images and show the selected image */}
              {images.length > 0 && images.map((image) => (
                <div className={`simg ${selectedImage === image?.url ? 'selected' : ''}`}>
                  <img
                  key={image?._id}
                  src={image?.url}
                  alt={image?.imagePubilicId}
                  className=""
                  onClick={() => handleImageClick(image?.url)}
                />
                </div>
              ))}
            </div>
            <div className="clickedImg">
              <img
                src={selectedImage || product?.images[0]?.url}
                alt={selectedImage === product?.images[0]?.url ? "selected" : ""}
                className="selected"
              />
            </div>
          </div>
          <div className="productInfo p-3">
            <h1 className="hG">{name}</h1>
            <p style={{ fontSize: "1.13rem", fontWeight: "400" }}>
              {description} <span>{product.size}Oz</span>{" "}
            </p>

            <div style={{ display: "flex", alignItems: "center" }} className="">
              <span
                className="imgG d-flex gap-1"
                style={{ width: "5rem" }}
              >
                {starRating}
              </span>

              <span
                style={{
                  fontSize: "1.13rem",
                  fontWeight: "300",
                  marginLeft: "1.25rem",
                }}
              >
                {avgRating !== 0 ? (
                  <>
                    {avgRating} (<span style={{ fontSize: "1.13rem" }}>40 Reviews</span>)
                  </>
                ) : (
                  <>
                  {avgRating} (<span style={{ fontSize: "1.13rem" }}>No Review</span>)
                </>
                )}
              </span>
            </div>
            <p className="my-2" style={{ fontSize: "1.25rem" }}>
              Price:{" "}
              <span
                className=""
                style={{ fontSize: "1.63rem", fontWeight: "500" }}
              >
                &#x20A6;{price}
              </span>
            </p>
            <p className="mb-2" style={{ fontSize: "1.25rem" }}>
              Size:{" "}
              <button
                className="bg-light text-dark border border-dark"
                style={{
                  width: "3.69rem",
                  height: "2.44rem",
                  fontSize: "0.88rem",
                  fontWeight: "500",
                  borderRadius: "4px",
                }}
              >
                {size}Oz
              </button>
              
            </p>
            {/* <div>
              {" "}
              <button
                className="bg-dark text-light"
                style={{
                  width: "3.69rem",
                  height: "2.44rem",
                  fontSize: "0.88rem",
                  fontWeight: "500",
                  borderRadius: "4px",
                }}
              >
                2.3 Oz
              </button>{" "}
              <button
                className="bg-light text-dark border border-dark"
                style={{
                  width: "3.69rem",
                  height: "2.44rem",
                  fontSize: "0.88rem",
                  fontWeight: "500",
                  borderRadius: "4px",
                }}
              >
                6.3 Oz
              </button>{" "}
            </div> */}

            <div className="d-flex my-2  align-items-center">
              <span className="pe-4" style={{ fontSize: "1.25rem" }}>
                Quantity:
              </span>
              <button
                className="btn1  bg-transparent rounded-0 rounded-start"
                onClick={handleDecrease}
              >
                <img src={Minus} alt="" />
              </button>
              <Button className="btnGg rounded-0 bg-transparent text-dark fw-bold ">
                {count}
              </Button>
              <button
                className="btn1  bg-transparent rounded-0 rounded-end"
                onClick={handleIncrease}
              >
                <img src={Plus} alt="" />
              </button>
            </div>

            <div className="d-flex gap-2">
              <p style={{ fontSize: "1.25rem" }}>Availability({quantity}) :</p>
              <ul
                className="d-flex"
                style={{ listStyle: "none", paddingLeft: "1rem" }}
              >
                <li
                  style={{
                    color: isAvailable ? "#009320" : "#E70000",
                    fontWeight: "500",
                    fontSize: "1.13rem",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: isAvailable
                        ? "#009320"
                        : "#E70000",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></span>
                  {isAvailable ? "In Stock" : "Out of Stock"}
                </li>
              </ul>
            </div>

            <div className="d-flex flex-column">
              {isAvailable ? <Button variant="dark" className="buttonG mb-3" style={{ backgroundColor: "black", fontSize: "20px" }}>Buy Now</Button> : <Button variant="dark" className="buttonG mb-3" style={{ backgroundColor: "gray", fontSize: "20px" }} disabled>Sold Out</Button>}

              <Link to={`/cart/${product._id}`} style={{ textDecoration: "none" }} className="">
                <Button variant="light" className="buttonG  border border-dark" >
                  Add to Cart
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;

