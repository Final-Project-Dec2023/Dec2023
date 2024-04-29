// import React, {useEffect, useState} from "react";
// import DetailCard from "../components/DetailCard";
// // import { data } from "../Db/ProductDb";
// import Accordions from "../components/AccordionG";
// import RelatedProd from "../components/RelatedProd";
// import YouTube from "../components/YouTube";
// import { useParams } from "react-router-dom";
// import "../css/DetailPage.css";

// const DetailPage = () => {
//   const { productId } = useParams();

//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/product/all`);
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   });

//   const productG = data.find((p) => p._id === parseInt(productId));
//   return (
//     <div className="all-details d-flex flex-column justify-content-center ">
//       <div className="mb-4 detail-card ">
//         <DetailCard product={productG} />
//       </div>

//       <div className="gaccrel d-flex  justify-content-between flex-column flex-lg-row ">
//         <div className="row d-flex  justify-content-between accordion-detailG ">
//           <Accordions className="" product={productG} />

//           <div className="d-lg-block d-none youtube-g ">
//             <YouTube />
//           </div>
//         </div>

//         <div className="d-flex justify-content-center relate-p">
//           <RelatedProd productG={productG}/>
//         </div>

//         <div className="d-lg-none youtube-g">
//           <YouTube />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default DetailPage;


import React, { useEffect, useState } from "react";
import DetailCard from "../components/DetailCard";
import Accordions from "../components/AccordionG";
import RelatedProd from "../components/RelatedProd";
import YouTube from "../components/YouTube";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/DetailPage.css";
import Footer from "../components/Footer";
import Menu from "../components/NavBar";
import SideNav from "../components/SideNav";

const DetailPage = () => {
  const { productId } = useParams();
  const [productG, setProductG] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/product/${productId}`);
        console.log("Fetched data:", response.data);
        setProductG(response.data.product);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [productId]);


//     const url = `${import.meta.env.VITE_BACKEND_API_URL}/product/${productId}`


// fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
        // console.log(data.filter((item) => item.region === "Africa"));
        // loop through the data
        // const africa = data.filter((products) => products.isAvailale === true)
        // console.log(africa);
        // africa.forEach((country) => console.log(`Name: ${country.name} (${country.cioc}) Population: ${country.population}`));

        // africa.forEach((country) => {
        //     li.innerHTML += `<li><strong>${country.name}</strong> (${country.cioc}) <strong>Population:</strong> ${country.population}</li>`;
        //   });
    // })

  // }, [productId]);

  return (
    <>
    <Menu />
    <SideNav />
    <div className="all-details d-flex flex-column justify-content-center ">
      {productG && (
        <>
          <div className="mb-4 detail-card ">
            <DetailCard product={productG} />
            {/* <p>{productG._id}</p>
            <p>{productG.name}</p> */}

          </div>

          <div className="gaccrel d-flex  justify-content-between flex-column flex-lg-row ">
            <div className="row d-flex  justify-content-between accordion-detailG ">
              <Accordions className="" product={productG} />

              <div className="d-lg-block d-none youtube-g ">
                <YouTube />
              </div>
            </div>

            <div className="d-flex justify-content-center relate-p">
              <RelatedProd />
            </div>

            <div className="d-lg-none youtube-g">
              <YouTube />
            </div>
          </div>
        </>
      )}
    </div>
    <Footer />
    </>
  );
};
export default DetailPage;

