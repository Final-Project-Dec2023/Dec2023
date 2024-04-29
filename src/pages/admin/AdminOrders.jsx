// import { useEffect, useState } from "react";
// import { useAuth } from "../../contexts/Auth";
// import Jumbotron from "../../components/cards/Jumbotron";
// import AdminMenu from "../../components/nav/AdminMenu";
// import axios from "axios";
// import moment from "moment";
// import ProductCardHorizontal from "../../components/cards/ProductCardHorizontal";

// const AdminOrders = () => {
//   // context
//   const { auth, setAuth } = useAuth();
//   // state
//   const [orders, setOrders] = useState([]);
//   const [status, setStatus] = useState([
//     "Not processed",
//     "Processing",
//     "Shipped",
//     "Delivered",
//     "Cancelled",
//   ]);
//   const [changedStatus, setChangedStatus] = useState("");

//   useEffect(() => {
//     if (auth?.token) getOrders();
//   }, [auth?.token]);

//   const getOrders = async () => {
//     try {
//       const { data } = await axios.get("orders/all");
//       setOrders(data?.orders);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleChange = async (orderId, value) => {
//     setChangedStatus(value);
//     try {
//       const { data } = await axios.put(`/order-status/${orderId}`, {
//         status: value,
//       });
//       getOrders();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   console.log(orders);
//   return (
//     <>
//       <Jumbotron title={`Hello ${auth?.user?.name}`} subTitle="Dashboard" />

//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <div className="p-3 mt-2 mb-2 h4 bg-light">Orders</div>

//             {orders?.map((o, i) => {
//               return (
//                 <div
//                   key={o._id}
//                   className="border shadow bg-light rounded-4 mb-5"
//                 >
//                   <table className="table">
//                     <thead>
//                       <tr>
//                         <th scope="col">#</th>
//                         <th scope="col">Status</th>
//                         <th scope="col">Buyer</th>
//                         <th scope="col">Ordered</th>
//                         <th scope="col">Payment</th>
//                         <th scope="col">Quantity</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td>{i + 1}</td>
//                         <td>
//                           {/* <select
//                             onChange={(value) => handleChange(o._id, value)}
//                             default={o?.payment?.paymentStatus}
//                           >
//                             {status.map((s, i) => (
//                               <option key={i} value={s}>
//                                 {s}
//                               </option>
//                             ))}
//                           </select> */}
//                           <select
//                             className="form-select p-2 "
//                             placeholder="Change status"
//                             onChange={(e) => handleChange(o._id, e.target.value)}
//                           >
//                             <option value="Select Category">
//                               Select category
//                             </option>
//                             {o?.map((c) => (
//                               <option key={c._id} value={c._id}>
//                                 {c.name}
//                               </option>
//                             ))}
//                           </select>
//                         </td>
//                         <td>{o?.buyer?.name}</td>
//                         <td>{moment(o?.createdAt).fromNow()}</td>
//                         <td>
//                           {o?.payment?.paymentStatus ? "Success" : "Failed"}
//                         </td>
//                         <td>{o?.products?.length} products</td>
//                       </tr>
//                     </tbody>
//                   </table>

//                   <div className="container">
//                     <div className="row m-2">
//                       {o?.products?.map((p, i) => (
//                         <ProductCardHorizontal key={i} p={p} remove={false} />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminOrders;

import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/Auth";
import Jumbotron from "../../components/cards/Jumbotron";
import AdminMenu from "../../components/nav/AdminMenu";
import axios from "axios";
import moment from "moment";
import ProductCardHorizontal from "../../components/cards/ProductCardHorizontal";

const AdminOrders = () => {
  // context
  const { auth, setAuth } = useAuth();
  // state
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (auth?.token) {
      getOrders();
    }
  }, [auth?.token]);

  const getOrders = async () => {
    try {
      const { data } = await axios.get("orders/all");
      setOrders(data?.orders);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(`/order-status/${orderId}`, {
        status: value,
      });
      getOrders();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Jumbotron title={`Hello ${auth?.user?.name}`} subTitle="Dashboard" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Orders</div>

            {orders?.map((o) => (
              <div key={o._id} className="border shadow bg-light rounded-4 mb-5">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#OrderId</th>
                      <th scope="col">Status</th>
                      <th scope="col">Buyer</th>
                      <th scope="col">Ordered</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{o._id}</td>
                      <td>
                        <select
                          className="form-select"
                          value={o.status}
                          onChange={(e) => handleChange(o._id, e.target.value)}
                        >
                          <option value="Not processed">Not processed</option>
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td>{o.buyer.name}</td>
                      <td>{moment(o.createdAt).fromNow()}</td>
                      <td>{o.payment.paymentStatus ? "Success" : "Failed"}</td>
                      <td>{o.products.length} products</td>
                    </tr>
                  </tbody>
                </table>

                <div className="container">
                  <div className="row m-2">
                    {o.products.map((p) => (
                      <ProductCardHorizontal key={p._id} p={p} remove={false} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOrders;

