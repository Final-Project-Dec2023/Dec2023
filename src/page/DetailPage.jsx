import React,  { useEffect, useState}from 'react'
import DetailCard from '../components/DetailCard'
import { data } from '../Db/ProductDb'
import Accordions from '../components/AccordionG';
import RelatedProd from '../components/RelatedProd';
import YouTube from '../components/YouTube'
import { useParams } from 'react-router-dom'
import '../css/DetailPage.css'

const DetailPage = () => {
   
    // const { productId } = useParams()

    const productG = data.find((p) => p._id )
    // === parseInt(productId)
return(
    <div className="all-details p-2">
       <div>
       <DetailCard product={productG}/>
       </div>
       
<div className='gaccrel d-flex p-4 justify-content-evenly flex-column flex-lg-row '>
<div className='row d-flex  justify-content-between' style={{width: ''}}>
    <Accordions height='70%' className='' product={productG}/>
    
    <div className="d-lg-block d-none">
    <YouTube height='30%'/>
    </div>
  
</div>

    
<div className='d-flex  justify-content-center mt-4' style={{width:''}} >
    <RelatedProd productG={productG}/>
</div>

<div className="d-lg-none">
    <YouTube/>
</div>
    
</div>
    </div>


)
}
export default DetailPage