import { Send } from "@material-ui/icons";
import React, { useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";
function Newsletter() {
  const [newsliterdata,setnewsLiterdata]=useState("");

  const  handleClick = async (e) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    console.log("newsliter is tryin to connect 1");
    const { data } = await axios.post(
      "api/newsliter/",
      { email: newsliterdata },
      config
    );
    console.log(data)
    console.log("newsliter is tryin to connect 2");
  };

  return (
    <div className="flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#7ebbce] ">
      <h1 className="text-[50px] font-bold mobile:text-[30px]">NEWSLETTER</h1>
      <h2 className="text-[20px] mt-2  mobile:text-center mobile:p-3">
        Toujours en contact avec nous, pour vos produits préférés
      </h2>
      <div
        className="flex mt-[3rem] items-center justify-between min-w-[30rem] min-h-[2rem] bg-white
 border-[#cccccc] rounded-[5px] overflow-hidden 
 mobile:min-w-[20rem] "
      >
        <input
          className="border-none pl-[20px] flex-[7] outline-none "
          type="email"
          placeholder="email"
          onChange={(e) => setnewsLiterdata(e.target.value)}
        />

        <button className="bg-[#4caf50] flex-1 h-[100%] " onClick={handleClick}>
          <Send className="text-white " />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
