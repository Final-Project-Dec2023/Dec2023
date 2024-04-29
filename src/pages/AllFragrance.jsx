import { useState, useEffect } from "react";
import "../css/AllFragance.css";
import ProductCard from "../components/ProductCardM";
import { data } from "../Db/ProductDb";
import Accord from "../components/AccordionM";
import Pagination from "../components/PaginationM";
import { BiSort } from "react-icons/bi";
import OffCanvasButton from "../components/FilterbyM";
import Breadcrumbs from "../components/NABreadcCumbs";





const AllFragrance = () => {
    //general data
    const [currentProducts, setCurrentProducts] = useState(data);
    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    //gender
    const [selectedGender, setSelectedGender] = useState([]);
    //brand
    const [selectedBrand, setSelectedBrand] = useState([]);
    //Fragrance
    const [selectedFragranceTypes, setSelectedFragranceTypes] = useState([]);
    //Scent
    const [selectedScentType, setSelectedScentType] = useState([]);
   //Price
    const [selectedPrice, setSelectedPrice] = useState([]);
    //Availability
    const [selectedAvailability, setSelectedAvailability] = useState(null);


// ---------------Pagination Start---------
    const productsPerPage = 15;
    const totalPages = Math.ceil(data.length / productsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

      const indexOfLastProduct = currentPage * productsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
      
      const paginate = currentProducts.slice(indexOfFirstProduct, indexOfLastProduct);
// ---------------Pagination End---------


  
    useEffect(() => {
      let filteredProducts = data;
  
      //filter for Gender
      if (selectedGender.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedGender.includes(product.gender));
      }
      //filter for Brand
      if (selectedBrand.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedBrand.includes(product.brand));
      }
      
  
      //filter for Fragrance Type
      if (selectedFragranceTypes.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
          selectedFragranceTypes.includes(product.fragrance_type)
        );
      }

      //filter for Scent Type
      if (selectedScentType.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            selectedScentType.includes(product.scent_type)
        );
      }
      //filter for Price
      if (selectedPrice.length > 0) {
        filteredProducts = filteredProducts.filter(product =>{
            if (selectedPrice.includes('Under10K')) {
                return product.priceCents <= 1000000;
            }else if(selectedPrice.includes('10kTo50K')){
                return product.priceCents >= 1000000 && product.priceCents <= 5000000;

            }else if (selectedPrice.includes('Over50k')){
                return product.priceCents >= 5000000;
            }
      });
      }

        // Filter by availability
        if (selectedAvailability !== null) {
        if (selectedAvailability === 'true') {
            filteredProducts = filteredProducts.filter(product => product.isavailability === true);
        } else {
            filteredProducts = filteredProducts.filter(product => product.isavailability === false);
        }
        }


  
      setCurrentProducts(filteredProducts);
    }, [selectedGender, selectedBrand ,selectedFragranceTypes, selectedScentType, selectedPrice,selectedAvailability ]);
  
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
  

       if(category === 'price'){
        setSelectedPrice(prevState => {
            if (isChecked) {
              return [...prevState, value];
            } else {
              return prevState.filter(item => item !== value);
            }
          });
      }
    };

    const handleAvailabilityChange = (availability) => {
        setSelectedAvailability(availability);
      };


  return (
    <>
      <div className="m-section">
        <div className="m-main">
          <div className="m-title">
            <div className="title-left">
              <h4>All Featured Fragrance</h4>
                <p>Showing {indexOfFirstProduct+1} - {indexOfLastProduct} of {currentProducts.length} Products</p>

            </div>
            <div className="title-right">
              <span>Sort by</span>
              <select className="selectM">
                <option value="0">Best Seller</option>
              </select>
            </div>
          </div>
          <div className="m-content">
            <div className="m-controls">
              <div className="control-text">
                <p>Filter By</p>
              </div>
              <div className="control-list">
                {/* Accodion start */}
                <Accord handleCheckboxChange={handleCheckboxChange} handleAvailabilityChange={handleAvailabilityChange} />
                {/* Accordion ends */}
              </div>
            </div>
            <div className="m-controls-mobile">
              <OffCanvasButton handleCheckboxChange={handleCheckboxChange} handleAvailabilityChange={handleAvailabilityChange}/>
              {/* <h3><BiSort />Sort By</h3> */}
            </div>
            <div className="m-products">
              {paginate.map((product, index) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          </div>
        </div>
        <div className="m-pagination">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </>
  );
};

export default AllFragrance;
