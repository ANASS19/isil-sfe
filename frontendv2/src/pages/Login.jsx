import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../logotab3lia.png";

function Login() {
  const [username, setemail] = useState("");
  const [password, setpass] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  //style
  const inputStyle =
    "border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 ";

  // //states
  // state = {
  //   email: "",
  //   pass: "",
  // };

  // handleChange = (evt) => {
  //   const fields = Object.assign({}, this.state);
  //   fields[evt.target.name] = evt.target.value;
  //   this.setState({ ...fields });
  //   console.log("test is taped ")
  // };
  const handleClick = (e) => {
    console.log("is tryin to connect 1");
    e.preventDefault();
    login(dispatch, { username, password });
    console.log("is tryin to connect 2");
  };
  return (
    <div>
      <div className="flex justify-center w-[100%] h-[100vh] bg-[#92a6f7]">
        <img src={Logo} alt="logo" />
        <div className="flex flex-col absolute top-[30%] bg-white shadow-lg border-silver border-[2px] rounded-lg p-5 w-[40%] mobile:w-[90%]">
          <text className="text-2xl ">Connexion</text>
          <form>
            {/* First Name Last Name */}
            <div className="flex mt-7">
              {/* Email */}
              <input
                className={inputStyle + ` mt-2 w-[100%]`}
                name="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
                // value={this.state.email}
                required
              />
            </div>

            {/* Password */}
            <div className="flex mt-7">
              <input
                className={inputStyle + ` w-[100%]`}
                name="pass"
                type="password"
                placeholder="Mot de passe"
                onChange={(e) => setpass(e.target.value)} // onChange={this.handleChange}
                // value={this.state.pass}
                required
              />
            </div>

            {/* Submit button */}
            <input
              type="button"
              className="mt-5 flex justify-center bg-[#130bf2] text-white font-medium rounded-md p-2 hover:bg-white hover:text-[#130bf2] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#130bf2] ease-linear duration-200"
              onClick={handleClick}
              disabled={isFetching}
              value="Se connecter"
            />

            <div className="flex mt-2 ml-6">
              <h6>Vous n'avez pas de compte ?</h6>
              <a href="/register" className="text-[#ff0754]">
                Créer un nouveau compte
              </a>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
