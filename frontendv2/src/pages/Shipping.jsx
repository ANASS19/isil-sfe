import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { PayPalButton } from "react-paypal-button-v2";

export default class Shipping extends Component {
  //style
  inputStyle =
    "border-[2px] border-silver rounded-lg outline-[#130bf2] p-2 focus:border-[#130bf2] ease-linear duration-200 min-w-0";

  buttonStyle =
    "mt-5 flex justify-center bg-[#130bf2] text-white font-medium rounded-md p-2 ease-linear duration-200";
  activeButtonStyle =
    " hover:bg-white hover:text-[#130bf2] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#130bf2] cursor-pointer";
  disableButtonStyle = " opacity-50";
  //states
  state = {
    Address: "",
    City: "",
    phone: "",
    Postal: "",
  };

  render() {
    return (
      <div>
        <Navbar />

        <div className="flex justify-center w-[100%]  bg-[rgb(146,166,247)]">
          <div className="flex flex-col  w-[40%] h-[95%] absolute top-[20%]  shadow-lg border-silver border-[2px] bg-white rounded-lg p-5 mobile:w-[90%]">
            <text className="text-2xl ">PAIEMENT</text>

            {/* Address */}
            <input
              className={this.inputStyle + ` mt-7 mobile:w-[100%]`}
              name="Address"
              type="text"
              placeholder="Entere adresse"
              value={this.state.Address}
              required
            />

            {/* City */}
            <input
              className={this.inputStyle + ` mt-7 mobile:w-[100%]`}
              name="City"
              type="text"
              placeholder="Enter ville"
              value={this.state.City}
              required
            />
            {/* Postal Code */}
            <input
              className={this.inputStyle + ` mt-7 mobile:w-[100%]`}
              name="Postal Code"
              type="text"
              placeholder="Enter Code Postal"
              value={this.state.Postal}
              required
            />

            {/* phone */}
            <input
              className={this.inputStyle + ` mt-7 mobile:w-[100%]`}
              name="phone"
              type="text"
              placeholder="N° téléphone"
              value={this.state.phone}
              required
            />

            {/* Submit button */}
            <input
              type="button"
              className={this.buttonStyle + this.activeButtonStyle}
              value="VALIDER"
            />

            <br />

            <PayPalButton
              className="mt-[20px] flex justify-center bg-white "
              amount="100"
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                );

                // OPTIONAL: Call your server to save the transaction
                return fetch("/paypal-transaction-complete", {
                  method: "post",
                  body: JSON.stringify({
                    orderID: data.orderID,
                  }),
                });
              }}
            />
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
