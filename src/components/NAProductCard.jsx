import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../css/NAProductcard.css"

const ProductCard = ({ products, index }) => {
// margin: top left bottom right
const {name,price, image, availability,weight, fragranceType} = products
// let priceNaira = (price/100).toLocaleString(undefined, {minimumFractionDigits: 2})
    return (
        <div >
            <div className='d-flex justify-content-between flex-wrap gap-3'>
            <Card className= "card">
                <Card.Img variant="top" src={image}className='NA-card-image' />
                <Card.Body className='NA-card-body'>
                    <Card.Title className="NA-card-title">{name}</Card.Title>
                    <Card.Text>{fragranceType} <span>{weight}</span></Card.Text>
                    <Card.Text><span>₦</span>{price}</Card.Text>
                   {availability ?  <Button variant="dark" className='text-light p-2 NA-card-btn'>Add to Cart</Button> : <Button variant="secondary" className='text-light p-2 NA-card-btn'>Sold Out</Button>}
                </Card.Body>
            </Card>
            </div>
           
        </div>

    )
}

export default ProductCard