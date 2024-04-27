import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/Auth'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Jumbotron from '../../components/cards/Jumbotron'

const AdminProduct = () => {
  const [ categories, setCategories] = useState([])
  const [ name, setName] = useState("")
  const [ description, setDescription] = useState("")
  const [ price, setPrice] = useState("")
  const [ category, setCategory] = useState("")
  const [ quantity, setQuantity] = useState(1)
  const [ images, setImages] = useState([])
  const [ shipping, setShipping] = useState("")
  const [ loading, setLoading] = useState(false)

  const { auth } = useAuth()
  // fetch all categories from the backend. fetching using the right route as used in the backend
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get("/category/categories");
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };
  // fetchCategories();
  useEffect(() => {
    fetchCategories();
  }, []);

  // handleFormSubmit - this is also to create a category
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData()
    productData.append("name", name)
    productData.append("description", description)
    productData.append("price", price)
    productData.append("quantity", quantity)
    productData.append("category", category)
    productData.append("imaages", images)
    productData.append("shipping", shipping)


    try {
      setLoading(true);
      const { data } = await axios.post("/product/create", productData);

      if (data?.success) {
        fetchCategories();
        setName("");
        toast.success("Category created successfully");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      const msg = err?.response?.data;
      toast.error(msg);
      setLoading(false);
    }
  };
  return (
    <div>
        <Jumbotron title="Create Product" subTitle='Admin Dashboard'/>
        <div className="col-md-6 offset-md-3" style={{marginTop: "2rem"}}>
          <div className="">
            <input type="text" className='form-control p-2 mb-3' placeholder='Enter product name' value={name} onChange={(e) =>setName(e.target.value)} />
          </div>
          <div className="">
            <textarea type="text" className='form-control p-2 mb-3' placeholder='Enter product description' value={description} onChange={(e) =>setDescription(e.target.value)} />
          </div>
          <div className="">
            <input type="number" className='form-control p-2 mb-3' placeholder='Enter price' value={price} onChange={(e) =>setPrice(e.target.value)} />
          </div>
          <div className="">
            <input type="number" className='form-control p-2 mb-3' placeholder='Enter quantity' value={quantity} onChange={(e) =>setQuantity(e.target.value)} />
          </div>
          <div className="">
            <select className='form-control p-2 mb-3' placeholder='Choose a category' onChange={(value) =>setCategory(value)}>
              {categories.map((c)=> (
                
              
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="">
          <button className='btn btn-danger' onClick={handleFormSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default AdminProduct