import React from 'react'
import '../css/ProductM.css'
import { Link } from 'react-router-dom'

const ProductCard = ({product, index}) => {
  const {name,description,priceCents, image, isavailability} = product
  let price = (priceCents/100).toLocaleString(undefined, {minimumFractionDigits: 2})
  return (
    <Link to={`/detail/${product._id}`}>
    <div key={index}>
      <div className='m-card-Container' key={index}>
        <div className='m-image'>
            <img src={image}/>
        </div>
        <div className='m-card-info'>
            <div className="m-card-text">
                <h4>{name}</h4>
                <p>{description}</p>
                <h2>&#x20A6;{price}</h2>
            </div>
            <div className="m-card-btn">
              {isavailability ? <button>Add to cart</button> : <button className='not-ava' disabled>Sold Out</button> }
            </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard
