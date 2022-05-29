import React, { useState, useEffect } from "react";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../logotab3lia.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Register() {
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
  //   first: "",
  //   last: "",
  //   email: "",
  //   phone: "",
  //   pass: "",
  //   confirm: "",
  //   errors: {
  //     confirm: false,
  //   },
  // };
  const [name, setName] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  // const { error, loading, userInfo } = userRegister;

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect);
  //   }
  // }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    console.log(
      "is trying to register*****************************---------------"
    );
    e.preventDefault();

    if (password != confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, last_name, email, password));
    }
  };
  return (
    <div className="flex justify-center w-[100%] h-[100vh] bg-[#92a6f7]">
      <img src={Logo} alt="logo" />
      <div className="flex flex-col absolute top-[20%] shadow-lg border-silver border-[2px] bg-white rounded-lg p-5 mobile:w-[90%]">
        <text className="text-2xl ">Inscription</text>

        {/* First Name Last Name */}
        <div className="flex w-auto mt-7">
          <input
            className={inputStyle + ` mr-3`}
            name="first"
            type="text"
            placeholder="Nom"
            onChange={(e) => setLastname(e.target.value)}
            required
          />

          <input
            className={inputStyle}
            name="last"
            type="text"
            placeholder="Prénom"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <input
          className={inputStyle + ` mt-7 mobile:w-[100%]`}
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <div className="flex mt-7">
          <input
            className={inputStyle + ` mr-3`}
            name="pass"
            type="password"
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className={inputStyle}
            name="confirm"
            type="password"
            placeholder="Confirmez mot de passe"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <span className="flex-1 mr-3"></span>
          <span className="flex-1 text-red-500"></span>
        </div>

        <input
          type="button"
          onClick={submitHandler}
          className="btn"
          value="Inscription"
        />
        <Link className="button-inv" to="/login">
          
        </Link>
      </div>
      <Footer />
    </div>
  );
}
export default Register;
