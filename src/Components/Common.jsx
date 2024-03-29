import React from "react";
import "./common.css";
import { NavLink } from "react-router-dom";
const Common = (probs) => {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                <h1>
                  {probs.name}<br/>
                  <strong className="brand-name"> Myweb</strong>
                </h1>
                <h2 className="my-3">
                  We are the team of talented developer making websites
                </h2>
                <div className="mt-3">
                  <NavLink to={probs.visit} className="btn-get-started">
                    {probs.btname}
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2  header-img">
                <img src={probs.imgsrc} className="img-fluid animated" alt="img"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Common;
