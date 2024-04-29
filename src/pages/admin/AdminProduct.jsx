import React, { useState, useEffect} from 'react'
import { useAuth } from '../../contexts/Auth'
import  Axios  from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Jumbotron from '../../components/cards/Jumbotron';


const AdminProduct = () => {
    const [categories, setCategories] = useState([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [images, setImages] = useState([])
    const [category, setCategory] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [shipping, setShipping] = useState(false)
    const [loading, setLoading] = useState(false)


    const { auth } = useAuth()

     // fetch categories
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append("name", name)
    productData.append("description", description)
    productData.append("price", price)
    productData.append("quantity", quantity)
    productData.append("category", category)
    productData.append("shipping", shipping)
    productData.append("image", image)
    

    try {
      setLoading(true);
      const { data } = await axios.post("/product/create", productData);

      if (data?.success) {
        fetchCategories();
        setName("");
        toast.success("Category created successfully");
        setLoading1(false);
      }
    } catch (err) {
      console.log(err);
      const msg = err?.response?.data;
      toast.error(msg);
      setLoading1(false);
    }
  };

console.log(categories);

  return (
    <div>
       <Jumbotron title= "Create Product" subTitle= 'Admin Dashboard'/>

       <div className="col-md-6 offset-md-3" style={{marginTop:"2rem"}}>
        <div classname="">
            <input type="text" 
            className="form-control p-2 mb-3"
             placeholder="Write a name" 
             value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>

        <div classname="">
            <input type="text" 
            className="form-control p-2 mb-3"
             placeholder="Write a description" 
             value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </div>

        <div classname="">
            <input type="number" 
            className="form-control p-2 mb-3"
             placeholder="Enter price" 
             value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
        </div>

        <div classname="">
            <input type="number" 
            className="form-control p-2 mb-3"
             placeholder="Enter quantity" 
             value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            />
        </div>

        <div classname="">
            <select
            className="form-control p-2 mb-3"
             placeholder="Choose a category" 
            onChange={(value) => setCategory(e.target.value)}
            >
                {categories?.map((c)=>(
                    <option key={c_.id} value={c.id}>
                        {c.name}
                    </option>
                ))}
             </select>

       </div>
    </div>
    <div className="div">
        <button className='btn btn-primary' 
        onClick={handleFormSubmit}>Submit</button>
    </div>
    </div>
  )
}

export default AdminProduct