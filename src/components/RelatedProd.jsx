import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/RelatedProd.css'
import { data } from '../Db/ProductDb';



const RelatedProd = ({productG}) => {
  let price = (productG.priceCents/100).toLocaleString(undefined, {minimumFractionDigits: 2})

  let brand = productG.brand
  return (
    <div className='rpB mt-lg-4 mb-4 p-2'>
      
          <div >
            {/* <h1>{productG.brand}</h1> */}
            <h3>Related Products</h3>
            <div className='rpG  rounded px-lg-4 pt-lg-4 d-flex flex-row flex-lg-column justify-content-md-between'>
        {data.filter((product, index)=>product.brand === `${productG.brand}`
        ).slice(0,2).map((item)=>{ 
          return <Card className='cardG mb-lg-4 mx-2 p-1'  key={item._id} >
      <Card.Img variant="top" src={item?.image}  className='imgGa'/>
      <Card.Body className='row d-flex justify-content-between align-items-center'>
       
       
        <div>
            <h1 className='hg' style={{fontSize:'24px'}}>{item?.name}</h1> 
            <p className='pg' style={{fontSize:'18px', fontWeight:'400'}}>{item?.description}</p>
            <p className='ppg' style={{fontSize:'26px', fontWeight:'700'}}>&#x20A6;{price}</p>
            </div>
       
        <Button variant="dark" className='btnG mx-lg-2  d-block'>
        Add to Cart
        </Button>
      </Card.Body>
    </Card>
     })}
            </div>
        
        
        </div>
      
    </div>
  )
}

export default RelatedProd