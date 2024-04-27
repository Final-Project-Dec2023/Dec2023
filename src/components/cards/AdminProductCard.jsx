// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import "../../css/DetailCards.css";
// import { Link, Navigate } from "react-router-dom";
// import Modal from "react-bootstrap/Modal";

// const AdminProductCard = ({ product, slug, handleDelete, loading }) => {
//   const [selectedImage, setSelectedImage] = useState(product?.images[0].url);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleImageClick = (imageUrl) => {
//     setSelectedImage(imageUrl);
//   };

//   function handleDeleteClose() {
//     handleDelete();
//     setTimeout(() => {
//       handleClose();
//     }, 4500);
//   }

//   return (
//     <>
//     <h2 className="bg-light">Product Details</h2>
//       <div className="productDetail" style={{ height: "auto" }}>
//         <div className="productCont">
//           <div className="productImg">
//             <div className="selectImg">
//               <div
//                 className={`simg ${
//                   selectedImage === product?.images[0].url ? "selected" : ""
//                 }`}
//                 onClick={() => handleImageClick(product?.images[0].url)}
//               >
//                 <img src={product?.images[0].url} alt="" />
//               </div>
//               <div
//                 className={`simg ${
//                   selectedImage === product?.images[0].url ? "selected" : ""
//                 }`}
//                 onClick={() => handleImageClick(product?.images[0].url)}
//               >
//                 <img src={product?.images[0].url} />
//               </div>
//               <div
//                 className={`simg ${
//                   selectedImage === product?.images[1].url ? "selected" : ""
//                 }`}
//                 onClick={() => handleImageClick(product?.images[1].url)}
//               >
//                 <img src={product?.images[1].url} />
//               </div>
//             </div>
//             <div className="clickedImg">
//               <img
//                 src={selectedImage || product?.images[2]?.url}
//                 className={
//                   selectedImage === product?.images[2].url ? "selected" : ""
//                 }
//               />
//             </div>
//           </div>
//           <div className="productInfo p-3">
//             <h1 className="hG">{product?.name}</h1>
//             <p style={{ fontSize: "1.13rem", fontWeight: "400" }}>
//               {product?.description}
//             </p>
//             <p style={{ fontSize: "1.25rem" }}>
//               Price: &#x20A6;{product?.price}
//             </p>
//             <p className="" style={{ fontSize: "1.25rem" }}>
//               Quantity: {product?.quantity}
//             </p>
//             <div
//               className="my-2 d-flex gap-1 flex-wrap"
//               style={{ fontSize: "1.25rem" }}
//             >
//               <p className="border p-1">
//                 <span className="bg-warning p-1">Fragrance Type</span>{" "}
//                 {product?.fragranceType}
//               </p>
//               <p className="border p-1">
//                 <span className="bg-warning p-1">Gender</span> {product?.gender}
//               </p>
//               <p className="border p-1">
//                 <span className="bg-warning p-1">Brand</span> {product?.brand}
//               </p>
//               <p className="border p-1">
//                 <span className="bg-warning p-1">Scent Type</span>{" "}
//                 {product?.scentType}
//               </p>
//               <p className="border p-1">
//                 <span className="bg-warning p-1">Size</span> {product?.size}
//               </p>
//             </div>
//             <div className="d-flex flex-column">
//               <Link to={`/dashboard/admin-product/update/${slug}`}>
//                 <Button
//                   variant="dark"
//                   className="buttonG mb-3"
//                   style={{ backgroundColor: "blue", fontSize: "20px" }}
//                 >
//                   Update
//                 </Button>
//               </Link>

//               <Button variant="dark" className="buttonG" onClick={handleShow}>
//                 Delete
//               </Button>
//             </div>

//             <Modal show={show} onHide={handleClose}>
//               <Modal.Header closeButton>
//                 <Modal.Title>Delete Product</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 Are you sure you want to delete this product?
//                 <br />
//                 <strong>{product?.name}</strong>
//               </Modal.Body>
//               <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>
//                   No
//                 </Button>
//                 <Button variant="danger" onClick={handleDeleteClose}>
//                   {loading ? "Deleting..." : "Delete"}
//                 </Button>
//               </Modal.Footer>
//             </Modal>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminProductCard;


import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../../css/DetailCards.css";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const AdminProductCard = ({ product, slug, handleDelete, loading }) => {
  const [selectedImage, setSelectedImage] = useState(product?.images[1].url);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  function handleDeleteClose() {
    handleDelete();
    setTimeout(() => {
      handleClose();
    }, 4500);
  }

  return (
    <>
    <h2 className="bg-light">Product Details</h2>
      <div className="productDetail" style={{ height: "auto" }}>
        <div className="productCont">
          <div className="productImg">
            <div className="selectImg">
              {product?.images.map((image, index) => (
                <div
                  key={index}
                  className={`simg ${selectedImage === image.url ? "selected" : ""}`}
                  onClick={() => handleImageClick(image.url)}
                >
                  <img src={image.url} alt="" />
                </div>
              ))}
            </div>
            <div className="clickedImg">
              <img
                src={selectedImage || product?.images[0]?.url}
                className={selectedImage === product?.images[0]?.url ? "selected" : ""}
              />
            </div>
          </div>
          <div className="productInfo p-3">
            <h1 className="hG">{product?.name}</h1>
            <p style={{ fontSize: "1.13rem", fontWeight: "400" }}>
              {product?.description}
            </p>
            <p style={{ fontSize: "1.25rem" }}>
              Price: &#x20A6;{product?.price}
            </p>
            <p className="" style={{ fontSize: "1.25rem" }}>
              Quantity: {product?.quantity}
            </p>
            <div
              className="my-2 d-flex gap-1 flex-wrap"
              style={{ fontSize: "1.25rem" }}
            >
              <p className="border p-1">
                <span className="bg-warning p-1">Fragrance Type</span>{" "}
                {product?.fragranceType}
              </p>
              <p className="border p-1">
                <span className="bg-warning p-1">Gender</span> {product?.gender}
              </p>
              <p className="border p-1">
                <span className="bg-warning p-1">Brand</span> {product?.brand}
              </p>
              <p className="border p-1">
                <span className="bg-warning p-1">Scent Type</span>{" "}
                {product?.scentType}
              </p>
              <p className="border p-1">
                <span className="bg-warning p-1">Size</span> {product?.size}
              </p>
            </div>
            <div className="d-flex flex-column">
              <Link to={`/dashboard/admin-product/update/${slug}`}>
                <Button
                  variant="dark"
                  className="buttonG mb-3"
                  style={{ backgroundColor: "blue", fontSize: "20px" }}
                >
                  Update
                </Button>
              </Link>

              <Button variant="dark" className="buttonG" onClick={handleShow}>
                Delete
              </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Delete Product</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to delete this product?
                <br />
                <strong>{product?.name}</strong>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  No
                </Button>
                <Button variant="danger" onClick={handleDeleteClose}>
                  {loading ? "Deleting..." : "Delete"}
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProductCard;

