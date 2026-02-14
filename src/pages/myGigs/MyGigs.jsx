import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";

function MyGigs() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "Jobs" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button>Add New Job</button>
            </Link>
          )}
        </div>
        <table>
          <tr>
            <th>Location</th>
            <th>Title</th>
            <th>Price (₹)</th>
           
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <span>Haryana</span>
            </td>
            <td>Web Developer Needed</td>
            <td>6000</td>
           
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <span>Delhi</span>
            </td>
            <td>Electrician</td>
            <td>12000</td>
            
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <span>Uttar Pradesh</span>
            </td>
            <td>System Engineer</td>
            <td>19000</td>
          
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
        {  /* <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>119.<sup>99</sup></td>
            <td>29</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr> 
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>59.<sup>99</sup></td>
            <td>34</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr> */}
          <tr>
            <td>
              <span>Punjab</span>
            </td>
            <td>Chief Information Officer</td>
            <td>11000</td>
         
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr> 
        </table>
      </div>
    </div>
  );
}

export default MyGigs;
