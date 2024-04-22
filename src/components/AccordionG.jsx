import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../css/AccordionG.css'

function Accordions({product}) {
  return (
    <div className="accordionG ">
        <h3>Product Details</h3>
        <Accordion defaultActiveKey="0" alwaysOpen className='border border-0'>
      <Accordion.Item eventKey="0" >
        <div className="border-top border-2">
        <Accordion.Header ><span style={{fontSize:'24px', fontWeight:'500'}}>About The Product</span></Accordion.Header>
        <Accordion.Body>
        <p className='detailG'>{product?.about}</p>
        </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="1" >
        <div className="border-top border-2">
        <Accordion.Header><span style={{fontSize:'24px', fontWeight:'500'}}>Scent Profile</span></Accordion.Header>
        <Accordion.Body>
        <p className='detailG'>{product?.scent_profile}</p>
        </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="2" >
       <div className="border-top border-2">
       <Accordion.Header><span style={{fontSize:'24px', fontWeight:'500'}}>Scent Type</span></Accordion.Header>
        <Accordion.Body>
          <p className='detailG'>{product?.scent_type}</p>
        </Accordion.Body>
       </div>
      </Accordion.Item>
      <Accordion.Item eventKey="3" >
        <div className="border-top border-2">
        <Accordion.Header><span style={{fontSize:'24px', fontWeight:'500'}}>Suggested For Use</span></Accordion.Header>
        <Accordion.Body>
       <p className='detailG'> {product?.usage}</p>
        </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="4" >
        <div className="border-top border-2 border-bottom">
        <Accordion.Header><span style={{fontSize:'24px', fontWeight:'500'}}>Refund Policy</span></Accordion.Header>
        <Accordion.Body>
          <p className='detailG'>{product?.refund_policy}</p>
        </Accordion.Body>
        </div>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}
export default Accordions;
