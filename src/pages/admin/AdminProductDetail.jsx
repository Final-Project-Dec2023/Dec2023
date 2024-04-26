import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/Auth";
import Jumbotron from "../../components/cards/Jumbotron";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Menu from "../../components/NavBar";
import Footer from "../../components/Footer";

const AdminProductDetail = () => {
  // context
  const { auth, setAuth } = useAuth();
  const { slug } = useParams();
  // state
  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data } = await axios.get(`/product/slug/${slug}`);
      setProduct(data?.product);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(product);

  return (
    <>
    <Menu/>
      <Jumbotron
        title={`Hello ${auth?.user?.name}`}
        subTitle="Admin Dashboard"
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Product</div>

            {product?.name}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AdminProductDetail;
