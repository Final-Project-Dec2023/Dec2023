import React from "react";
import DetailCard from "../components/DetailCard";
import { data } from "../Db/ProductDb";
import Accordions from "../components/AccordionG";
import RelatedProd from "../components/RelatedProd";
import YouTube from "../components/YouTube";
import { useParams } from "react-router-dom";
import "../css/DetailPage.css";

const DetailPage = () => {
  const { productId } = useParams();

  const productG = data.find((p) => p._id === parseInt(productId));
  return (
    <div className="all-details d-flex flex-column justify-content-center ">
      <div className="mb-4 detail-card ">
        <DetailCard product={productG} />
      </div>

      <div className="gaccrel d-flex  justify-content-between flex-column flex-lg-row ">
        <div className="row d-flex  justify-content-between accordion-detailG ">
          <Accordions className="" product={productG} />

          <div className="d-lg-block d-none youtube-g ">
            <YouTube />
          </div>
        </div>

        <div className="d-flex justify-content-center relate-p">
          <RelatedProd productG={productG}/>
        </div>

        <div className="d-lg-none youtube-g">
          <YouTube />
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
