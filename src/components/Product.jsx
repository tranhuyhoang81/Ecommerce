import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Product = () => {
  const [dataProduct, setDataProduct] = useState([]);
  var location = useLocation();
  var item = location.state;
  var data = item;
  //   console.log(data);
  return (
    <>
      <div className="container bg-light">
        <div className="col-md-6">
          <img
            src={data.item.image}
            alt={data.item.title}
            height="400px"
            width="400px"
          ></img>
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{data.item.category}</h4>
          <h1 className="display-5">{data.item.title}</h1>
          <h3 className="display-6 fw-bold my-4">${data.item.price}</h3>
          <p className="lead">{data.item.description}</p>
          <button className="btn btn-outline-dark">Add to cart</button>
          <button className="btn btn-outline-dark">Go to cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;
