import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import { formatINR } from "../../data";
import "./MyGigs.scss";

function MyGigs() {
  const { currentUser } = useAuth();
  const { gigs, removeGig } = useData();

  const myGigs = gigs.filter((g) => g.seller === currentUser.username);

  return (
    <div className="myGigs">
      <div className="container">
        <div className="page-heading row">
          <div>
            <h1>My Jobs</h1>
            <p>Everything you've posted on BharatWorks.</p>
          </div>
          <Link to="/add" className="btn btn-gold">
            Post a Job
          </Link>
        </div>

        {myGigs.length === 0 ? (
          <div className="empty-state">
            <h3>You haven't posted any jobs yet</h3>
            <p>Create your first gig and it'll show up here.</p>
            <Link to="/add" className="btn btn-gold">
              Post a Job
            </Link>
          </div>
        ) : (
          <div className="table-wrap card">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Gig</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Delivery</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {myGigs.map((g) => (
                  <tr key={g.id}>
                    <td className="titleCell">
                      <Link to={`/gig/${g.id}`}>{g.title}</Link>
                    </td>
                    <td>{formatINR(g.price)}</td>
                    <td>
                      {g.rating.toFixed(1)} ({g.reviewsCount})
                    </td>
                    <td>{g.deliveryDays} day(s)</td>
                    <td>
                      <button
                        className="btn btn-danger-ghost btn-sm"
                        onClick={() => removeGig(g.id)}
                        aria-label={`Delete ${g.title}`}
                      >
                        <img src="/img/delete.png" alt="" width={13} height={13} /> Delete
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

export default MyGigs;
