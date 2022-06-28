import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/1.png"
          className="card-img"
          alt="Background"
          height="500px"
          width="100px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-right">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">New Watch</h5>
            <p className="card-text">
              1/10TH OF A SECOND MONOPUSHER CHRONOGRAPH REF. 5470P-001
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
