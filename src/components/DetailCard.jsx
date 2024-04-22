import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import '../css/DetailCards.css'
import Star from '../assets/images/Vector star.png'
import Plus from '../assets/images/ic_sharp-plus.png'
import Minus from '../assets/images/ic_sharp-minus.png'


const DetailCard = ({product}) => {
    let price = (product.priceCents/100).toLocaleString(undefined, {minimumFractionDigits: 2})
        const [selectedImage, setSelectedImage] = useState(product.imageUrl.two);
    
        const handleImageClick = (imageUrl) => {
            setSelectedImage(imageUrl);
        };


    const [count, setCount] = useState(1)

    const handleIncrease = () => {
        // count + 1;
        setCount(count + 1)
    }
    const handleDecrease = () => {
        // count - 1;
        if (count > 0) {
            setCount(count - 1);
          }
    }
  return (
   <>
    <div className='productDetail'>
        <div className="productCont">
        <div className="productImg">
            <div className='selectImg'>
            <div className={`simg ${selectedImage === product?.imageUrl.one ? 'selected' : ''}`} onClick={() => handleImageClick(product.imageUrl.one)}>
                    <img src={product.imageUrl.one} alt="" />
                </div>
                <div className={`simg ${selectedImage === product?.imageUrl.two ? 'selected' : ''}`} onClick={() => handleImageClick(product.imageUrl.two)}>
                    <img src={product.imageUrl.two} alt="" />
                </div>
                <div className={`simg ${selectedImage === product?.imageUrl.three ? 'selected' : ''}`} onClick={() => handleImageClick(product.imageUrl.three)}>
                    <img src={product.imageUrl.three} alt="" />
                </div>
            </div>
            <div className='clickedImg'>
                <img src={selectedImage}/>
            </div>
        </div>
        <div className="productInfo p-3">

        
            <h1 className='hG'>{product?.name}</h1>
            <p style={{fontSize:'1.13rem', fontWeight: '400'}}>{product?.description} <span>{product?.size}Oz</span> </p>
        
        <div style={{display: 'flex', alignItems:'center'}} className=''>
        <div className='imgG d-flex' style={{ width:'5.63rem', justifyContent:'space-between '}}>
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
        </div>
        
            <span style={{fontSize:'1.13rem', fontWeight: '300', marginLeft:'1.25rem' }}>4.7 (<span style={{fontSize: '1.13rem'}}>40 Reviews</span>)</span>
        
        </div>
            <p className='my-2' style={{fontSize:'1.25rem'}}>Price: <span className='' style={{fontSize:'1.63rem', fontWeight:'500'}}>&#x20A6;{price}</span></p>
           <p className='mb-2' style={{fontSize:'1.25rem'}}>Size: <span style={{fontSize:'1rem'}}>2.3 Oz</span></p> 
          <div> <button className='bg-dark text-light' style={{width:'3.69rem', height:'2.44rem', fontSize:'0.88rem', fontWeight:'500', borderRadius:'4px'}}>2.3 Oz</button> <button className='bg-light text-dark border border-dark' style={{width:'3.69rem', height:'2.44rem', fontSize:'0.88rem', fontWeight:'500', borderRadius:'4px'}}>6.3 Oz</button> </div>
          
          <div className="d-flex my-2  align-items-center" >
            <span className='pe-4'style={{fontSize:'1.25rem'}}>Quantity:</span>
            <button className='btn1  bg-transparent rounded-0 rounded-start'  onClick={handleDecrease}><img src={Minus} alt="" /></button>
            <Button className='btnGg rounded-0 bg-transparent text-dark fw-bold '>{count}</Button>
            <button className='btn1  bg-transparent rounded-0 rounded-end' onClick={handleIncrease}><img src={Plus} alt="" /></button>
            
        </div>
        
        <div className='d-flex'>
            <p style={{fontSize:'1.25rem'}}>Availability:</p> 
            <ul className='d-flex' style={{listStyle:'none', paddingLeft:'1rem'}}>
            <li style={{color: product.isavailability ? '#009320' : '#E70000', fontWeight:'500', fontSize:'1.13rem'}}>
       <span style={{backgroundColor: product.isavailability ? '#009320' : '#E70000',
           width: '10px',
           height: '10px',
           borderRadius: '50%',
           display: 'inline-block',
           marginRight: '5px'}}></span>
       {product.isavailability ? 'In Stock' : 'Out of Stock'}
   </li> 
            </ul></div>
        
        <div className="d-flex flex-column">
        <Button variant="dark" className='buttonG mb-3'>Buy Now</Button>
        <Button variant="light" className='buttonG  border border-dark' >Add to Cart</Button>
        </div>
        </div>
        </div>
    </div>

   
   </>
  )
}

export default DetailCard