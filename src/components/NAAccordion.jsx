import { Form } from "react-bootstrap";
import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import "../css/NAAccordion.css"
import searchEye from "../assets/images/Vector search.png"
// import { Alphabets } from "../components/NAAlphabetsCard"
import "../css/NACheckbox.css"
import { data } from "../Db/Perfumedb"
import "../css/NAAlphabets.css"


function NewAccordion({ handleCheckboxChange, handleAvailabilityChange}) {
  const [search, setSearch] = useState('')
  // const [selectedAlphabet, setSelectedAlphabet] = useState('')
    // Alphabet
  const [selectedAlphabet, setSelectedAlphabet] = useState('');
 

  const genders = Array.from(new Set(data.map((product) => {
    return product.gender
  }))).sort()

 
  const brands = Array.from(new Set(data.map((product) => {
    return product.brand
  }))).sort()
  
  const fragrants = Array.from(new Set(data.map((product) => {
    return product.fragranceType
  }))).sort()
  //ALL scent type
  const scents = Array.from(new Set(data.map((product) => {
    return product.scentType
  }))).sort()

  // console.log(genderList);

  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    
  return (
    <Accordion defaultActiveKey={[""]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Gender</Accordion.Header>
        <Accordion.Body>
          <div className='ac-body checked-div d-flex flex-column'>
            {genders.map((gender, index) => (
              <div key={index}>
                <Form.Check // prettier-ignore
                  type="checkbox"
                  className='ms-2'
                  label={gender}
                  value={gender}
                  onChange={(e) => handleCheckboxChange(e, gender, "gender")}

                />
              </div>
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" alwaysOpen>
        <Accordion.Header>Brand</Accordion.Header>
        <Accordion.Body>
          <div className='b-div'>
            {alphabets.map((alphabet, index) => {
              return (
                <span key={index}>
                  <button className="btn-brand" onClick={() => handleFilter('C')}>
                    {alphabet.toUpperCase()}
                    
                  </button>
                </span>
              )
            })}
          </div>
          <Accordion.Body className="checked-div6">
            <div className='' >
              <div className=' d-flex'>
                <input type='search' placeholder="Search" className='arrival-search-bar' onChange={(e) => set(e.target.value.toLowerCase().trim())} />
                <div style={{ backgroundColor: "black", width: "2rem", height: "35px", borderTopRightRadius: "3px", borderBottomRightRadius: "3px" }} className=''><img src={searchEye} alt="" className="" /></div>
              </div>
            </div>
            <div className='mt-3' style={{ maxHeight: "280px", overflowY: 'auto', overflowX: "hidden", width: "12.7rem", scrollbarGutter: "stable" }}>
              {brands.filter((brand, index) => {
                return search.toLowerCase() === '' ? brand : brand.toLowerCase().includes(search)
              }).map((brand, index) => (
                <div key={index}>

                  <Form.Check className=""
                    type="checkbox"
                    label={brand}
                    value={brand}
                    onChange={(e) => handleCheckboxChange(e, brand, "brandType")}
                  />

                </div>))}

            </div>
          </Accordion.Body>
          {/* <div className='mt-3'style={{ maxHeight: "260px", overflowY: 'auto', overflowX: "hidden",width:"14.5rem", scrollbarGutter:"stable"}}>
              <CheckedBox6 />
            </div> */}

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" alwaysOpen>
        <Accordion.Header>Fragrance Type</Accordion.Header>
        <Accordion.Body className="checked-div2 ms-3">
          {fragrants.map((fragrance, index) => (
            <div key={index}>
              <Form.Check 
              
                type="checkbox"
                label={fragrance}
                value={fragrance}
                onChange={(e) => handleCheckboxChange(e, fragrance, "fragranceType")}
              />
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Scent Type</Accordion.Header>
        <Accordion.Body className="checked-div3 ms-3">
          {scents.map((scent, index) => (
            <div key={index}>
              <Form.Check 
                type="checkbox"
                label={scent}
                value={scent}
                onChange={(e) => handleCheckboxChange(e, scent, 'scentType')}
              />
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body className="checked-div ms-3">
          <div>
            <Form.Check 
              type="checkbox"
              label="Under &#x20A6;10,000"
              value='Under10K'
              onChange={(e) => handleCheckboxChange(e, 'Under10K', 'price')}
            />
          </div>
          <div>
            <Form.Check 
              type="checkbox"
              label="&#x20A6;10,000 - &#x20A6;50,000"
              value='10kTo50K'
              onChange={(e) => handleCheckboxChange(e, '10kTo50K', 'price')}
            />
          </div>
          <div>
            <Form.Check
              type="checkbox"
              label=" &#x20A6;50,000+"
              value='Over50k'
              onChange={(e) => handleCheckboxChange(e, 'Over50k', 'price')}
            />
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Availability</Accordion.Header>
        <Accordion.Body>
          <div className='checked-div5'>
            <button onClick={() => handleAvailabilityChange('true')} style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "green", border: "none" }} className='ms-2 mt-3' /> <span className='text-success'>In stock</span> <br />
            <button onClick={() => handleAvailabilityChange('false')} style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "red", border: "none" }} className='ms-2 mt-2' /> <span className='text-danger'>Out of stock</span>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default NewAccordion;


