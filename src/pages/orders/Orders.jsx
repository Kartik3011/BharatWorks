import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { formatINR } from "../../data";
import prof from "../../assets/prof.png";
import "./Orders.scss";

function Orders() {
  const { orders, getGig, startConversation } = useData();
  const navigate = useNavigate();

  const rows = orders.map((o) => ({ ...o, gig: getGig(o.gigId) })).filter((o) => o.gig);

  const message = (name) => {
    const id = startConversation(name);
    navigate(`/message/${id}`);
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="page-heading">
          <h1>Orders</h1>
          <p>Jobs you've hired freelancers for on BharatWorks.</p>
        </div>

        {rows.length === 0 ? (
          <div className="empty-state">
            <img src={prof} alt="" width={56} />
            <h3>No orders yet</h3>
            <p>Once you hire a freelancer, your orders will show up here.</p>
          </div>
        ) : (
          <div className="table-wrap card">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Gig</th>
                  <th>Freelancer</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((o) => (
                  <tr key={o.id}>
                    <td>{o.gig.title}</td>
                    <td>{o.gig.seller}</td>
                    <td>{formatINR(o.gig.price)}</td>
                    <td>
                      <span className="badge badge-gold">In progress</span>
                    </td>
                    <td>
                      <button className="btn btn-outline btn-sm" onClick={() => message(o.gig.seller)}>
                        Message
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
