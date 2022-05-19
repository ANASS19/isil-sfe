import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import axios from "axios";

// import { serviceapi } from '../apifolder/ServiceApi';
function Services() {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const { data } = await axios.get("/api/Services/");
    setServiceData(data);
    }

    fetchServices();
  }, []);

  return (
    <div>
      <Navbar />
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            How to send money
          </h1>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                    key={id}
                  >
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Services;
