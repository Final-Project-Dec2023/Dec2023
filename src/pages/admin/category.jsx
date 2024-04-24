
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import CategoryForm from '../../components/forms/CategoryForm'
import { useAuth } from '../../contexts/auth'
import { transformWithEsbuild } from 'vite';




const AdminCategory = () => {
    const [name,setName]=useState("");
    const[categories,setCategories]=useState("");
    const[updateName,setUpdateName]=useState("");

    //fetch categories
    const fetchCategories = async(() => {
        try {
            const { data } = await axios.get("/category/categories");
            setCategories(data);
            
            
        } catch (err) {
            console.log(err);
        }
    })
    fetchCategories();
  return (
    <>
   
    </>
  )
}

export default AdminCategory