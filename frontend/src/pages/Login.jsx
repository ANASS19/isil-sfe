import React, { Component } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default class Login extends Component {
  //style
  inputStyle =
    "border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 ";

  //states
  state = {
    email: "",
    pass: "",
  };

  handleChange = (evt) => {
    const fields = Object.assign({}, this.state);
    fields[evt.target.name] = evt.target.value;
    this.setState({ ...fields });
  };

  render() {
    return (
      <div>
      <Navbar />
      <div className="flex justify-center w-[100%] h-[100vh] bg-[#92a6f7]">
        <div className="flex flex-col absolute top-[30%] bg-white shadow-lg border-silver border-[2px] rounded-lg p-5 w-[40%] mobile:w-[90%]">
          <text className="text-2xl ">
Connexion</text>

          {/* First Name Last Name */}
          <div className="flex mt-7">
            {/* Email */}
            <input
              className={this.inputStyle + ` mt-2 w-[100%]`}
              name="email"
              type="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}
              required
            />
          </div>
          {/* Password */}
          <div className="flex mt-7">
            <input
              className={this.inputStyle + ` w-[100%]`}
              name="pass"
              type="password"
              placeholder="Mot de passe"
              onChange={this.handleChange}
              value={this.state.pass}
              required
            />
           
          </div>
          {/* Submit button */}
          <input
            type="button"
            className="mt-5 flex justify-center bg-[#130bf2] text-white font-medium rounded-md p-2 hover:bg-white hover:text-[#130bf2] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#130bf2] ease-linear duration-200"
            value="Se connecter"
            disabled
          />
           <div className="flex mt-2 ml-6">
              <h6>Vous n'avez pas de compte ?</h6>
              <a href="/register" className="text-[#ff0754]" >Créer un nouveau compte</a>
            </div>
        </div>
        </div>
     
        <Footer />
      </div>
      
    );
  }
}