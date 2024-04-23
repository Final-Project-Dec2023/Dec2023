import React, { useEffect, useState } from 'react'
import { CiFilter } from "react-icons/ci";
import { BiSort } from "react-icons/bi";
import ForwardArrowImg from "../assets/images/Vector back.png"
import "../css/Newarrival.css"
import "../css/NAProductcard.css"
import BreadCrumb from "../components/NABreadcCumbs"
import NewAccordion from '../components/NAAccordion';
import Mydropdown1, { Mydropdown2 } from '../components/NADropdown';
import { data } from "../Db/Perfumedb"
import ProductCard from '../components/NAProductCard';


const Newarrival = () => {
  const [currentProducts, setCurrentProducts] = useState(data);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  //gender
  const [selectedGender, setSelectedGender] = useState([]);
  //brand
  const [selectedBrand, setSelectedBrand] = useState([]);
  // Alphabet
  const [selectedAlphabet, setSelectedAlphabet] = useState('');
  //Fragrance
  const [selectedFragranceTypes, setSelectedFragranceTypes] = useState([]);
  //Scent
  const [selectedScentType, setSelectedScentType] = useState([]);
  //Price
  const [selectedPrice, setSelectedPrice] = useState([]);
  //Availability
  const [selectedAvailability, setSelectedAvailability] = useState(null);

  const itemsPerPage = 15;

  // State to track the current page
  // const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const paginate = currentProducts.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(data.length / itemsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  // Function to handle page navigation
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  function changeCurrentPage(index) {
    setCurrentPage(index)
  }

  const renderPaginationButtons = () => {
    return (
      <div className="d-flex justify-content-between flex-wrap gap-3">
        <nav className="">
          <ul className="pagination justify-content-center">
            {
              numbers.map((number, index) => (
                <li className={`page-item ${currentPage === number ? 'active' : ''}`} key={index}>
                  <button className="page-link mx-2" onClick={() => changeCurrentPage(number + 1)} >
                    {number}
                  </button>
                </li>
              ))
            }

            <li className="page-item">
              <button  className="page-link" onClick={nextPage} disabled={currentPage === nPage}>
                <a href="#"><img src={ForwardArrowImg} alt="" /></a>
              </button>
            </li>
          </ul>
        </nav>

      </div>
    );
  };


  const [showFilter, setShowFilter] = useState(false)
  const [showSort, setShowSort] = useState(false)
  useEffect(() => {
    let filteredProducts = data;

    //filtering by Gender
    if (selectedGender.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedGender.includes(product.gender));
    }
    //filtering by Brand
    if (selectedBrand.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedBrand.includes(product.brand));
    }

    //filtering by Fragrance Type
    if (selectedFragranceTypes.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        selectedFragranceTypes.includes(product.fragranceType)
      );
    }

    //filtering by Scent Type
    if (selectedScentType.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        selectedScentType.includes(product.scentType)
      );
    }

    // filtering by Price
    if (selectedPrice.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        if (selectedPrice.includes('Under10K')) {
          return product.price <= 1000000;
        } if (selectedPrice.includes('10kTo50K')) {
          return product.price >= 1000000 && product.price <= 5000000;

        } if (selectedPrice.includes('Over50k')) {
          return product.price >= 5000000;
        }
      });
    }

    // Filtering by availability
    if (selectedAvailability !== null) {
      if (selectedAvailability === 'true') {
        filteredProducts = filteredProducts.filter(product => product.availability === true);
      } else {
        filteredProducts = filteredProducts.filter(product => product.availability === false);
      }
    }

    setCurrentProducts(filteredProducts);
  }, [selectedGender, selectedBrand, selectedFragranceTypes, selectedScentType, selectedAvailability, selectedPrice, selectedAlphabet])

  const handleFilter = (letter) => {
    // const filtered = data
    const filtered = data.filter(product => product.brand.charAt(0).toUpperCase() === letter);
    setCurrentProducts(filtered)
  }


  const handleCheckboxChange = (event, value, category) => {
    const isChecked = event.target.checked;

    switch (category) {
      case 'gender':
        setSelectedGender(prevState => isChecked ? [...prevState, value] : prevState.filter(item => item !== value));
        break;
      case 'brandType':
        setSelectedBrand(prevState => isChecked ? [...prevState, value] : prevState.filter(item => item !== value));

        break
      case 'fragranceType':
        setSelectedFragranceTypes(prevState => isChecked ? [...prevState, value] : prevState.filter(item => item !== value));
        break;
      case 'scentType':
        setSelectedScentType(prevState => isChecked ? [...prevState, value] : prevState.filter(item => item !== value));
        break;
      case 'price':
        setSelectedPrice(prevState => isChecked ? [...prevState, value] : prevState.filter(item => item !== value));
        break;
      case '':
      default:
        break;
    }

    // const handleFilter = (letter) => {

    //   setSelectedAlphabet(filteredProducts)
    // };


    //  if(category === 'price'){
    //   setSelectedPrice(prevState => {
    //       if (isChecked) {
    //         return [...prevState, value];
    //       } else {
    //         return prevState.filter(item => item !== value);
    //       }
    //     });
    // }
  };
  const handleShow = () => setShowFilter(!showFilter);
  const handleClick = () => setShowSort(!showSort);

  const handleAvailabilityChange = (availability) => {
    setSelectedAvailability(availability);
  };
 
  return (
    <div className="arrival-desk-div">
      <div className='arrival-top-div-desk'>

        <div className='d-none d-md-none d-lg-block'>
          <BreadCrumb />
        </div>

        <div className='d-flex justify-content-between'>
          <div className='d-block d-md-none d-lg-none'>
            <h3>All Featured Fragrance</h3>
            <span>Showing 1-20 of 500 products</span>
          </div>
          <div className='d-none d-md-block d-lg-block'>
            <h3>All Featured Fragrance</h3>
            <span>Showing 1-15 of 500 products</span>
          </div>

          <div className="d-none d-md-none d-lg-block">
            <span><Mydropdown1 /></span>
          </div>
        </div>

      </div>

      <div className="d-flex justify-content-between d-md-flex justify-md--content-between arrival-top-div-mob d-block d-md-block d-lg-none my-3">
        <div className="" ><span className='' onClick={handleShow}><span><CiFilter /></span> <b>Filter By </b></span>
          {showFilter && <div className='arrival-filter-div'><NewAccordion handleCheckboxChange={handleCheckboxChange} handleAvailabilityChange={handleAvailabilityChange} /></div>}
        </div>

        <div className=''><span className='me-3' onClick={handleClick} ><span><BiSort /></span> <b>Sort By</b> </span>
          {showSort && <Mydropdown2 />}</div>

      </div>

      <div className="arrival-products-div-mob d-flex justify-content-between flex-wrap gap-3 ">
        {paginate.map((product, index) => {
          return (
            <div className="d-block d-md-none d-lg-none" key={index}>
              <ProductCard products={product} />
            </div>

          )
        }
        )}
      </div>

      <div className='arrival-main-div'>
        <div className="arrival-filter-div d-none d-md-none d-lg-block me-3">
          <h6 className="ms-3 mt-3 mb-2"><b>Filter By</b></h6>
          <NewAccordion handleCheckboxChange={handleCheckboxChange} handleAvailabilityChange={handleAvailabilityChange} handleFilter={handleFilter}
          />
        </div>

        {/* Desktop and Tablet products div */}
        <div className="arrival-products-div-desk d-flex flex-wrap gap-3">
          {paginate.map((product, index) => {
            return (
              <div className=" d-none d-md-none d-lg-block" key={index}>
                <ProductCard products={product} />
              </div>
            )
          }
          )}

          <div className='pagination'>
            {renderPaginationButtons()}
          </div>
          {/* Sort by for desktop drop down is in a dropdown component */}
        </div>
      </div>

    </div>
  )
}

export default Newarrival