import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Shipping() {
  //style
  const inputStyle =
    "border-[2px] border-silver rounded-lg outline-[#130bf2] p-2 focus:border-[#130bf2] ease-linear duration-200 min-w-0";

  const buttonStyle =
    "mt-5 flex justify-center bg-[#130bf2] text-white font-medium rounded-md p-2 ease-linear duration-200";
  const activeButtonStyle =
    " hover:bg-white hover:text-[#130bf2] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#130bf2] cursor-pointer";
  const disableButtonStyle = " opacity-50";

  //states
  // state = {
  //   Address: "",
  //   City: "",
  //   phone: "",
  //   Postal: "",
  // };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center w-[100%] h-[100vh] bg-[#92a6f7]">
        <div className="flex flex-col  w-[40%] absolute top-[20%] shadow-lg border-silver border-[2px] bg-white rounded-lg p-5 mobile:w-[90%]">
          <text className="text-2xl ">SHIPPING</text>

          {/* Address */}
          <input
            className={inputStyle + ` mt-7 mobile:w-[100%]`}
            name="Address"
            type="text"
            placeholder="Enter adress"
            // value={state.Address}
            required
          />

          {/* City */}
          <input
            className={inputStyle + ` mt-7 mobile:w-[100%]`}
            name="City"
            type="text"
            placeholder="Enter City"
            // value={this.state.City}
            required
          />
          {/* Postal Code */}
          <input
            className={inputStyle + ` mt-7 mobile:w-[100%]`}
            name="Postal Code"
            type="text"
            placeholder="Enter Postal Code"
            // value={this.state.Postal}
            required
          />

          {/* phone */}
          <input
            className={inputStyle + ` mt-7 mobile:w-[100%]`}
            name="phone"
            type="text"
            placeholder="N° téléphone"
            // value={this.state.phone}
            required
          />

          {/* Submit button */}
          <input
            type="button"
            className={buttonStyle + activeButtonStyle}
            value="CONTINUE"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Shipping;
