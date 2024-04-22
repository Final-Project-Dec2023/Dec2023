import React,{useEffect, useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import "../css/AccordionM.css";
import { IoSearch } from "react-icons/io5";
import {data} from '../Db/ProductDb'


const Accord = ({handleCheckboxChange, handleAvailabilityChange}) => {
  
  const [search, setSearch] = useState('')
  // console.log(search)
  //All Gender
  const genderList = Array.from(new Set(data.map((product)=>{
    return product.gender
    }))).sort()

  //All brand
  const brandList = Array.from(new Set(data.map((product)=>{
  return product.brand
  }))).sort()
  //All Fragrant Type
  const fragrantType = Array.from(new Set(data.map((product)=>{
  return product.fragrance_type
  }))).sort()
  //ALL scent type
  const scentType = Array.from(new Set(data.map((product)=>{
    return product.scent_type
    }))).sort()

  // console.log(genderList);

  //Alphabet
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    setInputValue(value);
  };

  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');



  return (
    <>
      <Accordion defaultActiveKey={[""]} alwaysOpen>
        <Accordion.Item eventKey="0" className="accord">
          <Accordion.Header>
            <span className="accord-text">Gender</span>
          </Accordion.Header>
          <Accordion.Body className="accord-gender">
          {genderList.map((gender, index)=>(
              <label key={index}>
              <input
                type="checkbox"
                name={gender}
                value={gender}
                onChange={(e) => handleCheckboxChange(e, gender, "gender")}
                />
              {gender}
            </label>
          ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="accord">
        <Accordion.Header>
          <span className="accord-text">Brand</span>
        </Accordion.Header>
        <Accordion.Body className="accord-brand">
            <div className="brand-alpha">
            {alphabets.map((letter, index) => (
            <span key={index} onClick={() =>{ handleButtonClick(letter); setSearch(inputValue)}}>
              {letter.toUpperCase()}
            </span>
          ))}
          </div>

        </Accordion.Body>
        <Accordion.Body className="accord-input">
          <div className="input-body">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search'
            />
            <span><IoSearch /></span>
          </div>
          <div className="brand-list">
            {brandList
              .filter((brand) => search.toLowerCase() === '' ? true : brand.toLowerCase().includes(search))
              .map((brand, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={brand}
                    onChange={(e) => handleCheckboxChange(e, brand, "brandType")}
                  />
                  {brand}
                </label>
              ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="accord">
        <Accordion.Header>
          <span className="accord-text">Fragrance Type</span>
        </Accordion.Header>
        <Accordion.Body className="accord-price">
          {fragrantType.map((fragrant, index)=>(
            <label key={index}>
            <input
              type="checkbox"
              value={fragrant}
              onChange={(e) => handleCheckboxChange(e, fragrant, "fragranceType")}
              />
            {fragrant}
          </label>
          ))}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="accord">
        <Accordion.Header>
          <span className="accord-text">Scent Type</span>
        </Accordion.Header>
        <Accordion.Body className="accord-price">
        {scentType.map((scent, index)=>(
            <label key={index}>
            <input type="checkbox"      
             onChange={(e) => handleCheckboxChange(e, scent, 'scentType')}
            />
            {scent}
          </label>
        ))}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className="accord">
        <Accordion.Header>
          <span className="accord-text">Price</span>
        </Accordion.Header>
        <Accordion.Body className="accord-price">
          <label>
            <input type="checkbox" 
            value='Under10K'
            onChange={(e) => handleCheckboxChange(e, 'Under10K', 'price')}
             />
            Under &#x20A6;10,000
          </label>
          <label>
            <input type="checkbox"
            value='10kTo15K'
            onChange={(e) => handleCheckboxChange(e, '10kTo50K', 'price')}
            />
            &#x20A6;10,000 - &#x20A6;50,000
          </label>
          <label>
            <input type="checkbox" 
            value='Over15k'
            onChange={(e) => handleCheckboxChange(e, 'Over50k', 'price')}
            
            />
            &#x20A6;50,000+
          </label>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className="accord">
        <Accordion.Header>
          <span className="accord-text">Availability</span>
        </Accordion.Header>
        <Accordion.Body className="accord-availability">
          <ul>
            <li onClick={() => handleAvailabilityChange('true')}>In Stock</li>
            <li onClick={() => handleAvailabilityChange('false')}>Out of Stock</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Accord;
