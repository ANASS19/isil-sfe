import { ShoppingCartOutlined, Search } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import React, { useState } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/apiCalls";
import Logo from "../logotab3lia.png";
import { Nav, Container, DropdownButton, Dropdown } from "react-bootstrap";
import { Redirect } from "react";

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  const useractive = useSelector((state) => state.user);
  // const userloged = useractive.currentUser.name;
  console.log(useractive);
  console.log(quantity);
  let Links = [
    { name: "ACCUIL", link: "/" },
    { name: "CATALOGUE", link: "/catalogue" },
    { name: "MON DESIGNE", link: "/mondesign" },
    { name: "SERVICES", link: "/services" },
    { name: "CONTACT", link: "/contact" },
    { name: "Profile", link: "/Profile" },
  ];
  let [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    console.log(
      "is trying to logout*****************************---------------"
    );
    dispatch(logout());
  };
  return (
    <div className="relative top-0 left-0 z-10 w-full shadow-md ">
      <div className="items-center justify-between py-4 bg-white md:flex md:px-10 px-7 mobile:pl-1 ">
        <div className=" cursor-pointer flex items-center w-[100px] mr-[10px]">
          <img src={Logo} alt="logo" />
          {/* Search Input */}
          <div className="SearchContainer flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px]">
            <input
              type="text"
              className="border-none mobile:w-[90px] outline-none"
              placeholder="Search"
            />
            <Search className="text-[#145fe2] m" style={{ fontSize: "20px" }} />
          </div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute text-3xl cursor-pointer right-8 top-6 md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-25 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="text-xl md:ml-4 md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-[#0c5ff2] duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="my-2 text-xl md:ml-2 md:my-2">
            <Link to="/cart">
              <Badge
                badgeContent={quantity}
                color="primary"
                className="my-2 text-xl md:ml-8 md:my-0 "
              >
                <a href="/cart">
                  {" "}
                  <ShoppingCartOutlined />
                </a>
              </Badge>
            </Link>
          </li>
          {useractive.currentUser == null ? (
            <Button>
              <a href="/login">Se connecter</a>
            </Button>
          ) : (
            <DropdownButton
              id="dropdown-basic-button"
              title={useractive.currentUser.name}
            >
              <Dropdown.Item href="/Profile">Compte</Dropdown.Item>
              <Dropdown.Item href="/login" onClick={logoutHandler}>
                Déconnecter
              </Dropdown.Item>
            </DropdownButton>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

// {
//   userInfo ? a : b;
// }

{
  /* <input
              type="button"
              onClick={logoutHandler}
              className="btn"
              value="logout"
            /> */
}
{/* <NavDropdown title={useractive.currentUser.name} id="username">
              <Link to="/Profile">
                <NavDropdown.Item>
                  <a href="/Profile">Profile</a>
                </NavDropdown.Item>
              </Link>

              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown> */}