import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/Auth";
import Jumbotron from "../../components/cards/Jumbotron";
import AdminMenu from "../../components/nav/AdminMenu";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import Menu from "../../components/NavBar";
import Footer from "../../components/Footer";

const AdminProducts = () => {
  // context
  const { auth, setAuth } = useAuth();
  // state
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(null);
  const [productCount, setProductCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    loadProducts();
  }, [page]);

  const loadProducts = async () => {
    try {
      const { data } = await axios.get(`/product/all?page=${page}&limit=${limit}`);
      setProducts(data?.products);
      setTotalPage(data?.totalPages);
      setProductCount(data?.productCount);
      setCurrentPage(data?.currentPage);
    } catch (err) {
      console.log(err); 
    }
  };

  console.log(productCount);
  // console.log(currentPage);

  return (
    <>
      <Menu />
      <Jumbotron
        title={`Hello ${auth?.user?.name}`}
        subTitle="Admin Dashboard"
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="p-3 my-2  bg-light d-flex justify-content-between">
              <h4>
                All Products <span>({productCount || 0})</span>
              </h4>
              <p className="bg-warning px-2 py-1">Page {page}/{totalPages}</p>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Photo</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">CreatedAt</th>
                  <th scope="col">View</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, i) => (
                  <tr key={p._id}>
                    <td>{(page - 1) * limit + i + 1}</td>
                    <td>
                      {p?.images && (
                        <img
                          key={p._id}
                          src={p.images[0].url}
                          alt={p.images[0].imagePublicId}
                          className="img-thumbnail mr-2 mx-2"
                          style={{ width: "100px", height: "100px" }}
                        />
                      )}
                    </td>
                    <td>{p.name}</td>
                    <td>{p.quantity}</td>
                    <td>
                      {moment(p.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                    </td>
                    <td>
                      <Link to={`/dashboard/admin-product/detail/${p.slug}`}>
                        detail
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* pagination */}
            <div className="d-flex justify-content-center align-items-center mb-3">
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                  style={{backgroundColor: "#0098B8"}}
                >
                  Previous
                </button>
                <span>(page {page}/{totalPages})</span>
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPages}
                  style={{backgroundColor: "#0098B8"}}
                >
                  Next
                </button>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminProducts;
